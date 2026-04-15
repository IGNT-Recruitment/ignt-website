'use client';

interface ProgressStepsProps {
  currentStep: number;
  totalSteps: number;
  labels?: string[];
}

export function ProgressSteps({ currentStep, totalSteps, labels }: ProgressStepsProps) {
  return (
    <div className="flex items-center justify-center gap-3 py-8">
      {Array.from({ length: totalSteps }).map((_, index) => {
        const stepNumber = index + 1;
        const isCompleted = stepNumber < currentStep;
        const isActive = stepNumber === currentStep;

        return (
          <div key={stepNumber} className="flex items-center">
            <div className="flex flex-col items-center">
              {/* Circle */}
              <div
                className={`
                  w-12 h-12 rounded-full
                  flex items-center justify-center
                  text-xs font-bold
                  transition-all duration-300
                  ${
                    isCompleted
                      ? 'bg-accent-purple text-text-primary'
                      : isActive
                        ? 'bg-accent-magenta border-2 border-accent-purple text-text-primary shadow-glow-magenta'
                        : 'bg-transparent border-2 border-text-secondary text-text-secondary'
                  }
                `}
              >
                {isCompleted ? '✓' : stepNumber}
              </div>

              {/* Label */}
              {labels && labels[index] && (
                <span className="text-xs text-text-secondary font-medium mt-2 text-center max-w-[60px]">
                  {labels[index]}
                </span>
              )}
            </div>

            {/* Connector Line */}
            {stepNumber < totalSteps && (
              <div
                className={`
                  h-1 w-8 ml-3 mr-3
                  rounded-full
                  transition-all duration-300
                  ${
                    isCompleted
                      ? 'bg-accent-purple'
                      : isActive
                        ? 'bg-accent-magenta shadow-glow-magenta'
                        : 'bg-text-tertiary opacity-50'
                  }
                `}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
