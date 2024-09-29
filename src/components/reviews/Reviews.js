import React from 'react';
import Slider from 'react-slick';
import { Box, Flex, Avatar, Text, Badge, Heading } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const reviews = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Web Developer',
    imageUrl: '/assets/images/user1.jpg',
    rating: 5,
    review:
      'This was an amazing project! The developer was extremely professional, and the result exceeded my expectations. Highly recommended!',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Product Manager',
    imageUrl: '/assets/images/user2.jpg',
    rating: 4,
    review:
      'Great work, delivered on time and within budget. There were minor changes needed, but overall a fantastic experience.',
  },
  {
    id: 3,
    name: 'Michael Johnson',
    role: 'UX Designer',
    imageUrl: '/assets/images/user3.jpg',
    rating: 4.5,
    review:
      'Excellent communication and top-quality results. Would definitely work with this developer again.',
  },
  {
    id: 4,
    name: 'Emily Davis',
    role: 'Marketing Specialist',
    imageUrl: '/assets/images/user4.jpg',
    rating: 5,
    review:
      'Absolutely fantastic experience! The project turned out better than I imagined. Highly recommended!',
  },
  // Add more reviews here
];

const ReviewCard = ({ review }) => {
  const { name, role, imageUrl, rating, review: text } = review;

  return (
    <Box
      maxW="md"
      bg="white"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
      shadow="md"
      transition="transform 0.3s"
      _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}
      mx={2} // Add margin for spacing between cards
      height={'400px'}
      marginBottom={4}
    >
      <Flex align="center" mb={4}>
        <Avatar src={imageUrl} alt={name} size="lg" />
        <Box ml={4}>
          <Text fontWeight="bold" fontSize="lg">
            {name}
          </Text>
          <Text fontSize="sm" color="gray.500">
            {role}
          </Text>
        </Box>
      </Flex>

      <Box display="flex" alignItems="center" mb={2}>
        {Array(5)
          .fill('')
          .map((_, i) => (
            <StarIcon
              key={i}
              color={i < rating ? 'teal.500' : 'gray.300'}
              mr={1}
            />
          ))}
        <Text ml={2} color="gray.600" fontSize="sm">
          {rating.toFixed(1)} / 5
        </Text>
      </Box>

      <Text mt={3} color="gray.700" textAlign="justify">
        {text}
      </Text>
    </Box>
  );
};

export const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // Breakpoint for medium devices
        settings: {
          slidesToShow: 1, // Show 1 slide on small devices
        },
      },
      {
        breakpoint: 1024, // Breakpoint for large devices
        settings: {
          slidesToShow: 2, // Show 2 slides on medium devices
        },
      },
    ],
  };

  return (
    <Box p={8} bg="gray.50" minH="100vh">
      {/* Header */}
      <Flex justifyContent="center" mb={8}>
        <Heading as="h1" fontSize="3xl" textAlign="center" color="teal.600" mb={5}>
          Clients Reviews
        </Heading>
      </Flex>

      {/* Reviews Slider */}
      <Slider {...settings}>
        {reviews.map((review) => (
          <ReviewCard review={review} key={review.id} />
        ))}
      </Slider>
    </Box>
  );
};
