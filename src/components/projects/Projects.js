// import { Box, Image, Text, Badge, SimpleGrid, Flex, Heading } from '@chakra-ui/react';
// import { Link, useParams } from 'react-router-dom';
// import { Projects } from './Projets_Informations';



// export const Project = () => {
//     const { id } = useParams();
//     const project = Projects[id];
//   return (
//     <Box p={8} bg="gray.50" minH="100vh">
//       <Flex justifyContent="center" mb={8}>
//         <Heading as="h1" fontSize="3xl" textAlign="center" color="teal.600" mb={5}>
//           My Projects
//         </Heading>
//       </Flex>

//       <SimpleGrid columns={[1, 2, 3]} spacing={10}>
//         {project.map((project) => (
//           <Link to={`/projects/${project.id}`} key={project.id}>
//             <Box
//               maxW="sm"
//               bg="white"
//               borderWidth="1px"
//               borderRadius="lg"
//               overflow="hidden"
//               shadow="lg"
//               transition="transform 0.3s, box-shadow 0.3s"
//               _hover={{ transform: 'scale(1.05)', boxShadow: '2xl' }}
//             >
//               <Image src={project.imageUrl} alt={project.title} objectFit="cover" h="200px" w="full" />

//               <Box p="6">
//                 <Box display="flex" alignItems="baseline" mb={3}>
//                   {project.tags.map((tag, index) => (
//                     <Badge key={index} borderRadius="full" px="3" py="1" colorScheme="teal" mr={2}>
//                       {tag}
//                     </Badge>
//                   ))}
//                 </Box>

//                 <Heading fontSize="xl" mt={2} fontWeight="bold" isTruncated>
//                   {project.title}
//                 </Heading>
//                 <Text mt={3} color="gray.600" fontSize="md" textAlign="justify">
//                   {project.description}
//                 </Text>
//               </Box>
//             </Box>
//           </Link>
//         ))}
//       </SimpleGrid>
//     </Box>
//   );
// };

import { Box, Image, Text, Badge, SimpleGrid, Flex, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Projects } from './Projets_Informations';

export const ProjectsList = () => {
  return (
    <Box p={8} bg="gray.50" minH="100vh">
      <Flex justifyContent="center" mb={8}>
        <Heading as="h1" fontSize="3xl" textAlign="center" color="teal.600" mb={5}>
          My Projects
        </Heading>
      </Flex>

      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {Projects.map((project) => (
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
              <Image src={project.captures[0]} alt={project.title} objectFit="cover" h="200px" w="full" />

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
