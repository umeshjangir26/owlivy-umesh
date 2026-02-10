import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  description,
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-3xl space-y-4',
        centered && 'mx-auto text-center',
        className
      )}
    >
      {badge && (
        <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-600 font-semibold text-sm">
          {badge}
        </span>
      )}
      
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 leading-tight">
        {title.split(' ').map((word, index) => {
          // Make last word gradient
          if (index === title.split(' ').length - 1) {
            return (
              <span key={index} className="gradient-text">
                {' '}{word}
              </span>
            );
          }
          return <span key={index}> {word}</span>;
        })}
      </h2>
      
      {description && (
        <p className="text-lg text-dark-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
