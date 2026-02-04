import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger when 20% of the element is visible
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2, 
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const getTransform = () => {
    // Use translate3d for hardware acceleration (smoother animation)
    if (isVisible) return 'translate3d(0, 0, 0)';
    switch (direction) {
      case 'up': return 'translate3d(0, 40px, 0)';
      case 'down': return 'translate3d(0, -40px, 0)';
      case 'left': return 'translate3d(40px, 0, 0)';
      case 'right': return 'translate3d(-40px, 0, 0)';
      default: return 'translate3d(0, 40px, 0)';
    }
  };

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-1000`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transitionDelay: `${delay}ms`,
        // Premium feel using cubic-bezier (starts fast, ends slow)
        transitionTimingFunction: 'var(--ease-premium)'
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;