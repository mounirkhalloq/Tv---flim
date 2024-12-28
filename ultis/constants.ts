import { MediaType } from '@/model/movie';

export const TMDB_API = 'https://api.themoviedb.org/3';
export const TMDB_IMAGE = 'https://image.tmdb.org/t/p/';

export const mediaTypes: MediaType[] = ['all', 'movie', 'tv'];

export const imageOriginal = (imgPath: string) =>
  `${TMDB_IMAGE}original${imgPath}`;

export const w500Image = (imgPath: string) =>
  `${TMDB_IMAGE}w500${imgPath}`;

// Movie Embed using TMDB ID
export const embedMovie = (tmdbId: number) =>
  `https://2embed.org/embed/movie/${tmdbId}`;

// TV Show Embed using TMDB ID
export const embedEpisode = (
  tmdbId: number,
  season: number,
  episode: number
) => `https://2embed.org/embed/tv/${tmdbId}/${season}/${episode}`;

export const imageResize = (src: string, dimension: string = 'w200') =>
  `${TMDB_IMAGE}${dimension}${src}`;

export const airDate = (firstAir: string, lastAir: string) => {
  return firstAir === lastAir ? firstAir : `${firstAir} - ${lastAir}`;
};

export const xEpisodes = (id: number) =>
  id === 1 ? `${id} Episode` : `${id} Episodes`;
