'use client';

import { useState } from 'react';
import { FunnelShell } from '@/components/funnel/FunnelShell';
import { MultipleChoiceStep } from '@/components/funnel/MultipleChoiceStep';
import { SuccessScreen } from '@/components/funnel/SuccessScreen';
import { submitWerkgever } from '@/actions/submitWerkgever';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  vacancies: string;
  recruitment_method: string;
  main_challenge: string;
  availability: string;
  bureau_experience: string;
}

export default function WerkgeverPage() {
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
      const result = await submitWerkgever(formData);

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
      id: 'vacancies',
      label: 'Vacatures',
      component: (
        <MultipleChoiceStep
          question="Hoeveel IT-vacatures per kwartaal?"
          options={[
            { value: '1-2', label: '1-2' },
            { value: '3-5', label: '3-5' },
            { value: '6-10', label: '6-10' },
            { value: '10+', label: '10+' },
          ]}
          selectedValue={formData.vacancies}
          onSelect={(value) => setFormData((prev) => ({ ...prev, vacancies: value }))}
        />
      ),
    },
    {
      id: 'recruitment_method',
      label: 'Werving',
      component: (
        <MultipleChoiceStep
          question="Hoe verloopt uw huidige werving?"
          options={[
            { value: 'bureau', label: 'Via bureau' },
            { value: 'linkedin', label: 'LinkedIn' },
            { value: 'network', label: 'Netwerk' },
            { value: 'no_process', label: 'Geen vast proces' },
          ]}
          selectedValue={formData.recruitment_method}
          onSelect={(value) =>
            setFormData((prev) => ({ ...prev, recruitment_method: value }))
          }
        />
      ),
    },
    {
      id: 'main_challenge',
      label: 'Uitdaging',
      component: (
        <MultipleChoiceStep
          question="Grootste uitdaging bij vinden van kandidaat?"
          options={[
            { value: 'quality', label: 'Kwaliteit CV\'s' },
            { value: 'speed', label: 'Doorlooptijd' },
            { value: 'cost', label: 'Kosten' },
            { value: 'culture_fit', label: 'Culturele fit' },
          ]}
          selectedValue={formData.main_challenge}
          onSelect={(value) =>
            setFormData((prev) => ({ ...prev, main_challenge: value }))
          }
        />
      ),
    },
    {
      id: 'availability',
      label: 'Beschikbaarheid',
      component: (
        <MultipleChoiceStep
          question="Wanneer inzetbaar?"
          options={[
            { value: 'asap', label: 'Zo snel mogelijk' },
            { value: '1month', label: 'Binnen 1 maand' },
            { value: '3months', label: '1-3 maanden' },
            { value: 'explore', label: 'Oriënterend' },
          ]}
          selectedValue={formData.availability}
          onSelect={(value) => setFormData((prev) => ({ ...prev, availability: value }))}
        />
      ),
    },
    {
      id: 'bureau_experience',
      label: 'Ervaring',
      component: (
        <MultipleChoiceStep
          question="Ervaring met IT-recruitmentbureaus?"
          options={[
            { value: 'first_time', label: 'Eerste keer' },
            { value: 'positive', label: 'Positief' },
            { value: 'negative', label: 'Negatief' },
            { value: 'mixed', label: 'Mix' },
          ]}
          selectedValue={formData.bureau_experience}
          onSelect={(value) =>
            setFormData((prev) => ({ ...prev, bureau_experience: value }))
          }
        />
      ),
    },
  ];

  if (step === 'form') {
    return (
      <WerkgeverFormStep onSubmit={handleFormSubmit} error={error} />
    );
  }

  if (step === 'success') {
    return (
      <SuccessScreen
        title="Bedankt!"
        message="Uw inschrijving is ontvangen. Ons team neemt binnenkort contact met u op."
        ctaText="Terug naar home"
        ctaHref="/"
      />
    );
  }

  return (
    <FunnelShell
      title="Werkgever Match Scan"
      steps={steps}
      onComplete={handleComplete}
      onStepChange={() => setError(null)}
    />
  );
}

function WerkgeverFormStep({
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
          Werkgever Match Scan
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
            placeholder="uw.email@bedrijf.nl"
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

        <div>
          <label className="block text-text-secondary mb-2">Bedrijfsnaam</label>
          <input
            type="text"
            required
            value={formData.company || ''}
            onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
            className="w-full px-4 py-3 bg-bg-primary border border-purple-500 border-opacity-30 rounded-lg text-text-primary focus:border-purple-500 focus:shadow-glow-purple focus:outline-none"
            placeholder="Uw bedrijf"
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
