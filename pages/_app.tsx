import '@/styles/globals.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/bundle';

import { Provider } from 'react-redux';
import store from '@/redux/store';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Navbar, Footer } from '@/components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/icon.png" type="image/x-icon" />
        <title>Your Website</title>
      </Head>

      {/* Force background black and text white */}
      <div className="min-h-screen" style={{ backgroundColor: '#000', color: '#fff' }}>
        <Navbar />
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </Provider>
  );
}

export default MyApp;
