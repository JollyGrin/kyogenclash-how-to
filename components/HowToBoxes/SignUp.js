import { colors } from '@/styles/theme';
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Link from 'next/link';

const SignUp = () => {
  return (
    <Box bg={'DarkSlateGrey'} p={'3rem'}>
      <Flex flexDir={'column'} alignItems={'center'}>
        <Link href={'https://wzghtg124mh.typeform.com/to/jkrUVP9n'}>
          <StyledButton>
            <Text>Sign Up</Text>
          </StyledButton>
        </Link>
        <Image src='/img/logo.svg' mt={'-2rem'} zIndex={2} />
        <Link href={'https://discord.gg/SDMYeZcwJj'}>
          <Image
            src='/discord.svg'
            w={'50px'}
            mt={'100px'}
            cursor={'pointer'}
            transition={'all 0.25s ease-in-out'}
            _hover={{ transform: 'scale(2)' }}
          />
        </Link>
      </Flex>
    </Box>
  );
};

const StyledButton = styled(Button)`
  background-color: ${colors.egg};
  padding: 3.5rem;

  border-style: solid;
  border-color: black;
  border-width: 5px 5px 8px 5px;
  border-radius: 0.75rem;

  p {
    color: white;
    font-size: 5rem;
    text-transform: uppercase;
    -webkit-text-fill-color: white;
    -webkit-text-stroke-color: black;
    -webkit-text-stroke-width: 2.5px;
  }
`;

export default SignUp;
