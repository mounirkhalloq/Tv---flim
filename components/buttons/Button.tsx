import { ReactNode } from 'react';
import classNames from 'classnames';

interface Props {
  onClick?: () => void;
  children: ReactNode;
  variant?: 'watchNow' | 'watchTrailer';
  className?: string;
}

const Button = ({ onClick, children, variant, className }: Props) => {
  const baseStyles = 'px-6 py-2 rounded-md font-bold transition';
  const variantStyles = {
    watchNow: 'bg-main text-white hover:bg-opacity-90',
    watchTrailer: 'border-2 border-main text-main hover:bg-main hover:text-white',
  };

  return (
    <button
      className={classNames(baseStyles, variant && variantStyles[variant], className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
