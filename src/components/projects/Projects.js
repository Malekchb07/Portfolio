import { 
  Box, 
  Image, 
  Text, 
  Badge, 
  SimpleGrid, 
  Flex, 
  Heading,
  Skeleton,
  useColorModeValue,
  Container
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Projects } from './Projets_Informations';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

const ProjectCard = ({ project, index }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const cardBg = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('gray.600', 'gray.200');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box
      ref={ref}
      opacity={0}
      transform="translateY(20px)"
      animation={inView ? "fadeInUp 0.5s ease-out forwards" : "none"}
      style={{
        animationDelay: `${index * 0.1}s`
      }}
      sx={{
        "@keyframes fadeInUp": {
          "0%": {
            opacity: 0,
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      }}
    >
      <Link to={`/projects/${project.id}`}>
        <Box
          maxW="sm"
          bg={cardBg}
          borderWidth="1px"
          borderColor={borderColor}
          borderRadius="xl"
          overflow="hidden"
          shadow="lg"
          transition="all 0.3s ease"
          _hover={{ 
            transform: 'translateY(-8px)', 
            boxShadow: '2xl',
            '& img': {
              transform: 'scale(1.05)'
            }
          }}
          position="relative"
        >
          <Box h="200px" overflow="hidden">
            <Skeleton isLoaded={isLoaded} h="100%" w="100%">
              <Image 
                src={project.captures[0]} 
                alt={project.title} 
                objectFit="cover" 
                h="100%" 
                w="100%"
                transition="transform 0.5s ease"
                onLoad={() => setIsLoaded(true)}
              />
            </Skeleton>
          </Box>

          <Box 
            position="absolute" 
            top={0} 
            left={0} 
            right={0}
            p={4}
            background="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)"
          >
            <Flex flexWrap="wrap" gap={2}>
              {project.tags.map((tag, index) => (
                <Badge 
                  key={index} 
                  borderRadius="full" 
                  px="3" 
                  py="1" 
                  colorScheme="teal"
                  textTransform="lowercase"
                  fontSize="xs"
                  letterSpacing="wide"
                >
                  {tag}
                </Badge>
              ))}
            </Flex>
          </Box>

          <Box p={6}>
            <Heading 
              fontSize="xl" 
              fontWeight="bold" 
              mb={3}
              transition="color 0.3s ease"
              _groupHover={{ color: 'teal.500' }}
            >
              {project.title}
            </Heading>
            <Text 
              color={textColor} 
              fontSize="md" 
              noOfLines={3}
              lineHeight="tall"
            >
              {project.description}
            </Text>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

export const ProjectsList = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Box py={20} bg={bgColor} minH="100vh">
      <Container maxW="container.xl">
        <Box
          ref={ref}
          mb={16}
          opacity={0}
          transform="translateY(20px)"
          animation={inView ? "fadeInDown 0.5s ease-out forwards" : "none"}
          sx={{
            "@keyframes fadeInDown": {
              "0%": {
                opacity: 0,
                transform: "translateY(-20px)",
              },
              "100%": {
                opacity: 1,
                transform: "translateY(0)",
              },
            },
          }}
        >
          <Heading 
            as="h1" 
            fontSize={{ base: "3xl", md: "4xl" }}
            textAlign="center"
            bgGradient="linear(to-r, teal.400, blue.500)"
            bgClip="text"
            mb={4}
          >
            My Projects
          </Heading>
          <Text
            textAlign="center"
            fontSize={{ base: "lg", md: "xl" }}
            color={useColorModeValue('gray.600', 'gray.300')}
            maxW="2xl"
            mx="auto"
          >
            A showcase of my work, personal projects, and contributions
          </Text>
        </Box>

        <SimpleGrid 
          columns={{ base: 1, md: 2, lg: 3 }} 
          spacing={{ base: 8, lg: 10 }}
          px={{ base: 4, md: 0 }}
        >
          {Projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
