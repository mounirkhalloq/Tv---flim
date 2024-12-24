import { NextPage } from 'next';
import { ClipLoader } from 'react-spinners';

import { MovieSliceParams } from '@/redux/movieSlice';
import { ItemGrid, PageHeader, Button } from '@/components';

interface Props extends MovieSliceParams {
  loadMore: () => void;
  media_type: 'movie' | 'tv';
}

const ItemView: NextPage<Props> = ({
  loading,
  items,
  loadingMore,
  page,
  total_pages,
  loadMore,
  media_type,
}) => {
  return (
    <>
      <PageHeader media_type={media_type} />

      <div className="container px-6">
        {loading ? (
          <div className="text-center">
            <ClipLoader color="#06b6d4" size={80} />
          </div>
        ) : (
          <>
            {/* Grid des éléments */}
            <div>
              <ItemGrid items={items} />
            </div>

            {/* Loader pour le chargement supplémentaire */}
            <div className="text-center">
              <ClipLoader loading={loadingMore} color="#06b6d4" size={80} />
            </div>

            {/* Bouton "Load More" */}
            {page < total_pages && (
              <div className="mt-4 text-center">
                <Button outline onClick={loadMore}>
                  Load More
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default ItemView;
