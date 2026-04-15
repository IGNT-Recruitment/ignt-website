import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

export async function getSignedUploadUrl(fileName: string) {
  const { data, error } = await supabaseClient
    .storage
    .from('cv-uploads')
    .createSignedUploadUrl(`/${Date.now()}-${fileName}`);

  if (error) throw error;
  return data;
}

export async function uploadFile(url: string, file: File) {
  const response = await fetch(url, {
    method: 'PUT',
    body: file,
    headers: {
      'Content-Type': file.type,
    },
  });

  if (!response.ok) throw new Error('Failed to upload file');
  return response;
}
