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
        {/* Mobile-Responsive Meta Tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="shortcut icon" href="/icon.png" type="image/x-icon" />
        <title>Your Website</title>
      </Head>

      {/* Wrap Content in a Responsive Container */}
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Navbar />
        
        {/* Main Content */}
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        
        <Footer />
      </div>
    </Provider>
  );
}

export default MyApp;
