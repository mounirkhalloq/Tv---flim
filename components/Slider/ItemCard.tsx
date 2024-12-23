import { FaPlayCircle } from 'react-icons/fa';

import { Button, Rating } from '@/components';
import { MovieItemProps } from '@/model/movie';
import { w500Image } from '@/ultis/constants';

interface Props {
  item: MovieItemProps;
}

const ItemCard = ({ item }) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <img
        src={item.posterUrl}
        alt={item.title}
        className="w-full h-auto rounded-lg"
      />
      <p className="text-xs sm:text-sm font-semibold truncate sm:line-clamp-2 text-center">
        {item.title}
      </p>
    </div>
  );
};

export default ItemCard;
