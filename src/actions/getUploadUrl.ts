'use server';

import { supabaseServer } from '@/lib/supabase/server';

export async function getUploadUrl(fileName: string) {
  try {
    const path = `${Date.now()}-${fileName}`;

    const { data, error } = await supabaseServer.storage
      .from('cv-uploads')
      .createSignedUploadUrl(path);

    if (error) throw error;

    return {
      success: true,
      uploadUrl: data.signedUrl,
      path: data.path,
    };
  } catch (error) {
    console.error('Error getting upload URL:', error);
    return {
      success: false,
      error: 'Failed to generate upload URL',
    };
  }
}
