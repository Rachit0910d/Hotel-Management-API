import React from 'react';

const Badge = ({ children, className = '', status = 'default' }) => {
  const baseStyles = 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider font-sans';
  
  const statusStyles = {
    default: 'bg-[var(--color-border-light)] text-[var(--color-deep-navy)]',
    success: 'bg-[#dcfce7] text-[#166534]',
    warning: 'bg-[#fef08a] text-[#854d0e]',
    info: 'bg-[#e0e7ff] text-[#3730a3]',
  };

  return (
    <span className={`${baseStyles} ${statusStyles[status]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
