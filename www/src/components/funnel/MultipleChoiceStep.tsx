'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface QuestionOption {
  value: string;
  label: string;
}

interface MultipleChoiceStepProps {
  question: string;
  options: QuestionOption[];
  onAnswer: (value: string) => void;
  isSelected?: (value: string) => boolean;
}

const MultipleChoiceStep: React.FC<MultipleChoiceStepProps> = ({
  question,
  options,
  onAnswer,
  isSelected,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full space-y-6"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-text-primary text-center">
        {question}
      </h2>
      <div className="grid gap-3 md:gap-4">
        {options.map((option) => (
          <motion.button
            key={option.value}
            onClick={() => onAnswer(option.value)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
              'p-4 rounded-lg border-2 transition-all text-left font-medium',
              isSelected?.(option.value)
                ? 'border-accent-magenta bg-bg-secondary shadow-glow-magenta text-accent-magenta'
                : 'border-purple-400/30 bg-bg-secondary hover:border-accent-purple hover:shadow-glow-purple text-text-primary'
            )}
          >
            {option.label}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export { MultipleChoiceStep };
