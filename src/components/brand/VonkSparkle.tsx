'use client';

export function VonkSparkle() {
  return (
    <div className="relative w-1 h-1">
      <style>{`
        @keyframes vonk-pulse {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
          }
          100% {
            opacity: 0;
            transform: scale(2);
          }
        }

        @keyframes vonk-float {
          0% {
            opacity: 1;
            transform: translateY(0) translateX(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-20px) translateX(5px);
          }
        }

        .vonk-sparkle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #D946EF;
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(217, 70, 239, 0.8);
          animation: vonk-pulse 2s ease-out infinite;
        }

        .vonk-sparkle:nth-child(1) {
          animation-delay: 0s;
          left: -4px;
          top: -4px;
        }

        .vonk-sparkle:nth-child(2) {
          animation-delay: 0.3s;
          right: -4px;
          top: 0;
          animation-name: vonk-float;
        }

        .vonk-sparkle:nth-child(3) {
          animation-delay: 0.6s;
          left: 0;
          bottom: -4px;
        }
      `}</style>
      <div className="vonk-sparkle" />
      <div className="vonk-sparkle" />
      <div className="vonk-sparkle" />
    </div>
  );
}
