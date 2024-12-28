import { GetStaticProps, NextPage } from 'next';
import { ItemView, Meta } from '@/components';
import { fetchMovies } from '@/ultis/tmdbApi';

interface MoviePageProps {
  movies: any[]; // Replace with your movie type
  total_pages: number;
}

const MoviePage: NextPage<MoviePageProps> = ({ movies, total_pages }) => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Meta
        title="TV Film - All Movies"
        description="List of all movies on the website"
        image="/preview.png"
      />

      {/* Movie List */}
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">
          All Movies
        </h1>
        <ItemView
          loading={false}
          loadingMore={false}
          items={movies}
          page={1}
          total_pages={total_pages}
          loadMore={() => {}}
          media_type="movie"
        />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetchMovies(); // Replace with your actual API call
    return {
      props: {
        movies: response.results,
        total_pages: response.total_pages,
      },
      revalidate: 3600, // Revalidate every hour
    };
  } catch (error) {
    console.error('Failed to fetch movies:', error);
    return { notFound: true };
  }
};

export default MoviePage;
