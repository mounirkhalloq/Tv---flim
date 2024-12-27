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
      {/* Page Header */}
      <PageHeader media_type={media_type} />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        {/* Loading Spinner */}
        {loading ? (
          <div className="text-center">
            <ClipLoader color="#06b6d4" size={80} />
          </div>
        ) : (
          <>
            {/* Grid of Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <ItemGrid items={items} />
            </div>

            {/* Additional Loading Spinner */}
            {loadingMore && (
              <div className="text-center mt-6">
                <ClipLoader color="#06b6d4" size={80} />
              </div>
            )}

            {/* "Load More" Button */}
            {page < total_pages && (
              <div className="mt-8 text-center">
                <Button
                  outline
                  onClick={loadMore}
                  className="px-6 py-2 border-main text-main font-semibold hover:bg-main hover:text-white transition"
                >
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
