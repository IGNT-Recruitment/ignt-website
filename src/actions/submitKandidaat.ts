'use server';

import { supabaseServer } from '@/lib/supabase/server';
import { sendEmail, sendInternalNotification } from '@/lib/resend';
import { kandidaatSchema } from '@/lib/validations/kandidaat';
import { getKandidaatConfirmationHtml } from '@/lib/email-templates/kandidaat';
import { getInternalNotificationHtml } from '@/lib/email-templates/internal';

export async function submitKandidaat(formData: unknown) {
  // Validate input
  const validated = kandidaatSchema.safeParse(formData);

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
      console.log('📝 Local mode: Kandidaat inschrijving (niet opgeslagen):', data);
      return {
        success: true,
        leadId: 'local-' + Date.now(),
      };
    }

    // Create lead in database
    const lead = await supabaseServer.from('leads').insert([
      {
        type: 'kandidaat',
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        cv_url: null, // Will be updated if CV is uploaded
        answers: {
          specialization: data.specialization,
          experience: data.experience,
          motivation: data.motivation,
          work_form: data.work_form,
          availability: data.availability,
        },
      },
    ]).select().single();

    if (lead.error) throw lead.error;

    // Send confirmation email to user
    await sendEmail({
      to: data.email,
      subject: 'Bedankt voor uw inschrijving - IGNT',
      html: getKandidaatConfirmationHtml(data.name, data.email),
    });

    // Send internal notification
    await sendInternalNotification({
      subject: `Nieuwe kandidaat lead: ${data.name}`,
      html: getInternalNotificationHtml('kandidaat', data.name, data.email),
    });

    return {
      success: true,
      leadId: lead.data.id,
    };
  } catch (error) {
    console.error('Error submitting kandidaat form:', error);
    return {
      success: false,
      error: 'Er is een fout opgetreden. Probeer het later opnieuw.',
    };
  }
}
