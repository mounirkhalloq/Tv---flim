import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ItemDetailView, Meta } from '@/components';
import { MovieItemProps, Cast, VideoTrailer } from '@/model/movie';
import { imageOriginal } from '@/ultis/constants';
import { getMovieDetails } from '@/ultis/tmdbApi';

interface Props {
  data: MovieItemProps;
  casts: Cast[];
  videos: VideoTrailer[];
  similar: MovieItemProps[];
}

const Movie: NextPage<Props> = ({ data, casts, videos, similar }) => {
  return (
    <div className="min-h-screen bg-black">
      {/* Meta Information for SEO */}
      <Meta
        title={`${data.title} - Movie - TV Film`}
        description="Viewing Info"
        image={imageOriginal(data.backdrop_path)}
      />

      {/* Item Detail View */}
      <div className="container mx-auto px-4 py-6">
        <ItemDetailView
          data={data}
          casts={casts}
          videos={videos}
          similar={similar}
        />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.id) {
    return {
      notFound: true,
    };
  }

  const movieId = Number(params.id);

  try {
    const response = await getMovieDetails(movieId); // Replace with actual API logic
    return {
      props: {
        data: response.data,
        casts: response.casts,
        videos: response.videos,
        similar: response.similar,
      },
      revalidate: 3600, // Revalidate every hour
    };
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return {
      notFound: true,
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    // Fetch a list of popular movies for pre-rendering
    const popularMovies = []; // Replace with your actual API call
    const paths = popularMovies.map((movie) => ({
      params: { id: movie.id.toString() },
    }));

    return {
      paths, // Pre-render these paths
      fallback: 'blocking', // Allow on-demand page generation
    };
  } catch (error) {
    console.error('Error fetching paths:', error);
    return {
      paths: [],
      fallback: 'blocking',
    };
  }
};

export default Movie;
