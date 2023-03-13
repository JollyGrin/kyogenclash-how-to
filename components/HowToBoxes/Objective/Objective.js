import { colors } from '@/styles/theme';
import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const Objective = () => {
  return (
    <>
      <StyledContainer>
        <Grid gridTemplateColumns={'1fr 1fr'} width={'100%'} height={'100%'}>
          <ClansContainer />
          <Flex flexDir={'column'} justifyContent='center' p={'0 1rem '}>
            <HeaderText>Objective</HeaderText>
            <Text>
              The goal for the game is to gather as much Solarite from Meteor
              Strikes on the map as possible. Players fight against each other
              to capture this resource.
              <br />
              <br />
              When on a Meteor, players can “Mine” it periodically for Solarite.
              This can be used at Heal Stations to heal their units, or at
              Portals to teleport around the map.
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
  min-height: 840px;

  background-color: egg;
  background-image: url('/img/objective.png');
  background-position: center;
  background-size: cover;
`;

const StyledContainer = styled(Flex)`
  background-color: ${colors.brand.egg};

  color: black;

  flex-direction: column;

  justify-content: center;
  align-items: center;

  min-height: 840px;
  width: 100%;
`;

export default Objective;
