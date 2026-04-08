'use server';

import { z } from 'zod';
import { createSupabaseAdminClient } from '@/lib/supabase/server';
import { WerkgeverLeadSchema } from '@/lib/validations/werkgever.schema';
import { sendWerkgeverConfirmation, sendInternalNotification } from '@/lib/resend';

export async function submitWerkgever(formData: FormData) {
  try {
    // Parse form data
    const name = formData.get('name') as string;
    const company = formData.get('company') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const answersJson = formData.get('answers') as string;

    const answers = JSON.parse(answersJson);

    // Validate with Zod
    const validated = WerkgeverLeadSchema.parse({
      name,
      company,
      email,
      phone: phone || undefined,
      answers,
    });

    // Insert into Supabase
    const supabase = createSupabaseAdminClient();
    const { data, error } = await supabase.from('leads').insert([
      {
        type: 'werkgever',
        name: validated.name,
        email: validated.email,
        phone: validated.phone,
        company: validated.company,
        answers: validated.answers,
      },
    ]);

    if (error) throw error;

    // Send confirmation email
    await sendWerkgeverConfirmation(validated.name, validated.email, validated.company);

    // Send internal notification
    await sendInternalNotification('werkgever', validated);

    return { success: true, data };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        errors: error.flatten().fieldErrors,
      };
    }
    console.error('Submit werkgever error:', error);
    return {
      success: false,
      errors: { general: ['Er is iets fout gegaan. Probeer het later opnieuw.'] },
    };
  }
}
