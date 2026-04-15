'use client';

import { ReactNode, useState } from 'react';
import { ProgressSteps } from '@/components/brand';
import { SecondaryButton } from '@/components/brand/SecondaryButton';
import { PrimaryButton } from '@/components/brand/PrimaryButton';

interface FunnelStep {
  id: string;
  label: string;
  component: ReactNode;
}

interface FunnelShellProps {
  title: string;
  steps: FunnelStep[];
  onComplete: () => void;
  onStepChange?: (stepId: string) => void;
}

export function FunnelShell({
  title,
  steps,
  onComplete,
  onStepChange,
}: FunnelShellProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const currentStep = steps[currentStepIndex];
  const isLastStep = currentStepIndex === steps.length - 1;

  const handleNext = () => {
    if (isLastStep) {
      onComplete();
    } else {
      const nextIndex = currentStepIndex + 1;
      setCurrentStepIndex(nextIndex);
      onStepChange?.(steps[nextIndex].id);
    }
  };

  const handlePrevious = () => {
    if (currentStepIndex > 0) {
      const prevIndex = currentStepIndex - 1;
      setCurrentStepIndex(prevIndex);
      onStepChange?.(steps[prevIndex].id);
    }
  };

  const stepLabels = steps.map((s) => s.label);

  return (
    <div className="min-h-screen bg-bg-primary flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-2xl">
          <h1 className="text-4xl font-bold text-center text-text-primary mb-8">
            {title}
          </h1>

          <ProgressSteps
            currentStep={currentStepIndex + 1}
            totalSteps={steps.length}
            labels={stepLabels}
          />

          <div className="mt-12">{currentStep.component}</div>

          <div className="flex gap-4 justify-center mt-12">
            {currentStepIndex > 0 && (
              <PrimaryButton onClick={handlePrevious}>
                Terug
              </PrimaryButton>
            )}
            <SecondaryButton onClick={handleNext}>
              {isLastStep ? 'Verzenden' : 'Volgende'}
            </SecondaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
