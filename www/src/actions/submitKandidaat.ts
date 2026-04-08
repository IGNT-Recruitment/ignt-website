'use server';

import { z } from 'zod';
import { createSupabaseAdminClient } from '@/lib/supabase/server';
import { KandidaatLeadSchema } from '@/lib/validations/kandidaat.schema';
import { sendKandidaatConfirmation, sendInternalNotification } from '@/lib/resend';

export async function submitKandidaat(formData: FormData) {
  try {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const cvUrl = formData.get('cvUrl') as string;
    const answersJson = formData.get('answers') as string;

    const answers = JSON.parse(answersJson);

    const validated = KandidaatLeadSchema.parse({
      name,
      email,
      phone: phone || undefined,
      cvUrl: cvUrl || undefined,
      answers,
    });

    const supabase = createSupabaseAdminClient();
    const { data, error } = await supabase.from('leads').insert([
      {
        type: 'kandidaat',
        name: validated.name,
        email: validated.email,
        phone: validated.phone,
        cv_url: validated.cvUrl,
        answers: validated.answers,
      },
    ]);

    if (error) throw error;

    await sendKandidaatConfirmation(validated.name, validated.email);
    await sendInternalNotification('kandidaat', validated);

    return { success: true, data };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        errors: error.flatten().fieldErrors,
      };
    }
    console.error('Submit kandidaat error:', error);
    return {
      success: false,
      errors: { general: ['Er is iets fout gegaan. Probeer het later opnieuw.'] },
    };
  }
}
