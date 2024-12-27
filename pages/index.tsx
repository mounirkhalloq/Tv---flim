import { GetStaticProps, NextPage } from 'next';

import { MainSlider, ItemSlider, Meta } from '@/components';
import { getHomeData } from '@/ultis/tmdbApi';
import { MovieItemProps } from '@/model/movie';

interface Props {
  data: { [id: string]: MovieItemProps[] };
}

const Home: NextPage<Props> = ({ data }) => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Meta
        title="TV Film"
        description="Watch Movies and TV shows"
        image="/preview.png"
      />

      {/* Main Container */}
      <div className="min-h-screen bg-gray-100">
        {/* Main Slider Section */}
        <MainSlider movieItems={data['Popular Movies']} />

        {/* Movies Section */}
        <div className="container mx-auto px-4 py-6">
          {Object.keys(data).map((key) => (
            <div key={key} className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4">{key}</h2>
              <ItemSlider title={key} items={data[key]} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const data = await getHomeData();
    return {
      props: {
        data,
      },
      revalidate: 3600,
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
      revalidate: true,
    };
  }
};

export default Home;
