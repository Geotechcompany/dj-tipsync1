// import { DefaultSeo } from 'next-seo';
// import SEO from '../next-seo.config';
// import '../styles/globals.css';

// function MyApp({ Component, pageProps }) {
//   return (
//     <>
//       <DefaultSeo {...SEO} />
//       <Component {...pageProps} />
//     </>
//   );
// }

// export default MyApp;

// import '../styles/globals.css';

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

// export default MyApp;

import { ClerkProvider } from '@clerk/nextjs'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ClerkProvider>
      <Component {...pageProps} />
    </ClerkProvider>
  )
}

export default MyApp