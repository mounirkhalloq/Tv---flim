import { ReactNode } from 'react';

import Cn from 'classnames';
interface Props {
  onClick?: () => void;
  children: ReactNode;
  small?: boolean;
  outline?: boolean;
  className?: string;
  isWatchButton?: boolean; // Nouvelle prop pour les boutons spécifiques
}

const Button = ({
  onClick,
  children,
  small = false,
  outline = false,
  className,
  isWatchButton = false, // Par défaut désactivé
}: Props) => {
  return (
    <button
      className={Cn(
        'btn',
        { 'border-2 py-2 px-6 text-[1rem]': small },
        { 'btn-outline': outline },
        { 'watch-button': isWatchButton }, // Ajout pour alignement personnalisé
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
