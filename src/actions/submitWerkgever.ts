'use server';

import { supabaseServer } from '@/lib/supabase/server';
import { sendEmail, sendInternalNotification } from '@/lib/resend';
import { werkgeverSchema } from '@/lib/validations/werkgever';
import { getWerkgeverConfirmationHtml } from '@/lib/email-templates/werkgever';
import { getInternalNotificationHtml } from '@/lib/email-templates/internal';

export async function submitWerkgever(formData: unknown) {
  // Validate input
  const validated = werkgeverSchema.safeParse(formData);

  if (!validated.success) {
    return {
      success: false,
      error: validated.error.flatten().fieldErrors,
    };
  }

  const data = validated.data;

  try {
    // For local development, return success without hitting Supabase
    if (process.env.NODE_ENV === 'development' || !process.env.NEXT_PUBLIC_SUPABASE_URL?.includes('supabase.co')) {
      console.log('📝 Local mode: Werkgever inschrijving (niet opgeslagen):', data);
      return {
        success: true,
        leadId: 'local-' + Date.now(),
      };
    }

    // Create lead in database
    const lead = await supabaseServer.from('leads').insert([
      {
        type: 'werkgever',
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        company: data.company,
        answers: {
          vacancies: data.vacancies,
          recruitment_method: data.recruitment_method,
          main_challenge: data.main_challenge,
          availability: data.availability,
          bureau_experience: data.bureau_experience,
        },
      },
    ]).select().single();

    if (lead.error) throw lead.error;

    // Send confirmation email to user
    await sendEmail({
      to: data.email,
      subject: 'Bedankt voor uw inschrijving - IGNT',
      html: getWerkgeverConfirmationHtml(data.name, data.email),
    });

    // Send internal notification
    await sendInternalNotification({
      subject: `Nieuwe werkgever lead: ${data.name}`,
      html: getInternalNotificationHtml('werkgever', data.name, data.email, data.company),
    });

    return {
      success: true,
      leadId: lead.data.id,
    };
  } catch (error) {
    console.error('Error submitting werkgever form:', error);
    return {
      success: false,
      error: 'Er is een fout opgetreden. Probeer het later opnieuw.',
    };
  }
}
