'use client';

import { useState } from 'react';
import { FunnelShell } from '@/components/funnel/FunnelShell';
import { MultipleChoiceStep } from '@/components/funnel/MultipleChoiceStep';
import { SuccessScreen } from '@/components/funnel/SuccessScreen';
import { submitKandidaat } from '@/actions/submitKandidaat';

interface FormData {
  name: string;
  email: string;
  phone: string;
  specialization: string;
  experience: string;
  motivation: string;
  work_form: string;
  availability: string;
}

export default function KandidaatPage() {
  const [step, setStep] = useState<'form' | 'questions' | 'success'>('form');
  const [formData, setFormData] = useState<Partial<FormData>>({});
  const [, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFormSubmit = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep('questions');
  };

  const handleComplete = async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await submitKandidaat(formData);

      if (result.success) {
        setStep('success');
      } else {
        const errorMessage = typeof result.error === 'string' ? result.error : 'Er is een fout opgetreden';
        setError(errorMessage);
      }
    } catch (err) {
      setError('Er is een fout opgetreden. Probeer het later opnieuw.');
    } finally {
      setLoading(false);
    }
  };

  const steps = [
    {
      id: 'specialization',
      label: 'Specialisatie',
      component: (
        <MultipleChoiceStep
          question="In welke IT-richting zoek je uitdaging?"
          options={[
            { value: 'infrastructure', label: 'Infrastructure/MSP' },
            { value: 'cloud', label: 'Cloud & DevOps' },
            { value: 'security', label: 'Cybersecurity' },
            { value: 'development', label: 'Development' },
            { value: 'management', label: 'Management' },
          ]}
          selectedValue={formData.specialization}
          onSelect={(value) =>
            setFormData((prev) => ({ ...prev, specialization: value }))
          }
        />
      ),
    },
    {
      id: 'experience',
      label: 'Ervaring',
      component: (
        <MultipleChoiceStep
          question="Hoeveel jaar ervaring?"
          options={[
            { value: '0-2', label: '0-2 jaar' },
            { value: '3-5', label: '3-5 jaar' },
            { value: '6-10', label: '6-10 jaar' },
            { value: '10+', label: '10+ jaar' },
          ]}
          selectedValue={formData.experience}
          onSelect={(value) => setFormData((prev) => ({ ...prev, experience: value }))}
        />
      ),
    },
    {
      id: 'motivation',
      label: 'Motivatie',
      component: (
        <MultipleChoiceStep
          question="Wat spreekt je aan in nieuwe rol?"
          options={[
            { value: 'technical', label: 'Technische diepgang' },
            { value: 'client', label: 'Klantcontact' },
            { value: 'growth', label: 'Groei' },
            { value: 'salary', label: 'Salaris' },
            { value: 'culture', label: 'Cultuur' },
          ]}
          selectedValue={formData.motivation}
          onSelect={(value) =>
            setFormData((prev) => ({ ...prev, motivation: value }))
          }
        />
      ),
    },
    {
      id: 'work_form',
      label: 'Werkvorm',
      component: (
        <MultipleChoiceStep
          question="Werkvorm?"
          options={[
            { value: 'fulltime', label: 'Fulltime vast' },
            { value: 'parttime', label: 'Parttime' },
            { value: 'freelance', label: 'Freelance/ZZP' },
            { value: 'flexible', label: 'Flexibel' },
          ]}
          selectedValue={formData.work_form}
          onSelect={(value) => setFormData((prev) => ({ ...prev, work_form: value }))}
        />
      ),
    },
    {
      id: 'availability',
      label: 'Beschikbaarheid',
      component: (
        <MultipleChoiceStep
          question="Wanneer beschikbaar?"
          options={[
            { value: 'immediately', label: 'Direct' },
            { value: '1month', label: 'Binnen 1 maand' },
            { value: '3months', label: '1-3 maanden' },
            { value: 'explore', label: 'Oriënterend' },
          ]}
          selectedValue={formData.availability}
          onSelect={(value) =>
            setFormData((prev) => ({ ...prev, availability: value }))
          }
        />
      ),
    },
  ];

  if (step === 'form') {
    return (
      <KandidaatFormStep onSubmit={handleFormSubmit} error={error} />
    );
  }

  if (step === 'success') {
    return (
      <SuccessScreen
        title="Bedankt!"
        message="Uw inschrijving is ontvangen. We gaan op zoek naar de perfecte match!"
        ctaText="Terug naar home"
        ctaHref="/"
      />
    );
  }

  return (
    <FunnelShell
      title="Kandidaat Match Scan"
      steps={steps}
      onComplete={handleComplete}
      onStepChange={() => setError(null)}
    />
  );
}

function KandidaatFormStep({
  onSubmit,
  error,
}: {
  onSubmit: (data: Partial<FormData>) => void;
  error: string | null;
}) {
  const [formData, setFormData] = useState<Partial<FormData>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl space-y-6 bg-bg-secondary p-8 rounded-lg border border-purple-500 border-opacity-30"
      >
        <h1 className="text-4xl font-bold text-text-primary mb-8">
          Kandidaat Match Scan
        </h1>

        {error && (
          <div className="p-4 bg-red-500 bg-opacity-10 border border-red-500 rounded-lg text-red-500">
            {error}
          </div>
        )}

        <div>
          <label className="block text-text-secondary mb-2">Naam</label>
          <input
            type="text"
            required
            value={formData.name || ''}
            onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
            className="w-full px-4 py-3 bg-bg-primary border border-purple-500 border-opacity-30 rounded-lg text-text-primary focus:border-purple-500 focus:shadow-glow-purple focus:outline-none"
            placeholder="Uw naam"
          />
        </div>

        <div>
          <label className="block text-text-secondary mb-2">Email</label>
          <input
            type="email"
            required
            value={formData.email || ''}
            onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
            className="w-full px-4 py-3 bg-bg-primary border border-purple-500 border-opacity-30 rounded-lg text-text-primary focus:border-purple-500 focus:shadow-glow-purple focus:outline-none"
            placeholder="uw.email@example.com"
          />
        </div>

        <div>
          <label className="block text-text-secondary mb-2">Telefoonnummer</label>
          <input
            type="tel"
            value={formData.phone || ''}
            onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
            className="w-full px-4 py-3 bg-bg-primary border border-purple-500 border-opacity-30 rounded-lg text-text-primary focus:border-purple-500 focus:shadow-glow-purple focus:outline-none"
            placeholder="06 12345678"
          />
        </div>

        <button
          type="submit"
          className="w-full px-8 py-3 text-white font-semibold rounded-full bg-gradient-primary border-2 border-accent-purple-light shadow-glow-magenta hover:scale-105 hover:shadow-glow-magenta-intense transition-all duration-300"
        >
          Volgende
        </button>
      </form>
    </div>
  );
}
