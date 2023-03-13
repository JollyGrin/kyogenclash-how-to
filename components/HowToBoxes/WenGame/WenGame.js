import { colors } from '@/styles/theme';
import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const WenGame = () => {
  return (
    <>
      <StyledContainer>
        <Grid gridTemplateColumns={'1fr 1fr'} width={'100%'} height={'100%'}>
          <ClansContainer />
          <Flex flexDir={'column'} justifyContent='center' p={'0 1rem '}>
            <HeaderText>Wen Game?</HeaderText>
            <Text>
              Games will start at a specified time on Fridays and will finish in
              1-4 hours, depending on how players interact with the game. When
              players register, they’ll be auto assigned a clan; this will
              determine their starting units and what spawn points they can use.
              <br />
              <br />
              Players from the same clan can still hurt each other, so being on
              large clans only has the benefit that you get access to more spawn
              points.
            </Text>
          </Flex>
        </Grid>
      </StyledContainer>
    </>
  );
};

const HeaderText = styled(Text)`
  font-size: 3rem;
  color: ${colors.brand.red};
`;

const ClansContainer = styled(Box)`
  width: 100%;
  height: 100%;
  min-height: 720px;

  background-color: egg;
  background-image: url('/img/clans.png');
  background-position: center;
  background-size: cover;
`;

const StyledContainer = styled(Flex)`
  background-color: ${colors.brand.egg};

  color: black;

  flex-direction: column;

  justify-content: center;
  align-items: center;

  min-height: 80vh;
  height: 100%;
  width: 100%;
`;

export default WenGame;
