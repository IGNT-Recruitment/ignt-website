import { z } from 'zod';

export const WerkgeverLeadSchema = z.object({
  name: z
    .string()
    .min(2, 'Naam moet minstens 2 karakters lang zijn')
    .max(100, 'Naam mag maximaal 100 karakters lang zijn'),
  company: z
    .string()
    .min(2, 'Bedrijfsnaam moet minstens 2 karakters lang zijn')
    .max(100, 'Bedrijfsnaam mag maximaal 100 karakters lang zijn'),
  email: z
    .string()
    .email('Geldig e-mailadres is verplicht')
    .max(255, 'E-mailadres mag maximaal 255 karakters lang zijn'),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[0-9\s+\-()]{7,}$/.test(val),
      'Geldig telefoonnummer is verplicht'
    ),
  answers: z.record(z.string()).optional(),
});

export type WerkgeverLeadSchemaType = z.infer<typeof WerkgeverLeadSchema>;
