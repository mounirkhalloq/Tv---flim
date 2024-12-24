import { ReactNode } from 'react';
import classNames from 'classnames';

// Interface définissant les props du composant Button
interface Props {
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  outline?: boolean; // Pour les boutons avec bordure
  small?: boolean; // Pour les boutons de petite taille
}

const Button = ({ onClick, children, className, outline = false, small = false }: Props) => {
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
