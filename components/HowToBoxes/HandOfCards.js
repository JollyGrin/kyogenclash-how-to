import { colors } from '@/styles/theme';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const HandOfCards = () => {
  return (
    <>
      <StyledContainer>
        <TextContainer>
          <HeaderText>Hand of Cards</HeaderText>
          <Text>
            After registration, players are able to see the game board and their
            hand of cards. In their hand of cards they have the following:
          </Text>
          <Image src='/img/handofcards.png' pt={3} />
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

  padding: 1rem;

  color: white;

  flex-direction: column;

  justify-content: center;
  align-items: center;

  min-height: 50vh;
  height: 100%;
  width: 100%;
`;

export default HandOfCards;
