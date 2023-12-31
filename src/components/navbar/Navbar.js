import { Flex, Spacer, Box, Heading, Button, useColorMode, LinkBox, Stack, Image } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import logo from '../../assests/images/logoMa.png'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1.5rem"
      bg={colorMode === 'light' ? 'gray.200' : 'gray.800'}
      color={colorMode === 'light' ? 'black' : 'white'}
    >
      <Stack>
        <Heading><Image src={logo} boxSize='100px'/></Heading>
      </Stack>
      <Spacer />
      <Stack direction={'row'} spacing={12} align={'center'}>
        <NavLink to="/about">Presentation</NavLink>
        <NavLink to="/blogs">My Work</NavLink>
        <NavLink to="/contact">Contact Me</NavLink>
      </Stack>
      <Spacer />
      <Box>
        <Button mr="4" onClick={toggleColorMode}>
          {colorMode === 'light' ? 'Dark' : 'Light'} Mode
        </Button>

      </Box>
    </Flex>
  );
};

export default Navbar;
