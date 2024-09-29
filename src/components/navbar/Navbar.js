import { Flex, Spacer, Box, Heading, Button, useColorMode, LinkBox, Stack, Image } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import logo from '../../assests/images/logoMa.png'
import { useEffect, useState } from 'react';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isScrolledValue = scrollTop > 0;
      setIsScrolled(isScrolledValue);
    }
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <Flex
    bg={isScrolled ? ("white", "gray.800") : ""}
    color={isScrolled ? ("gray.600", "white") : ""}
    minH={"60px"}
    py={{ base: 2 }}
    px={{ base: 4 }}
    borderBottom={isScrolled ? 1 : 0}
    borderStyle={"solid"}
    align={"center"}
    position={isScrolled ? "fixed" : "relative"}
    top={0}
    left={0}
    right={0}
    zIndex={999}
    boxShadow={isScrolled ? "md" : "none"}
    transition={"background-color 0.3s, color 0.3s, box-shadow 0.3s"}
  >
      <Stack>
        <Heading><Image src={logo} boxSize='100px' /></Heading>
      </Stack>
      <Spacer />
      <Stack direction={'row'} spacing={12} align={'center'}>
        <NavLink to="/">Presentation</NavLink>
        <NavLink to="/projects">My Work</NavLink>
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
