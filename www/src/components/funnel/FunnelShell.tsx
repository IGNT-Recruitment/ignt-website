'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProgressSteps } from '@/components/brand/ProgressSteps';
import { MultipleChoiceStep } from './MultipleChoiceStep';

interface QuestionOption {
  value: string;
  label: string;
}

interface FunnelQuestion {
  id: string;
  question: string;
  options: QuestionOption[];
}

interface FunnelShellProps {
  questions: FunnelQuestion[];
  onComplete: (answers: Record<string, string>) => void;
  children?: React.ReactNode;
}

const FunnelShell: React.FC<FunnelShellProps> = ({
  questions,
  onComplete,
  children,
}) => {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [answers, setAnswers] = React.useState<Record<string, string>>({});
  const [showForm, setShowForm] = React.useState(false);

  const handleAnswer = (value: string) => {
    const question = questions[currentStep];
    setAnswers((prev) => ({
      ...prev,
      [question.id]: value,
    }));

    // Auto-advance to next step
    if (currentStep < questions.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // Show lead form
      setShowForm(true);
    }
  };

  const handleFormSubmit = () => {
    onComplete(answers);
  };

  const stepLabels = questions.map((q, index) => `Q${index + 1}`);

  if (showForm) {
    return (
      <div className="w-full max-w-2xl mx-auto">
        {React.cloneElement(children as React.ReactElement, {
          answers,
          onSubmit: handleFormSubmit,
        })}
      </div>
    );
  }

  return (
    <div className="w-full">
      <ProgressSteps steps={stepLabels} currentStep={currentStep} />
      <div className="max-w-2xl mx-auto py-12 px-4">
        <AnimatePresence mode="wait">
          <MultipleChoiceStep
            key={currentStep}
            question={questions[currentStep].question}
            options={questions[currentStep].options}
            onAnswer={handleAnswer}
            isSelected={(value) =>
              answers[questions[currentStep].id] === value
            }
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export { FunnelShell };
