import { ReactNode } from 'react';
import classNames from 'classnames';

interface Props {
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  outline?: boolean; // Ajout de la propriété outline
}

const Button = ({ onClick, children, className, outline = false }: Props) => {
  const baseStyles = 'px-6 py-2 rounded-md font-bold transition';
  const outlineStyles = outline
    ? 'border-2 border-main text-main hover:bg-main hover:text-white'
    : 'bg-main text-white hover:bg-opacity-90';

  return (
    <button
      className={classNames(baseStyles, outlineStyles, className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
