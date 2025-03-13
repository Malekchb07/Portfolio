// import { useParams } from 'react-router-dom';
// import { Box, Image, Text, SimpleGrid, Badge, Flex, VStack, Heading, Container } from '@chakra-ui/react';
// import { Projects } from './Projets_Informations';

// export const ProjectDetail = () => {
//   const { id } = useParams();
//   const project = Projects.find((project) => project.id === parseInt(id, 10));

//   if (!project) {
//     return <Text fontSize="xl" textAlign="center" color="red.500" mt={10}>Project not found</Text>;
//   }

//   return (
//     <Container maxW="7xl" py={8}>
//       <VStack spacing={5} align="start" mb={8}>
//         <Heading as="h1" fontSize={["2xl", "3xl", "4xl"]} fontWeight="bold" color="teal.600">
//           {project.title}
//         </Heading>
//         <Flex wrap="wrap" gap={2}>
//           {project.tags.map((tag, index) => (
//             <Badge
//               key={index}
//               borderRadius="full"
//               px={4}
//               py={2}
//               colorScheme="teal"
//               fontSize="sm"
//               textTransform="capitalize"
//             >
//               {tag}
//             </Badge>
//           ))}
//         </Flex>
//         <Text fontSize="lg" color="gray.700" mt={2}>
//           {project.description}
//         </Text>
//       </VStack>

//       <SimpleGrid columns={[1, 2, 3]} spacing={5}>
//         {project.captures.map((capture, index) => (
//           <Box
//             key={index}
//             overflow="hidden"
//             borderRadius="lg"
//             shadow="md"
//             _hover={{ transform: 'scale(1.05)', transition: '0.3s ease-in-out' }}
//           >
//             <Image
//               src={capture}
//               alt={`Capture ${index + 1}`}
//               objectFit="cover"
//               w="100%"
//               h={["200px", "300px", "350px"]}
//               transition="0.3s"
//             />
//           </Box>
//         ))}
//       </SimpleGrid>
//     </Container>
//   );
// };
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Image,
  Text,
  SimpleGrid,
  Badge,
  Flex,
  VStack,
  Heading,
  Container,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { Projects } from './Projets_Informations';

export const ProjectDetail = () => {
  const { id } = useParams();
  const project = Projects.find((project) => project.id === parseInt(id, 10));

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState(null);

  if (!project) {
    return <Text fontSize="xl" textAlign="center" color="red.500" mt={10}>Project not found</Text>;
  }

  const handleImageClick = (image) => {
    setSelectedImage(image);
    onOpen();
  };

  return (
    <Container maxW="7xl" py={8}>
      {/* Header Section */}
      <VStack spacing={5} align="start" mb={8}>
        <Heading as="h1" fontSize={["2xl", "3xl", "4xl"]} fontWeight="bold" color="teal.600">
          {project.title}
        </Heading>
        <Flex wrap="wrap" gap={2}>
          {project.tags.map((tag, index) => (
            <Badge
              key={index}
              borderRadius="full"
              px={4}
              py={2}
              colorScheme="teal"
              fontSize="sm"
              textTransform="capitalize"
            >
              {tag}
            </Badge>
          ))}
        </Flex>
        <Text fontSize="lg" color="gray.700" mt={2}>
          {project.description}
        </Text>
      </VStack>

      {/* Gallery Section */}
      <SimpleGrid columns={[1, 2, 3]} spacing={5}>
        {project.captures.map((capture, index) => (
          <Box
            key={index}
            overflow="hidden"
            borderRadius="lg"
            shadow="md"
            cursor="pointer"
            _hover={{ transform: 'scale(1.05)', transition: '0.3s ease-in-out' }}
            onClick={() => handleImageClick(capture)}
          >
            <Image
              src={capture}
              alt={`Capture ${index + 1}`}
              objectFit="cover"
              w="100%"
              h={["200px", "300px", "350px"]}
              transition="0.3s"
            />
          </Box>
        ))}
      </SimpleGrid>

      {/* Modal Section */}
      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent bg="transparent" shadow="none">
          <ModalCloseButton color="white" />
          <ModalBody display="flex" justifyContent="center" alignItems="center">
            {selectedImage && (
              <Image
                src={selectedImage}
                alt="Selected capture"
                maxW="100%"
                maxH="80vh"
                objectFit="contain"
                borderRadius="lg"
              />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
};
