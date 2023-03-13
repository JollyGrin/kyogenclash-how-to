import Dominari from '@/components/HowToBoxes/Dominari';
import HandOfCards from '@/components/HowToBoxes/HandOfCards';
import Hero from '@/components/HowToBoxes/Hero';
import MapStructures from '@/components/HowToBoxes/MapStructures';
import Objective from '@/components/HowToBoxes/Objective/Objective';
import SignUp from '@/components/HowToBoxes/SignUp';
import WenGame from '@/components/HowToBoxes/WenGame';
import { Box, Text } from '@chakra-ui/react';
import { Inter } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Box>
        <Hero />
        <Dominari />
        <WenGame />
        <Objective />
        {/* <HandOfCards /> */}
        <MapStructures />
        <SignUp />
      </Box>
    </>
  );
}
