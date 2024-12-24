import { useRouter } from 'next/router';

import { Button } from '@/components';
import ItemList from './ItemList';
import { MovieItemProps } from '@/model/movie';

interface Props {
  title: string;
  items: MovieItemProps[];
}

const ItemSlider = ({ title, items }: Props) => {
  const router = useRouter();

  return (
    <div className="px-2 sm:px-4 md:px-6 mb-6">
      <div className="flex align-center justify-between mb-6">
        <h2 className="flex-center-center text-lg sm:text-xl md:text-2xl font-bold">
          {title}
        </h2>
        {/* Bouton avec les props small et outline */}
        {items.length > 0 && (
          <Button small outline onClick={() => router.push(items[0].media_type)}>
            View More
          </Button>
        )}
      </div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemSlider;
