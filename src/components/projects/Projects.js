import { Box, Image, Text, Badge, SimpleGrid, Flex, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import project1 from '../../assests/mes_projets/student_management/WhatsApp Image 2024-06-26 at 15.54.23 (1).jpeg'
const projects = [
  {
    id: 1,
    title: 'Student Management App',
    description: 'A mobile app for managing student attendance and profiles.',
    imageUrl: project1,
    tags: ['Flutter', 'Firebase'],
  },
  {
    id: 2,
    title: 'Web Developer Portfolio',
    description: 'A portfolio to showcase my web development projects.',
    imageUrl: project1,
    tags: ['React', 'Chakra UI'],
  },
  {
    id: 3,
    title: 'Web Developer Portfolio',
    description: 'A portfolio to showcase my web development projects.',
    imageUrl: project1,
    tags: ['React', 'Chakra UI'],
  },
  {
    id: 4,
    title: 'Web Developer Portfolio',
    description: 'A portfolio to showcase my web development projects.',
    imageUrl: project1,
    tags: ['React', 'Chakra UI'],
  },
  {
    id: 5,
    title: 'Web Developer Portfolio',
    description: 'A portfolio to showcase my web development projects.',
    imageUrl: project1,
    tags: ['React', 'Chakra UI'],
  },
  {
    id: 6,
    title: 'Web Developer Portfolio',
    description: 'A portfolio to showcase my web development projects.',
    imageUrl: project1,
    tags: ['React', 'Chakra UI'],
  },
  {
    id: 7,
    title: 'Web Developer Portfolio',
    description: 'A portfolio to showcase my web development projects.',
    imageUrl: project1,
    tags: ['React', 'Chakra UI'],
  },
  {
    id: 8,
    title: 'Web Developer Portfolio',
    description: 'A portfolio to showcase my web development projects.',
    imageUrl: project1,
    tags: ['React', 'Chakra UI'],
  },
  {
    id: 9,
    title: 'Web Developer Portfolio',
    description: 'A portfolio to showcase my web development projects.',
    imageUrl: project1,
    tags: ['React', 'Chakra UI'],
  },
  // Add more projects here
];

export const Projects = () => {
  return (
    <Box p={8} bg="gray.50" minH="100vh">
      {/* Header */}
      <Flex justifyContent="center" mb={8}>
        <Heading as="h1" fontSize="3xl" textAlign="center" color="teal.600" mb={5}>
          My Projects
        </Heading>
      </Flex>

      {/* Projects Grid */}
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {projects.map((project) => (
          <Link to={`/projects/${project.id}`} key={project.id}>
            <Box
              maxW="sm"
              bg="white"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              shadow="lg"
              transition="transform 0.3s, box-shadow 0.3s"
              _hover={{ transform: 'scale(1.05)', boxShadow: '2xl' }}
            >
              <Image src={project.imageUrl} alt={project.title} objectFit="cover" h="200px" w="full" />

              <Box p="6">
                <Box display="flex" alignItems="baseline" mb={3}>
                  {project.tags.map((tag, index) => (
                    <Badge key={index} borderRadius="full" px="3" py="1" colorScheme="teal" mr={2}>
                      {tag}
                    </Badge>
                  ))}
                </Box>

                <Heading fontSize="xl" mt={2} fontWeight="bold" isTruncated>
                  {project.title}
                </Heading>
                <Text mt={3} color="gray.600" fontSize="md" textAlign="justify">
                  {project.description}
                </Text>
              </Box>
            </Box>
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  );
};
