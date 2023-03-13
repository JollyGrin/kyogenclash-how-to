import * as React from 'react';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Helmet } from '@/components/Header';
import Fonts from '@/styles/Fonts';
import theme from '@/styles/theme';

// const theme = extendTheme({
//   fonts: {
//     body: `'milimetre regular', sans-serif`,
//     heading: `'milimetre bold', sans-serif`,
//   },
// });

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Helmet />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
