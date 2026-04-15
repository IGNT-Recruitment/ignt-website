import { z } from 'zod';

export const kandidaatSchema = z.object({
  name: z.string().min(2, 'Naam moet minstens 2 karakters lang zijn'),
  email: z.string().email('Voer een geldig e-mailadres in'),
  phone: z.string().optional(),
  specialization: z.string().min(1, 'Selecteer uw IT-specialisatie'),
  experience: z.string().min(1, 'Selecteer uw ervaringsniveau'),
  motivation: z.string().min(1, 'Selecteer wat u aantrekkelijk vindt'),
  work_form: z.string().min(1, 'Selecteer uw gewenste werkform'),
  availability: z.string().min(1, 'Selecteer uw beschikbaarheid'),
  cv: z.instanceof(File).optional(),
});

export type KandidaatFormData = z.infer<typeof kandidaatSchema>;
