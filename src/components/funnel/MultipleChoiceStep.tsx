'use client';

import { BrandCard } from '@/components/brand/BrandCard';

export interface ChoiceOption {
  value: string;
  label: string;
}

interface MultipleChoiceStepProps {
  question: string;
  options: ChoiceOption[];
  selectedValue?: string;
  onSelect: (value: string) => void;
  allowMultiple?: boolean;
}

export function MultipleChoiceStep({
  question,
  options,
  selectedValue,
  onSelect,
}: MultipleChoiceStepProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-text-primary">{question}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onSelect(option.value)}
            className={`p-4 text-left transition-all duration-300 ${
              selectedValue === option.value
                ? 'bg-gradient-primary border-2 border-accent-magenta shadow-glow-magenta'
                : 'bg-bg-secondary border-2 border-transparent hover:border-accent-purple'
            } rounded-lg`}
          >
            <BrandCard className="!p-4">
              <p className="text-text-primary font-medium">{option.label}</p>
            </BrandCard>
          </button>
        ))}
      </div>
    </div>
  );
}
