import { useParams } from 'react-router-dom';
import { Box, Image, Text, SimpleGrid, Badge } from '@chakra-ui/react';

const projectDetails = {
  1: {
    title: 'Student Management App',
    description: 'A complete mobile app for managing students, with features like QR code attendance scanning and student data management.',
    captures: ['/assets/images/student-app-1.png', '/assets/images/student-app-2.png'],
    tags: ['Flutter', 'Firebase'],
  },
  2: {
    title: 'Web Developer Portfolio',
    description: 'A React-based portfolio to showcase web and mobile app development skills. This includes a dynamic dashboard for project management.',
    captures: ['/assets/images/portfolio-1.png', '/assets/images/portfolio-2.png'],
    tags: ['React', 'Chakra UI'],
  },
};

export const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectDetails[id];

  return (
    <Box p={5}>
      <Box>
        <Text fontSize="3xl" fontWeight="bold">{project.title}</Text>
        <Box display="flex" mt={3}>
          {project.tags.map((tag, index) => (
            <Badge key={index} borderRadius="full" px="2" colorScheme="teal" mr={2}>
              {tag}
            </Badge>
          ))}
        </Box>
        <Text mt={5}>{project.description}</Text>
      </Box>

      <SimpleGrid columns={[1, 2]} spacing={10} mt={8}>
        {project.captures.map((capture, index) => (
          <Image key={index} src={capture} alt={`Capture ${index + 1}`} />
        ))}
      </SimpleGrid>
    </Box>
  );
};
