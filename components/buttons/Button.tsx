import { ReactNode } from 'react';
import classNames from 'classnames';

// Interface des propriétés pour le composant Button
interface ButtonProps {
  onClick?: () => void; // Gestionnaire d'événements pour le clic
  children: ReactNode; // Contenu du bouton
  className?: string; // Classes CSS supplémentaires
  outline?: boolean; // Style bordure
  small?: boolean; // Taille compacte
}

const Button = ({ onClick, children, className, outline = false, small = false }: ButtonProps) => {
  // Styles de base
  const baseStyles = 'px-6 py-2 rounded-md font-bold transition';
  // Styles pour le mode "outline"
  const outlineStyles = outline
    ? 'border-2 border-main text-main hover:bg-main hover:text-white'
    : 'bg-main text-white hover:bg-opacity-90';
  // Styles pour la taille
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
