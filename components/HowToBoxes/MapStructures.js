import { colors } from '@/styles/theme';
import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const MapStructures = () => {
  return (
    <>
      <StyledContainer>
        <Grid gridTemplateColumns={'1fr 1fr'} width={'100%'} height={'100%'}>
          <ClansContainer />
          <Flex flexDir={'column'} justifyContent='center' p={'0 1rem '}>
            <HeaderText>Map Structures</HeaderText>
            <Text>On the map there are different kinds of “Structures”.</Text>
            <IconRow
              imgUrl={'/img/building-portal.png'}
              title={'Portals'}
              text={'Spend Solarite and Portal to any other Portal'}
            />

            <IconRow
              imgUrl={'/img/building-shrine.png'}
              title={'Healer'}
              text={'Spend Solarite to heal your unit up to their max health.'}
            />

            <IconRow
              imgUrl={'/img/building-loot.png'}
              title={'Lootables'}
              text={
                'No cost, but has timer cooldown. Loot the building to get more units.'
              }
            />
          </Flex>
        </Grid>
      </StyledContainer>
    </>
  );
};

const IconRow = ({ imgUrl, title, text }) => {
  return (
    <Flex py={'2rem'}>
      <Image src={imgUrl} width={'75px'} />
      <Box pl={3}>
        <Text fontSize={'1.5rem'} fontFamily={'milimetre bold'}>
          {title}
        </Text>
        <Text>{text}</Text>
      </Box>
    </Flex>
  );
};

const HeaderText = styled(Text)`
  font-size: 3rem;
  color: ${colors.brand.red};
`;

const ClansContainer = styled(Box)`
  width: 100%;
  height: 100%;
  min-height: 60vh;

  background-color: egg;
  background-image: url('/img/mapstruct.png');
  background-position: center;
  background-size: cover;
`;

const StyledContainer = styled(Flex)`
  background-color: ${colors.brand.egg};

  color: black;

  flex-direction: column;

  justify-content: center;
  align-items: center;

  min-height: 720px;
  height: 100%;
  width: 100%;
`;

export default MapStructures;
