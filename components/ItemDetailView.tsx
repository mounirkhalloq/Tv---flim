import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { MovieItemProps, Cast, VideoTrailer } from '@/model/movie';
import { Rating, Button, CastList, VideoItem, ItemList } from '@/components';
import { imageOriginal } from '@/ultis/constants';

interface Props {
  data: MovieItemProps;
  casts: Cast[];
  videos: VideoTrailer[];
  similar: MovieItemProps[];
}

const ItemDetailView: NextPage<Props> = ({ data, casts, videos, similar }) => {
  const router = useRouter();
  return (
    <>
      {/* Background Section */}
      <div
        className="relative h-[50vh] bg-center bg-cover bg-no-repeat
        before:content-[''] before:absolute before:inset-0 before:bg-black/[60%]
        after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t from-body to-black/[0]"
        style={{ backgroundImage: `url(${imageOriginal(data.backdrop_path)})` }}
      />
      <div className="relative container mx-auto flex flex-col md:flex-row px-4 md:px-8 mt-[-200px] mb-12">
        {/* Movie Poster */}
        <div className="flex-1 mb-6 md:mb-0">
          <div
            className="bg-center bg-cover bg-no-repeat pt-[165%] rounded-3xl"
            style={{
              backgroundImage: `url(${imageOriginal(data.poster_path)})`,
            }}
          />
        </div>
        {/* Movie Details */}
        <div className="md:w-[70%] md:pl-8 [&>*]:mb-8">
          <h1 className="text-3xl md:text-6xl font-bold">{data.title || data.name}</h1>
          <div className="w-28">
            <Rating rating={data.vote_average} size={30} />
          </div>
          <div className="text-lg md:text-[1.5rem]">
            <p>Release Date: {data.release_date}</p>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {data.genres.map((genre) => (
              <span
                key={genre.id}
                className="px-4 py-2 border-2 border-solid border-white rounded-3xl font-semibold"
              >
                {genre.name}
              </span>
            ))}
          </div>
          <p className="text-sm md:text-base mt-4">{data.overview}</p>
          <p>
            Official website :
            <Link href={data.homepage}>
              <a target="_blank" className="ml-2 text-main underline">
                {data.homepage}
              </a>
            </Link>
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            <Button
              onClick={() => router.push(`${router.asPath}/watch`)}
              className="bg-main text-white px-6 py-2 rounded-md font-bold hover:bg-opacity-90 transition"
            >
              Watch Now
            </Button>
            <Button
              onClick={() => router.push(`${router.asPath}/trailer`)}
              className="border-2 border-main text-main px-6 py-2 rounded-md font-bold hover:bg-main hover:text-white transition"
            >
              Watch Trailer
            </Button>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="container mx-auto px-4 md:px-6 [&>*~*]:mt-12">
        {/* Cast Section */}
        <div>
          <p className="text-xl md:text-[1.5rem] font-semibold mb-4">CASTS</p>
          <CastList items={casts} />
        </div>

        {/* Videos Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16 mt-8">
          {videos.map((video) => (
            <VideoItem key={video.key} item={video} />
          ))}
        </div>

        {/* Similar Movies */}
        <div>
          <p className="text-xl md:text-[1.5rem] font-semibold mt-8 mb-4">SIMILAR</p>
          <ItemList items={similar} />
        </div>
      </div>
    </>
  );
};

export default ItemDetailView;
