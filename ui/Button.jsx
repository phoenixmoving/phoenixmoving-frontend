import { forwardRef } from 'react';
// import Link from 'next/link';
import clsx from 'clsx';

const sizeStyles = {
  small: 'py-1.5 px-3 text-sm',
  medium: 'py-2 px-4 text-base',
  large: 'py-3 px-6 text-base',
};

const baseStyles = {
  solid:
    'flex justify-center items-center rounded-full outline-2 outline-offset-2 transition-colors font-medium',
  soft: 'flex justify-center items-center rounded-full outline-2 outline-offset-2 transition-colors font-medium',
  outline:
    'flex justify-center items-center rounded-full outline-2 outline-offset-2 transition-colors font-medium',
};

const variantStyles = {
  solid: {
    default:
      'bg-slate-800 text-white hover:bg-slate-900 active:bg-slate-800 active:text-white/80',
    primary: 'bg-palette-primary-500 hover:bg-palette-primary-900 text-white',
    secondary:
      'bg-palette-secondary-500 hover:bg-palette-secondary-900 text-slate-900',
  },
  outline: {
    default:
      'text-slate-900 bg-white hover:bg-slate-100 border border-slate-300',
    primary:
      'text-palette-primary-900 hover:bg-purple-100 border border-palette-primary-500',
    secondary:
      'text-palette-secondary-500 hover:bg-orange-100 border border-palette-secondary-500',
  },
  soft: {
    default: 'bg-slate-100 text-black hover:bg-slate-200',
    primary: 'bg-indigo-100 text-indigo-900 hover:bg-indigo-200',
    secondary: 'bg-orange-100 text-orange-900 hover:bg-orange-200',
  },
};

const Button = forwardRef(function Button(
  {
    variant = 'solid',
    color = 'default',
    size = 'medium',
    className,
    href,
    ...rest
  },
  ref,
) {
  className = clsx(
    sizeStyles[size],
    baseStyles[variant],
    variantStyles[variant][color],
    className,
  );

  if (href) return <a ref={ref} href={href} className={className} {...rest} />;

  return <button ref={ref} className={className} {...rest} />;
});

export default Button;
