import Head from 'next/head';
import { NextPage } from 'next';

interface MetaProps {
  title: string;
  description: string;
  image: string;
  keywords?: string; // Optional keywords for SEO
  url?: string; // Optional URL for canonical link
}

const Meta: NextPage<MetaProps> = ({ title, description, image, keywords, url }) => {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || 'movies, tv shows, streaming'} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      {url && <meta property="og:url" content={url} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical URL */}
      {url && <link rel="canonical" href={url} />}
    </Head>
  );
};

export default Meta;
