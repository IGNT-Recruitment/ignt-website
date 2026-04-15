import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

export const supabaseServer = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

export async function getLead(id: string) {
  const { data, error } = await supabaseServer
    .from('leads')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return data;
}

export async function createLead(leadData: {
  type: 'werkgever' | 'kandidaat';
  name: string;
  email: string;
  phone?: string;
  company?: string;
  cv_url?: string;
  answers: Record<string, string | string[]>;
}) {
  const { data, error } = await supabaseServer
    .from('leads')
    .insert([leadData])
    .select()
    .single();

  if (error) throw error;
  return data;
}
