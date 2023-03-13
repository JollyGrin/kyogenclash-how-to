import { colors } from '@/styles/theme';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const Dominari = () => {
  return (
    <>
      <StyledContainer>
        <TextContainer>
          <Image src='/img/badger.png' width={'125px'} />
          <HeaderText>Dominari</HeaderText>
          <Text>
            Dominari is an upcoming on chain RTS on Solana that’s planning on
            releasing the first playable season with Kyogen Clash on March 20.
            <br />
            <br />
            To register, fill out the form at the bottom of this page. Players
            will be selected and airdropped a Backpack xNFT Collectible that
            will serve as a game launcher from their wallet!
          </Text>
        </TextContainer>
      </StyledContainer>
    </>
  );
};

const HeaderText = styled(Text)`
  font-size: 3rem;
  color: ${colors.brand.red};
  text-align: center;
`;

const TextContainer = styled(Flex)`
  flex-direction: column;
  max-width: 900px;
  padding: 0 1rem;

  font-size: 1.5rem;
`;

const StyledContainer = styled(Flex)`
  background-color: black;
  background-image: url('/img/dark-bg1.png');
  background-position: center;
  background-size: cover;

  color: white;

  flex-direction: column;

  justify-content: center;
  align-items: center;

  height: 40vh;
  width: 100%;
`;

export default Dominari;
