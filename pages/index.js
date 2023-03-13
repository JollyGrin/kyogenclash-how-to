import Hero from '@/components/HowToBoxes/Hero';
import { Box, Text } from '@chakra-ui/react';
import { Inter } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Box>
        <Hero />
      </Box>
    </>
  );
}
