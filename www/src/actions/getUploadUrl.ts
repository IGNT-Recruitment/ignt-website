'use server';

import { createSupabaseAdminClient } from '@/lib/supabase/server';

export async function getUploadUrl(
  fileName: string,
  fileType: string,
  fileSize: number
) {
  try {
    // Validate file constraints
    if (fileSize > 5 * 1024 * 1024) {
      return { success: false, error: 'Bestand is groter dan 5MB' };
    }

    const allowedMimes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];

    if (!allowedMimes.includes(fileType)) {
      return { success: false, error: 'Alleen PDF en Word documenten zijn toegestaan' };
    }

    // Generate unique path
    const path = `cv/${crypto.randomUUID()}/${fileName}`;

    // Get signed upload URL from Supabase
    const supabase = createSupabaseAdminClient();
    const { data, error } = await supabase.storage
      .from('cv-uploads')
      .createSignedUploadUrl(path);

    if (error) throw error;

    return {
      success: true,
      signedUrl: data.signedUrl,
      path,
    };
  } catch (error) {
    console.error('Get upload URL error:', error);
    return {
      success: false,
      error: 'Could not generate upload URL',
    };
  }
}
