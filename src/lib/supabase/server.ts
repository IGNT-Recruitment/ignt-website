import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export async function createSupabaseServerClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Ignore errors from read-only cookies
          }
        },
      },
    }
  );
}

export async function createSupabaseAdminClient() {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      cookies: {
        getAll() {
          return [];
        },
        setAll() {},
      },
    }
  );
}

export type Database = {
  public: {
    Tables: {
      leads: {
        Row: {
          id: string;
          type: 'werkgever' | 'kandidaat';
          name: string;
          email: string;
          phone?: string;
          company?: string;
          cv_url?: string;
          answers: Record<string, string>;
          created_at: string;
        };
        Insert: Omit<
          Database['public']['Tables']['leads']['Row'],
          'id' | 'created_at'
        >;
        Update: Partial<
          Database['public']['Tables']['leads']['Insert']
        >;
      };
    };
  };
};
