import Link from 'next/link';

import { Button, Rating } from '@/components';
import { MovieItemProps } from '@/model/movie';
import { w500Image } from '@/ultis/constants';

interface Props {
  item: MovieItemProps;
}

const ItemCard = ({ item }: Props) => {
  const bg = w500Image(item.poster_path || item.backdrop_path);
  return (
    <Link href={`/${item.media_type}/${item.id}`}>
      <a>
        <div className="mb-8">
          <div
            className="group relative rounded-3xl bg-center bg-cover bg-no-repeat pt-[160%] mb-2
            before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-0 before:rounded-3xl
            before:transition-[opacity] before:duration-300 before:ease-[ease]
            hover-hover:hover:before:opacity-80"
            style={{ backgroundImage: `url(${bg})` }}
          >
            <Rating
              rating={item.vote_average}
              className="absolute top-2 left-2 bg-black bg-opacity-60 rounded-full px-2 py-1 text-xs"
            />
          </div>
          <h3
            className="text-sm sm:text-base font-semibold text-center text-white
            line-clamp-2 leading-tight"
          >
            {item.title || item.name}
          </h3>
        </div>
      </a>
    </Link>
  );
};

export default ItemCard;
