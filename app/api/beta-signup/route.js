import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Διαβάζουμε τα κλειδιά ΜΕΣΑ στη συνάρτηση (η πιο σωστή πρακτική στο Next.js)
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL;

    // Αν λείπουν τα κλειδιά της Supabase, το σταματάμε
    if (!supabaseUrl || !supabaseServiceKey) {
      console.error("Λείπουν τα κλειδιά της Supabase από το .env.local");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { email, platform } = await request.json();

    if (!email || !platform) {
      return NextResponse.json(
        { error: 'Το email και η πλατφόρμα είναι υποχρεωτικά.' },
        { status: 400 }
      );
    }

    // Εισαγωγή στη βάση δεδομένων
    const { error } = await supabase.from('beta_signups').insert([
      {
        email: email.trim().toLowerCase(),
        platform: platform,
      },
    ]);

    if (error) {
      console.error('Σφάλμα Supabase:', error.message);
      
      if (error.code === '23505') {
        return NextResponse.json({ error: 'Αυτό το email έχει ήδη εγγραφεί!' }, { status: 400 });
      }
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // --- Αποστολή στο Discord ---
    if (discordWebhookUrl) {
      try {
        await fetch(discordWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            content: `🚀 **Νέα εγγραφή OnBars Beta!**\n📧 **Email:** \`${email}\`\n📱 **Πλατφόρμα:** ${platform === 'Android' ? '🟢 Android' : '🍏 iOS'}`
          }),
        });
      } catch (discordErr) {
        console.error('Σφάλμα αποστολής στο Discord:', discordErr);
      }
    } else {
      console.warn("Δεν βρέθηκε το DISCORD_WEBHOOK_URL στο .env.local");
    }
    // ----------------------------

    return NextResponse.json({ success: true }, { status: 200 });
    
  } catch (err) {
    console.error('Σφάλμα διακομιστή:', err);
    return NextResponse.json({ error: 'Εσωτερικό σφάλμα διακομιστή' }, { status: 500 });
  }
}