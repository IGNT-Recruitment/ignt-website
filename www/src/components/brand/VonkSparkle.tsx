'use client';

import * as React from 'react';
import { motion } from 'framer-motion';

const VonkSparkle: React.FC = () => {
  const sparkles = [
    { x: 10, y: 15 },
    { x: 30, y: 8 },
    { x: 45, y: 20 },
    { x: 55, y: 12 },
    { x: 70, y: 25 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {sparkles.map((spark, index) => (
        <motion.div
          key={index}
          className="absolute w-1 h-1 rounded-full bg-accent-magenta"
          style={{ left: `${spark.x}%`, top: `${spark.y}%` }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 1.5,
            delay: index * 0.15,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
};

VonkSparkle.displayName = 'VonkSparkle';

export { VonkSparkle };
