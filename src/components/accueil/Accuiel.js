import { useState, useEffect } from 'react';
import {
  Box,
  SimpleGrid,
  Text,
  Button,
  VStack,
  Heading,
  Container,
  useColorModeValue,
  Flex,
  Badge,
  useToast
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

// Card icons using emojis (you can replace these with actual images)
const cardIcons = ['🎮', '🎲', '🎯', '🎪', '🎨', '🎭', '🎪', '🎯', '🎲', '🎮', '🎨', '🎭'];

const Card = ({ icon, isFlipped, isMatched, onClick }) => {
  const bgColor = useColorModeValue('white', 'gray.700');
  const backColor = useColorModeValue('blue.500', 'blue.200');

  return (
    <MotionBox
      cursor="pointer"
      onClick={onClick}
      position="relative"
      height="120px"
      whileHover={{ scale: isFlipped ? 1 : 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <MotionBox
        position="absolute"
        width="100%"
        height="100%"
        borderRadius="lg"
        boxShadow="lg"
        bg={isFlipped ? bgColor : backColor}
        initial={false}
        animate={{
          rotateY: isFlipped ? 180 : 0,
          opacity: isMatched ? 0.5 : 1
        }}
        transition={{ duration: 0.6 }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize="3xl"
        style={{
          backfaceVisibility: 'hidden',
          transform: `rotateY(${isFlipped ? '180deg' : '0deg'})`
        }}
      >
        {isFlipped && icon}
      </MotionBox>
    </MotionBox>
  );
};

export const AirbnbCard = () => {
  const [cards, setCards] = useState([]);
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [moves, setMoves] = useState(0);
  const [bestScore, setBestScore] = useState(localStorage.getItem('memoryGameBestScore') || 0);
  const toast = useToast();

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const shuffledCards = [...cardIcons]
      .sort(() => Math.random() - 0.5)
      .map((icon, index) => ({
        id: index,
        icon,
      }));
    setCards(shuffledCards);
    setFlippedIndices([]);
    setMatchedPairs([]);
    setMoves(0);
  };

  const handleCardClick = (index) => {
    if (
      flippedIndices.length === 2 || // Don't allow more than 2 cards flipped
      flippedIndices.includes(index) || // Don't allow same card to be flipped
      matchedPairs.includes(cards[index].icon) // Don't allow matched cards to be flipped
    ) {
      return;
    }

    const newFlippedIndices = [...flippedIndices, index];
    setFlippedIndices(newFlippedIndices);

    if (newFlippedIndices.length === 2) {
      setMoves(m => m + 1);
      const [firstIndex, secondIndex] = newFlippedIndices;
      
      if (cards[firstIndex].icon === cards[secondIndex].icon) {
        setMatchedPairs([...matchedPairs, cards[firstIndex].icon]);
        setFlippedIndices([]);

        // Check if game is complete
        if (matchedPairs.length + 1 === cardIcons.length / 2) {
          const currentScore = moves + 1;
          if (!bestScore || currentScore < bestScore) {
            localStorage.setItem('memoryGameBestScore', currentScore);
            setBestScore(currentScore);
          }
          toast({
            title: "Congratulations!",
            description: `You completed the game in ${currentScore} moves!`,
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        }
      } else {
        setTimeout(() => {
          setFlippedIndices([]);
        }, 1000);
      }
    }
  };

  return (
    <Box py={20} bg={useColorModeValue('gray.50', 'gray.800')} minH="100vh">
      <Container maxW="container.lg">
        <VStack spacing={8}>
          <Heading
            as={motion.h1}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            fontSize="4xl"
            textAlign="center"
            bgGradient="linear(to-r, blue.400, purple.500)"
            bgClip="text"
          >
            Memory Game
          </Heading>

          <Flex gap={4} wrap="wrap" justify="center">
            <Badge colorScheme="blue" p={2} borderRadius="lg">
              Moves: {moves}
            </Badge>
            <Badge colorScheme="green" p={2} borderRadius="lg">
              Best Score: {bestScore}
            </Badge>
            <Button
              colorScheme="purple"
              size="sm"
              onClick={initializeGame}
            >
              New Game
            </Button>
          </Flex>

          <SimpleGrid columns={{ base: 2, sm: 3, md: 4 }} spacing={4} w="100%">
            {cards.map((card, index) => (
              <Card
                key={card.id}
                icon={card.icon}
                isFlipped={flippedIndices.includes(index)}
                isMatched={matchedPairs.includes(card.icon)}
                onClick={() => handleCardClick(index)}
              />
            ))}
          </SimpleGrid>

          <Text color={useColorModeValue('gray.600', 'gray.300')} textAlign="center">
            Match all the pairs with the fewest moves possible!
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};
