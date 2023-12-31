import { ButtonGroup, Container, IconButton, Image, Stack, Text } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Logo from '../../assests/images/logoMa.png'

export const Footer = () => (
  <Container py={{ base: '12', md: '16' }}>
    <Stack spacing={{ base: '4', md: '5' }} align={'center'}>
      <Stack justify="space-between" direction="row" align="center">
        <ButtonGroup variant="tertiary">
          <IconButton as="a" href="https://www.linkedin.com/in/malek-chahbani-2a014a224/" aria-label="LinkedIn" icon={<FaLinkedin />} />
          <IconButton as="a" href="https://github.com/Malekchb07" aria-label="GitHub" icon={<FaGithub />} />
          <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
        </ButtonGroup>
      </Stack>
      <Text fontSize="sm" color="fg.subtle">
        &copy; {new Date().getFullYear()} MC, Inc. All rights reserved.
      </Text>
    </Stack>
  </Container>
)