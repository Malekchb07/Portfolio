import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Center, Image, Link } from "@chakra-ui/react";
import { motion } from "framer-motion"; // For animation
import { FaAngular, FaCss3Alt, FaGithub, FaHtml5, FaJsSquare, FaLaravel, FaNodeJs, FaPhp, FaReact, FaWordpress } from "react-icons/fa"; // For additional icons
import { SiMongodb, SiMysql } from "react-icons/si";
import malekChbImage from '../../assests/images/malekChb.png';

const MotionBox = motion(Box);

export function AirbnbCard() {
  const property = {
    imageUrl: malekChbImage,
    imageAlt: 'Malek Chahbani',
    title: 'Web developer specializing in React and React Native, with a strong focus on web and mobile application development. I excel in code optimization and security, as well as in creating efficient and user-friendly applications that seamlessly integrate backend logic with the frontend user experience.',
    formattedPrice: '$20',
    reviewCount: 34,
    rating: 4,
  };

  return (
    <Center bg='tomato' h='max-content' position='relative' overflow="hidden">
      {/* Animated React Icon on the Left */}
      <MotionBox
        position="absolute"
        left="10%"
        top="50%"
        transform="translateY(-50%)"
        animate={{ y: [0, -15, 0] }} // Bouncing animation
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <FaReact size={60} color="#61DBFB" />
      </MotionBox>
      <MotionBox
        position="absolute"
        left="10%"
        top="35%"
        transform="translateY(-50%)"
        animate={{ y: [0, -15, 0] }} // Bouncing animation
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <FaAngular size={60} color="pink" />
      </MotionBox>
      <MotionBox
        position="absolute"
        left="20%"
        top="50%"
        transform="translateY(-50%)"
        animate={{ y: [0, -15, 0] }} // Bouncing animation
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <FaGithub size={60} color="#61DBFB" />
      </MotionBox>

      {/* Animated Python Icon */}
      <MotionBox
        position="absolute"
        left="20%"
        top="35%"
        animate={{ y: [0, -15, 0] }} // Bouncing animation
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <FaWordpress size={60} color="#306998" />
      </MotionBox>

      {/* Animated HTML Icon */}
      <MotionBox
        position="absolute"
        left="20%"
        top="20%"
        animate={{ y: [0, -15, 0] }} // Bouncing animation
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <FaHtml5 size={60} color="#E34F26" />
      </MotionBox>
      <MotionBox
        position="absolute"
        left="10%"
        top="20%"
        animate={{ y: [0, -15, 0] }} // Bouncing animation
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <SiMysql size={60} color="#61DBFB" />
      </MotionBox>

      {/* Animated CSS Icon */}
      <MotionBox
        position="absolute"
        right="10%"
        top="20%"
        animate={{ y: [0, -15, 0] }} // Bouncing animation
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <FaCss3Alt size={60} color="#264de4" />
      </MotionBox>
      <MotionBox
        position="absolute"
        right="20%"
        top="20%"
        animate={{ y: [0, -15, 0] }} // Bouncing animation
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <SiMongodb size={60} color="#264de4" />
      </MotionBox>

      {/* Main Card */}
      <Box maxW='md' margin='4' borderWidth='4px' borderRadius='lg' overflow='hidden'>
        <Image
          src={property.imageUrl}
          alt={property.imageAlt}
          style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
        />

        <Box p='6'>
          <Box display='flex' alignItems='baseline'>
            <Badge borderRadius='full' px='10' fontSize='large' colorScheme='teal' >
              Malek Chahbani
            </Badge>
          </Box>

          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            textAlign='justify'
          >
            {property.title}
          </Box>

          <Box fontWeight='bold' as='u' color="black" >
            {property.formattedPrice}
            <Box as='span' color='black' fontSize='md' lineHeight="tall">
              / hr
            </Box>
          </Box>

          <Box display='flex' mt='2' alignItems='center'>
            {Array(5)
              .fill('')
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < property.rating ? 'teal.500' : 'gray.300'}
                />
              ))}
              <Link href='/reviews' >
              <Box as='span' ml='2' color='gray.600' fontSize='sm'>
              {property.reviewCount} reviews
            </Box>
              </Link>

          </Box>
        </Box>
      </Box>

      {/* Animated PHP Icon on the Right */}
      <MotionBox
        position="absolute"
        right="10%"
        top="50%"
        transform="translateY(-50%)"
        animate={{ y: [0, -15, 0] }} // Bouncing animation
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <FaPhp size={60} color="#4F5B93" />
      </MotionBox>

      {/* Animated JS Icon floating on top right */}
      <MotionBox
        position="absolute"
        right="20%"
        top="50%"
        animate={{ rotate: [0, 360] }} // Spinning animation
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <FaJsSquare size={60} color="#F0DB4F" />
      </MotionBox>
      <MotionBox
        position="absolute"
        right="10%"
        top="35%"
        animate={{ rotate: [0, 360] }} // Spinning animation
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <FaLaravel size={60} color="#F0DB4F" />
      </MotionBox>

      {/* Animated NodeJS Icon */}
      <MotionBox
        position="absolute"
        right="20%"
        top="35%"
        animate={{ y: [0, -15, 0] }} // Bouncing animation
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <FaNodeJs size={60} color="#68A063" />
      </MotionBox>
    </Center>
  );
}
