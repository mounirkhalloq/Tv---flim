import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useState } from 'react';

import { AboutDetail, ItemList, Meta } from '@/components';
import { MovieItemProps } from '@/model/movie';
import { getWatchMovieDetail } from '@/ultis/tmdbApi';
import { embedMovie, imageOriginal } from '@/ultis/constants';
import EmailModal from '@/components/EmailModal'; // Import the modal component

interface Props {
  data: MovieItemProps;
  similar: MovieItemProps[];
}

const Watch: NextPage<Props> = ({ data, similar }) => {
  const [hasAccess, setHasAccess] = useState(false); // Track whether the user has subscribed
  const [showModal, setShowModal] = useState(true); // Show the subscription modal initially

  return (
    <>
      <Meta
        title={`${data.title} - Watch - TV Film`}
        description="Watch the movie"
        image={imageOriginal(data.backdrop_path)}
      />
      <div className="container mt-28 px-6">
        <div className="grid grid-cols-12">
          <div className="col-span-8">
            {/* Subscription Modal */}
            {showModal && (
              <EmailModal
                onEmailSubmit={() => {
                  setShowModal(false); // Close the modal
                  setHasAccess(true); // Grant access to the movie player
                }}
              />
            )}

            {/* Video Player - Only show after subscription */}
            {hasAccess && (
              <div className="relative mb-3" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={embedMovie(data.id)}
                  title={data.title}
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            )}

            {/* About Details */}
            <AboutDetail
              title={data.title}
              name={data.name}
              overview={data.overview}
              release_date={data.release_date}
              vote_average={data.vote_average}
            />
          </div>
          <div className="col-start-10 col-end-12">
            <p className="text-[22px] font-medium">SIMILAR</p>
            <div className="h-[700px] overflow-y-auto">
              <ItemList items={similar} vertical />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const movieId = Number(params!.id);
    const response = await getWatchMovieDetail(movieId);
    return {
      props: {
        ...response,
      },
      revalidate: 3600,
    };
  } catch (error) {
    return {
      notFound: true,
      revalidate: true,
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export default Watch;
