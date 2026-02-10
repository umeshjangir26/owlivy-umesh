import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'gradient' | 'bordered';
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hover = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base styles
          'rounded-2xl p-6 transition-all duration-300',
          
          // Variants
          {
            // Default card
            'bg-white shadow-lg hover:shadow-xl': variant === 'default',
            
            // Glass morphism card
            'bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl':
              variant === 'glass',
            
            // Gradient card
            'bg-gradient-to-br from-primary-50 to-accent-50 shadow-lg':
              variant === 'gradient',
            
            // Bordered card
            'bg-white border-2 border-dark-200 hover:border-primary-500':
              variant === 'bordered',
          },
          
          // Hover effects
          {
            'hover:scale-105 hover:-translate-y-2 cursor-pointer': hover,
          },
          
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
