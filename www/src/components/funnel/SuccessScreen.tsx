'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { VonkSparkle } from '@/components/brand/VonkSparkle';
import { GradientText } from '@/components/brand/GradientText';

interface SuccessScreenProps {
  type: 'werkgever' | 'kandidaat';
}

const SuccessScreen: React.FC<SuccessScreenProps> = ({ type }) => {
  const isWerkgever = type === 'werkgever';

  const message = isWerkgever
    ? {
        title: 'Bedankt! De vonk is ontstoken 🔥',
        subtitle: 'Ramon zal u binnenkort contacteren',
        body: 'Uw verzoek is ontvangen en we zullen u snel bereiken met de perfecte match.',
      }
    : {
        title: 'Profiel ontvangen! ✨',
        subtitle: 'We zoeken naar jouw perfecte match',
        body: 'Je zult snel van ons horen met passende vacatures in jouw richting.',
      };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="text-center space-y-6 py-12 px-4"
    >
      {/* Decoration with Sparkle and Emoji */}
      <motion.div
        variants={itemVariants}
        className="relative h-24 flex items-center justify-center"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <VonkSparkle />
        </div>
        <motion.div
          variants={pulseVariants}
          animate="animate"
          className="text-6xl md:text-7xl relative z-10"
        >
          ⚡
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div variants={itemVariants} className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          <GradientText>{message.title}</GradientText>
        </h2>

        <p className="text-lg text-text-secondary">{message.subtitle}</p>

        <p className="text-text-tertiary max-w-lg mx-auto leading-relaxed">
          {message.body}
        </p>
      </motion.div>

      {/* Additional Info */}
      <motion.div
        variants={itemVariants}
        className="pt-4 space-y-3 text-sm text-text-tertiary"
      >
        <p>
          {isWerkgever
            ? 'Wij stellen u graag voor aan geschikte kandidaten.'
            : 'Bedankt voor je deelname aan IGNT!'}
        </p>
        <p className="text-xs">
          {isWerkgever ? 'Bel: +31 (0)6 12345678' : 'Volg ons op social media voor updates'}
        </p>
      </motion.div>
    </motion.div>
  );
};

export { SuccessScreen };
