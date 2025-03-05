import { Box, Container, Heading, VStack, Text, Circle, useColorModeValue, Flex } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

interface TimelineItem {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  type: 'work' | 'education';
}

const timelineData: TimelineItem[] = [
  {
    title: "Senior Software Engineer",
    subtitle: "Tech Company",
    date: "2022 - Present",
    description: "Leading development of web applications using modern technologies.",
    type: "work"
  },
  {
    title: "Master's in Computer Science",
    subtitle: "University Name",
    date: "2020 - 2022",
    description: "Specialized in Software Engineering and Machine Learning",
    type: "education"
  },
  {
    title: "Software Developer",
    subtitle: "Another Tech Company",
    date: "2018 - 2022",
    description: "Developed and maintained multiple web applications.",
    type: "work"
  },
  {
    title: "Bachelor's in Computer Science",
    subtitle: "University Name",
    date: "2014 - 2018",
    description: "Foundations of Computer Science and Software Development",
    type: "education"
  }
];

const TimelineItemComponent = ({ item, index }: { item: TimelineItem; index: number }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Flex
      ref={ref}
      opacity={0}
      transform={`translateX(${index % 2 === 0 ? -50 : 50}px)`}
      animation={inView ? "slideIn 0.5s ease-out forwards" : "none"}
      sx={{
        "@keyframes slideIn": {
          "0%": {
            opacity: 0,
            transform: `translateX(${index % 2 === 0 ? -50 : 50}px)`,
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
      }}
      style={{
        animationDelay: `${index * 0.2}s`,
      }}
      mb={8}
      justify={index % 2 === 0 ? "flex-start" : "flex-end"}
      position="relative"
      paddingX={{ base: 6, md: 0 }}
    >
      <Box
        bg={useColorModeValue("white", "gray.700")}
        p={6}
        borderRadius="lg"
        boxShadow="xl"
        width={{ base: "100%", md: "45%" }}
        position="relative"
      >
        <Circle
          size="40px"
          bg={item.type === "work" ? "blue.400" : "green.400"}
          color="white"
          position="absolute"
          left={{ base: "-20px", md: index % 2 === 0 ? "auto" : "-20px" }}
          right={{ base: "auto", md: index % 2 === 0 ? "-20px" : "auto" }}
          top="20px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {item.type === "work" ? <FaBriefcase /> : <FaGraduationCap />}
        </Circle>

        <Text
          fontSize="sm"
          color={item.type === "work" ? "blue.400" : "green.400"}
          fontWeight="bold"
          mb={2}
        >
          {item.date}
        </Text>
        <Text fontSize="xl" fontWeight="bold" mb={2}>
          {item.title}
        </Text>
        <Text color={useColorModeValue("gray.500", "gray.300")} fontSize="md" mb={2}>
          {item.subtitle}
        </Text>
        <Text color={useColorModeValue("gray.600", "gray.400")}>
          {item.description}
        </Text>
      </Box>
    </Flex>
  );
};

export const Timeline = () => {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const lineColor = useColorModeValue("gray.200", "gray.600");
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Box py={20} bg={bgColor}>
      <Container maxW="container.xl">
        <Box
          ref={ref}
          opacity={0}
          transform="translateY(20px)"
          animation={inView ? "fadeInDown 0.5s ease-out forwards" : "none"}
          mb={12}
          sx={{
            "@keyframes fadeInDown": {
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
          <Heading textAlign="center">
            Experience & Education
          </Heading>
        </Box>

        <VStack spacing={0} position="relative" align="stretch">
          <Box
            position="absolute"
            left="50%"
            top={0}
            bottom={0}
            width="2px"
            bg={lineColor}
            transform="translateX(-50%)"
          />

          {timelineData.map((item, index) => (
            <TimelineItemComponent key={index} item={item} index={index} />
          ))}
        </VStack>
      </Container>
    </Box>
  );
};