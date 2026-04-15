export interface Lead {
  id: string;
  type: 'werkgever' | 'kandidaat';
  name: string;
  email: string;
  phone?: string;
  company?: string;
  cv_url?: string;
  answers: Record<string, string | string[]>;
  created_at: string;
}

export interface WerkgeverAnswers {
  vacancies: string;
  recruitment_method: string;
  main_challenge: string;
  availability: string;
  bureau_experience: string;
}

export interface KandidaatAnswers {
  specialization: string;
  experience: string;
  motivation: string;
  work_form: string;
  availability: string;
}
