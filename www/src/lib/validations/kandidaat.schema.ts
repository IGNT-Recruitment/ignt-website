import { z } from 'zod';

export const KandidaatLeadSchema = z.object({
  name: z
    .string()
    .min(2, 'Naam moet minstens 2 karakters lang zijn')
    .max(100, 'Naam mag maximaal 100 karakters lang zijn'),
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
  cv: z
    .instanceof(File)
    .refine((file) => file.size > 0, 'CV moet worden geüpload')
    .refine(
      (file) => file.size <= 5 * 1024 * 1024,
      'Bestand mag maximaal 5MB zijn'
    )
    .refine(
      (file) =>
        [
          'application/pdf',
          'application/msword',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        ].includes(file.type),
      'Alleen PDF en Word documenten zijn toegestaan'
    ),
  answers: z.record(z.string()).optional(),
});

export type KandidaatLeadSchemaType = z.infer<typeof KandidaatLeadSchema>;
