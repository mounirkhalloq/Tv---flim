import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Mousewheel, FreeMode } from 'swiper';

import ItemCard from './ItemCard';
import { MovieItemProps } from '@/model/movie';

interface Props {
  items: MovieItemProps[];
  vertical?: boolean;
}

const ItemList = ({ items, vertical = false }: Props) => {
  const styleSlide = {
    width: vertical ? '100%' : 'auto', // Ajustement adaptatif
  };

  return (
    <Swiper
      direction={vertical ? 'vertical' : 'horizontal'}
      modules={[Scrollbar, Mousewheel, FreeMode]}
      scrollbar={{
        draggable: true,
      }}
      freeMode={{
        enabled: true,
      }}
      grabCursor={true}
      spaceBetween={5} // Réduction de l'espacement pour mobile
      slidesPerView={1} // Par défaut, 1 slide visible
      breakpoints={{
        640: { slidesPerView: 2, spaceBetween: 10 }, // Tablettes : 2 slides visibles
        768: { slidesPerView: 3, spaceBetween: 15 }, // Ordinateurs portables : 3 slides visibles
        1024: { slidesPerView: 4, spaceBetween: 20 }, // Grands écrans : 4 slides visibles
      }}
      mousewheel={{
        forceToAxis: true,
      }}
      keyboard={{ enabled: true }}
      style={{ maxHeight: '100%' }}
    >
      {items.map((item) => (
        <SwiperSlide key={item.id} style={styleSlide}>
          <ItemCard item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ItemList;
