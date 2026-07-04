import React from 'react';

const Button = ({ children, onClick, className = '', variant = 'primary', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-[4px] px-6 py-2.5 font-sans text-sm font-semibold hover-transition focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-[var(--color-deep-navy)] text-[var(--color-crisp-white)] hover:bg-[#1e293b] focus:ring-[var(--color-deep-navy)]',
    secondary: 'bg-[var(--color-accent-gold)] text-[var(--color-crisp-white)] hover:bg-[#d4af6a] focus:ring-[var(--color-accent-gold)]',
    outline: 'border border-[var(--color-deep-navy)] text-[var(--color-deep-navy)] hover:bg-[var(--color-soft-slate)] focus:ring-[var(--color-deep-navy)]'
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
