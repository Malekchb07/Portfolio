import { Box, Container, Heading, VStack, Text, Circle, useColorModeValue, Flex } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { translations } from '../../translations/index';
import { useTranslation } from "react-i18next";

const timelineData = (locale ) => {
  const data = translations[locale]?.timeline;

  if (!data) {
    console.warn(`No translation found for locale: ${locale}`);
    return [];
  }

  const workData = data.work?.map((work) => ({
    title: work.title,
    subtitle: work.company,
    date: work.date,
    description: work.description,
    type: "work",
  })) || [];

  const educationData = data.education?.map((education) => ({
    title: education.title,
    subtitle: education.school,
    date: education.date,
    description: education.description,
    type: "education",
  })) || [];

  return [...workData, ...educationData];
};


const TimelineItemComponent = ({ item, index }) => {
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
          "0%": { opacity: 0, transform: `translateX(${index % 2 === 0 ? -50 : 50}px)` },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      }}
      style={{ animationDelay: `${index * 0.2}s` }}
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

        <Text fontSize="sm" color={item.type === "work" ? "blue.400" : "green.400"} fontWeight="bold" mb={2}>
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
  const { t, i18n } = useTranslation();
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const lineColor = useColorModeValue("gray.200", "gray.600");
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const data = [
    ...(t('timeline.work', { returnObjects: true }) || []).map((work) => ({
      title: work.title,
      subtitle: work.company,
      date: work.date,
      description: work.description,
      type: "work",
    })),
    ...(t('timeline.education', { returnObjects: true }) || []).map((education) => ({
      title: education.title,
      subtitle: education.school,
      date: education.date,
      description: education.description,
      type: "education",
    })),
  ];

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
              "0%": { opacity: 0, transform: "translateY(20px)" },
              "100%": { opacity: 1, transform: "translateY(0)" },
            },
          }}
        >
          <Heading textAlign="center">
          {t('timeline.title', 'Experience & Education')}
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

          {data.map((item, index) => (
            <TimelineItemComponent key={index} item={item} index={index} />
          ))}
        </VStack>
      </Container>
    </Box>
  );
};
