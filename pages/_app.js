import * as React from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import { Helmet } from '@/components/Header';

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Helmet />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
