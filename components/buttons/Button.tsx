import { useRouter } from 'next/router';
import Button from '@/components/buttons/Button';
import ItemList from './ItemList';
import { MovieItemProps } from '@/model/movie';

// Interface des propriétés pour ItemSlider
interface Props {
  title: string;
  items: MovieItemProps[];
}

const ItemSlider = ({ title, items }: Props) => {
  const router = useRouter();

  return (
    <div className="px-2 sm:px-4 md:px-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold">{title}</h2>
        {items.length > 0 && (
          <Button
            small
            outline
            onClick={() => router.push(items[0].media_type)}
          >
            View More
          </Button>
        )}
      </div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemSlider;
