import { colors } from '@/styles/theme';
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const Hero = () => {
  return (
    <StyledContainer>
      <Flex flexDir={'column'} alignItems={'center'}>
        <StyledButton>
          <Text>How to Play</Text>
        </StyledButton>
        <Image src='/img/logo.svg' mt={'-3rem'} zIndex={2} />
      </Flex>
    </StyledContainer>
  );
};

const StyledContainer = styled(Flex)`
  background-color: egg;
  background-image: url('/img/splash.png');
  background-position: center;
  background-size: cover;

  justify-content: center;
  align-items: center;

  height: 80vh;
  width: 100%;
`;

const fontBorderSize = 4;

const StyledButton = styled(Button)`
  background-color: ${colors.egg};
  padding: 3.5rem;

  border-style: solid;
  border-color: black;
  border-width: 5px 5px 8px 5px;
  border-radius: 0.75rem;

  p {
    color: white;
    font-size: 3rem;
    text-transform: uppercase;
    -webkit-text-fill-color: white;
    -webkit-text-stroke-color: black;
    -webkit-text-stroke-width: 2.5px;
  }
`;

export default Hero;
