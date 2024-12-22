import { ItemCard } from '@/components';
import { MovieItemProps } from '@/model/movie';

interface Props {
  items: MovieItemProps[];
}

const ItemGrid = ({ items }: Props) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemGrid;
