'use client';

import * as React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { submitKandidaat } from '@/actions/submitKandidaat';
import { PrimaryButton, SecondaryButton } from '@/components/brand';
import { FileUploadInput } from './FileUploadInput';
import { cn } from '@/lib/utils';

// Define schema here (can also be imported from @/lib/validations/kandidaat.schema)
const KandidaatLeadSchema = z.object({
  name: z.string().min(2, 'Naam moet minstens 2 karakters lang zijn'),
  email: z.string().email('Geldig e-mailadres is verplicht'),
  phone: z.string().optional().or(z.literal('')),
  cv: z.instanceof(File).refine(
    (file) => file.size > 0,
    'CV moet worden geüpload'
  ),
});

type FormData = z.infer<typeof KandidaatLeadSchema>;

interface KandidaatLeadFormProps {
  answers: Record<string, string>;
  onSubmit?: () => void;
}

const KandidaatLeadForm: React.FC<KandidaatLeadFormProps> = ({
  answers,
  onSubmit,
}) => {
  const methods = useForm<FormData>({
    resolver: zodResolver(KandidaatLeadSchema),
    mode: 'onBlur',
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);

  const onSubmitForm = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('phone', data.phone || '');
      formData.append('cv', data.cv);
      formData.append('answers', JSON.stringify(answers));

      const result = await submitKandidaat(formData);

      if (result.success) {
        onSubmit?.();
      } else {
        setSubmitError('Er is iets fout gegaan. Probeer het later opnieuw.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError('Er is iets fout gegaan. Probeer het later opnieuw.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmitForm)} className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-text-primary">
            Voornaam <span className="text-red-500">*</span>
          </label>
          <input
            {...methods.register('name')}
            type="text"
            placeholder="Uw voornaam"
            className={cn(
              'w-full px-4 py-2 border-2 rounded-lg bg-bg-secondary text-text-primary',
              'focus:outline-none focus:ring-2 focus:ring-accent-magenta',
              'transition-all duration-200',
              methods.formState.errors.name
                ? 'border-red-500'
                : 'border-accent-purple hover:border-accent-magenta'
            )}
          />
          {methods.formState.errors.name && (
            <p className="text-red-500 text-sm mt-1">
              {methods.formState.errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-text-primary">
            E-mail <span className="text-red-500">*</span>
          </label>
          <input
            {...methods.register('email')}
            type="email"
            placeholder="jouw@email.nl"
            className={cn(
              'w-full px-4 py-2 border-2 rounded-lg bg-bg-secondary text-text-primary',
              'focus:outline-none focus:ring-2 focus:ring-accent-magenta',
              'transition-all duration-200',
              methods.formState.errors.email
                ? 'border-red-500'
                : 'border-accent-purple hover:border-accent-magenta'
            )}
          />
          {methods.formState.errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {methods.formState.errors.email.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-text-primary">
            Telefoonnummer <span className="text-text-tertiary">(optioneel)</span>
          </label>
          <input
            {...methods.register('phone')}
            type="tel"
            placeholder="+31 6 12345678"
            className={cn(
              'w-full px-4 py-2 border-2 rounded-lg bg-bg-secondary text-text-primary',
              'focus:outline-none focus:ring-2 focus:ring-accent-magenta',
              'transition-all duration-200',
              methods.formState.errors.phone
                ? 'border-red-500'
                : 'border-accent-purple hover:border-accent-magenta'
            )}
          />
          {methods.formState.errors.phone && (
            <p className="text-red-500 text-sm mt-1">
              {methods.formState.errors.phone.message}
            </p>
          )}
        </div>

        <FileUploadInput
          name="cv"
          label="Upload je CV"
          accept=".pdf,.doc,.docx"
          maxSize={5 * 1024 * 1024}
          required
        />

        {submitError && (
          <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-500 text-sm">
            {submitError}
          </div>
        )}

        <div className="flex gap-3 pt-4">
          <SecondaryButton
            type="submit"
            className="flex-1"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Verzenden...' : 'Indienen'}
          </SecondaryButton>
        </div>
      </form>
    </FormProvider>
  );
};

export { KandidaatLeadForm };
