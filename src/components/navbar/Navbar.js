import { 
  Flex, 
  Spacer, 
  Box, 
  Heading, 
  Button, 
  useColorMode, 
  Stack, 
  Image,
  IconButton,
  useDisclosure,
  Collapse,
  useColorModeValue,
  Text
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../../assests/images/logoMa.png';
import { useEffect, useState } from 'react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { FaGamepad } from 'react-icons/fa';
import LanguageSwitcher from './LanguageSwitcher';

const NavItem = ({ children, to }) => {
  const linkColor = useColorModeValue('gray.600', 'white');
  const hoverColor = useColorModeValue('blue.500', 'blue.200');

  return (
    <NavLink to={to}>
      <Text
        px={2}
        py={1}
        rounded={'md'}
        position="relative"
        color={linkColor}
        _hover={{
          color: hoverColor,
          textDecoration: 'none',
        }}
        sx={{
          '&::after': {
            content: '""',
            position: 'absolute',
            width: '0%',
            height: '2px',
            bottom: '-2px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'currentColor',
            transition: 'width 0.3s ease-in-out',
          },
          '&:hover::after': {
            width: '100%',
          },
        }}
      >
        {children}
      </Text>
    </NavLink>
  );
};

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isScrolled, setIsScrolled] = useState(false);
  const { isOpen, onToggle } = useDisclosure();
  const { t, i18n } = useTranslation();

  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isScrolledValue = scrollTop > 0;
      setIsScrolled(isScrolledValue);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isRTL = i18n.language === 'ar';

  return (
    <Box>
      <Flex
        bg={isScrolled ? bgColor : 'transparent'}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={isScrolled ? 1 : 0}
        borderStyle={'solid'}
        borderColor={borderColor}
        align={'center'}
        position={isScrolled ? "fixed" : "relative"}
        top={0}
        left={0}
        right={0}
        zIndex={999}
        boxShadow={isScrolled ? "md" : "none"}
        transition={'all 0.3s ease-in-out'}
        direction={isRTL ? 'row-reverse' : 'row'}
      >
        <Flex flex={{ base: 1 }} justify={{ base: 'start', md: 'start' }}>
          <Heading>
            <Image 
              src={logo} 
              boxSize='100px'
              transition="transform 0.3s ease-in-out"
              _hover={{ transform: 'scale(1.05)' }}
            />
          </Heading>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
          display={{ base: 'none', md: 'flex' }}
          alignItems="center"
        >
          <NavItem to="/">{t('nav.presentation')}</NavItem>
          <NavItem to="/projects">{t('nav.myWork')}</NavItem>
          <NavItem to="/contact">{t('nav.contact')}</NavItem>
          <NavItem to="/have-fun">
            <Flex align="center" gap={2}>
              <FaGamepad />
              {t('nav.haveFun')}
            </Flex>
          </NavItem>

          <LanguageSwitcher />

          <Button
            aria-label="Toggle Color Mode"
            onClick={toggleColorMode}
            _focus={{ boxShadow: 'none' }}
            w="fit-content"
            transition="all 0.2s"
            transformOrigin="center"
            _hover={{
              transform: 'rotate(30deg)',
            }}
          >
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Stack>

        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onToggle}
          icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
          variant={'ghost'}
          aria-label={'Toggle Navigation'}
          ml={4}
        />
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Box
          p={4}
          display={{ md: 'none' }}
          bg={bgColor}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={borderColor}
          shadow="md"
        >
          <Stack spacing={4}>
            <NavItem to="/">{t('nav.presentation')}</NavItem>
            <NavItem to="/projects">{t('nav.myWork')}</NavItem>
            <NavItem to="/contact">{t('nav.contact')}</NavItem>
            <NavItem to="/have-fun">
              <Flex align="center" gap={2}>
                <FaGamepad />
                {t('nav.haveFun')}
              </Flex>
            </NavItem>
            <LanguageSwitcher />
            <Button
              w="full"
              onClick={toggleColorMode}
              leftIcon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            >
              {colorMode === 'light' ? 'Dark' : 'Light'} Mode
            </Button>
          </Stack>
        </Box>
      </Collapse>
    </Box>
  );
};

export default Navbar;
