import { z } from 'zod';

export const werkgeverSchema = z.object({
  name: z.string().min(2, 'Naam moet minstens 2 karakters lang zijn'),
  email: z.string().email('Voer een geldig e-mailadres in'),
  phone: z.string().optional(),
  company: z.string().min(2, 'Bedrijfsnaam moet minstens 2 karakters lang zijn'),
  vacancies: z.string().min(1, 'Selecteer het aantal vacatures'),
  recruitment_method: z.string().min(1, 'Selecteer uw huidige wervingsmethode'),
  main_challenge: z.string().min(1, 'Selecteer uw grootste uitdaging'),
  availability: z.string().min(1, 'Selecteer de gewenste beschikbaarheid'),
  bureau_experience: z.string().min(1, 'Selecteer uw ervaring met IT-bureaus'),
});

export type WerkgeverFormData = z.infer<typeof werkgeverSchema>;
