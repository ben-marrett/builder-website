import React from 'react';
import { Link } from 'react-router-dom';

type ButtonVariant = 'hero-primary' | 'hero-secondary' | 'primary' | 'white';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  to?: string;
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  to,
  fullWidth = false,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg px-8 py-3';
  
  const variantStyles = {
    'hero-primary': 'bg-white text-stone-800 hover:bg-opacity-90 shadow-md hover:shadow-lg',
    'hero-secondary': 'border-2 border-white text-white bg-stone-900/40 hover:bg-stone-900/60 shadow-sm',
    'primary': 'btn btn-primary',
    'white': 'bg-white text-primary hover:bg-gray-100'
  };

  const classes = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `.trim();

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}; 