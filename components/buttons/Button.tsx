import { ReactNode } from 'react';
import classNames from 'classnames';

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  outline?: boolean;
  small?: boolean;
}

const Button = ({
  onClick,
  children,
  className,
  outline = false,
  small = false,
}: ButtonProps) => {
  const baseStyles = 'px-6 py-2 rounded-md font-bold transition';
  const outlineStyles = outline
    ? 'border-2 border-main text-main hover:bg-main hover:text-white'
    : 'bg-main text-white hover:bg-opacity-90';
  const sizeStyles = small ? 'px-4 py-1 text-sm' : 'px-6 py-2 text-base';

  return (
    <button
      className={classNames(baseStyles, outlineStyles, sizeStyles, className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
