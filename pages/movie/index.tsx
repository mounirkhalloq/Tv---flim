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

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    // Fetch popular movies to pre-generate paths
    const response = await fetch(
      `${process.env.TMDB_API}/movie/popular?api_key=${process.env.TMDB_API_KEY}`
    );
    const data = await response.json();

    const paths = data.results.map((movie: { id: number }) => ({
      params: { id: movie.id.toString() },
    }));

    return {
      paths, // Pre-generated paths
      fallback: 'blocking', // Dynamically generate pages on-demand
    };
  } catch (error) {
    console.error('Error generating static paths:', error);
    return {
      paths: [],
      fallback: 'blocking',
    };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const movieId = Number(params?.id);

  try {
    // Fetch movie details
    const data = await getMovieDetails(movieId);

    if (!data) {
      return {
        notFound: true, // Return 404 if no data
      };
    }

    return {
      props: {
        data: data.movie, // Movie details
        casts: data.casts,
        videos: data.videos,
        similar: data.similar,
      },
      revalidate: 3600, // Revalidate every hour
    };
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return {
      notFound: true, // Return 404 if there's an error
    };
  }
};

export default Movie;
