import * as React from 'react';
import { cn } from '@/lib/utils';

interface GradientTextProps
  extends React.HTMLAttributes<HTMLSpanElement> {}

const GradientText = React.forwardRef<HTMLSpanElement, GradientTextProps>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        'bg-gradient-primary bg-clip-text text-transparent',
        className
      )}
      {...props}
    />
  )
);

GradientText.displayName = 'GradientText';

export { GradientText };
