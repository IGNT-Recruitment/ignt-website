'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface ProgressStepsProps {
  steps: string[];
  currentStep: number;
}

const ProgressSteps: React.FC<ProgressStepsProps> = ({
  steps,
  currentStep,
}) => {
  return (
    <div className="w-full flex flex-col items-center gap-8 py-8">
      <div className="flex items-center gap-2 w-full max-w-4xl px-4 md:gap-4">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            {/* Circle */}
            <div className="flex flex-col items-center gap-2 flex-shrink-0">
              <div
                className={cn(
                  'w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300',
                  index < currentStep
                    ? 'bg-accent-purple border-2 border-accent-purple text-text-primary'
                    : index === currentStep
                    ? 'bg-accent-magenta border-3 border-accent-purple shadow-glow-magenta text-text-primary'
                    : 'bg-transparent border-2 border-text-secondary text-text-secondary'
                )}
              >
                {index + 1}
              </div>
              <span className="text-xs md:text-sm font-semibold text-center max-w-[60px]">
                {step}
              </span>
            </div>

            {/* Connector Line (not after last step) */}
            {index < steps.length - 1 && (
              <div
                className={cn(
                  'flex-1 h-1 transition-all duration-300 min-w-[20px]',
                  index < currentStep
                    ? 'bg-accent-purple'
                    : index === currentStep - 1
                    ? 'bg-accent-magenta shadow-glow-magenta'
                    : 'bg-text-tertiary opacity-50'
                )}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

ProgressSteps.displayName = 'ProgressSteps';

export { ProgressSteps };
