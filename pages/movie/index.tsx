import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchMovies, fetchLoadMoreMovies } from '@/redux/movieSlice';
import { ItemView, Meta } from '@/components';

const Movie = () => {
  const dispatch = useAppDispatch();
  const { loading, loadingMore, items, page, total_pages } = useAppSelector(
    (state) => state.movie
  );

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const loadMore = () => {
    dispatch(fetchLoadMoreMovies(page + 1));
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Meta
        title="TV Film - All Movies"
        description="List of all movies on the website"
        image="/preview.png"
      />

      {/* Main Wrapper with Black Background */}
      <div className="min-h-screen bg-black">
        {/* Movie List */}
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl md:text-4xl font-bold text-center mb-6 text-white">
            All Movies
          </h1>
          <ItemView
            loading={loading}
            loadingMore={loadingMore}
            items={items}
            page={page}
            total_pages={total_pages}
            loadMore={loadMore}
            media_type="movie"
          />
        </div>
      </div>
    </>
  );
};

export default Movie;
