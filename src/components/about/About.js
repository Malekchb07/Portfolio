import React from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Image,
  SimpleGrid,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import {
  FaCode,
  FaServer,
  FaMobile,
  FaDatabase,
  FaCloud,
  FaTools,
} from "react-icons/fa";
import profil from "../../assests/images/malekChb.png";
import { useTranslation } from "react-i18next";
const FeatureCard = ({ icon, title, description }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Box
      ref={ref}
      p={6}
      borderRadius="lg"
      bg={useColorModeValue("white", "gray.700")}
      boxShadow="xl"
      opacity={0}
      transform="translateY(20px)"
      animation={inView ? "fadeInUp 0.5s ease-out forwards" : "none"}
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
      <Icon
        as={icon}
        w={10}
        h={10}
        color={useColorModeValue("blue.500", "blue.200")}
        mb={4}
      />
      <Text fontWeight="bold" fontSize="xl" mb={2}>
        {title}
      </Text>
      <Text color={useColorModeValue("gray.600", "gray.300")}>
        {description}
      </Text>
    </Box>
  );
};

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const features = [
    {
      icon: FaCode,
      title: "Frontend Development",
      description:
        "Creating responsive and intuitive user interfaces with modern frameworks",
    },
    {
      icon: FaServer,
      title: "Backend Development",
      description: "Building robust server-side applications and APIs",
    },
    {
      icon: FaMobile,
      title: "Mobile Development",
      description: "Developing cross-platform mobile applications",
    },
    {
      icon: FaDatabase,
      title: "Database Design",
      description: "Designing and optimizing database structures",
    },
    {
      icon: FaCloud,
      title: "Cloud Services",
      description: "Working with cloud platforms and services",
    },
    {
      icon: FaTools,
      title: "DevOps",
      description: "Implementing CI/CD pipelines and automation",
    },
  ];
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <Box py={20} bg={useColorModeValue("gray.50", "gray.800")}>
      <Container maxW="container.xl">
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          gap={10}
          mb={20}
        >
          <Box
            flex={1}
            opacity={0}
            transform="translateX(-50px)"
            animation="slideInLeft 0.5s ease-out forwards"
            sx={{
              "@keyframes slideInLeft": {
                "0%": {
                  opacity: 0,
                  transform: "translateX(-50px)",
                },
                "100%": {
                  opacity: 1,
                  transform: "translateX(0)",
                },
              },
            }}
          >
            <Image
              src={profil}
              alt="Profile"
              borderRadius="full"
              boxSize={{ base: "200px", md: "300px" }}
              objectFit="cover"
              mx="auto"
              boxShadow="2xl"
            />
          </Box>

          <Box
            flex={2}
            opacity={0}
            transform="translateX(50px)"
            animation="slideInRight 0.5s ease-out forwards"
            sx={{
              "@keyframes slideInRight": {
                "0%": {
                  opacity: 0,
                  transform: "translateX(50px)",
                },
                "100%": {
                  opacity: 1,
                  transform: "translateX(0)",
                },
              },
            }}
          >
            <Heading
              as="h1"
              size="2xl"
              mb={6}
              bgGradient="linear(to-r, blue.400, purple.500)"
              bgClip="text"
            >
              About Me
            </Heading>
            <Text
              fontSize="xl"
              mb={4}
              color={useColorModeValue("gray.600", "gray.300")}
            >
              {t("about.description")}
            </Text>
            <Text
              fontSize="xl"
              color={useColorModeValue("gray.600", "gray.300")}
            >
              {t("about.specialization")}
            </Text>
          </Box>
        </Flex>

        <Box ref={ref}>
          <Heading
            textAlign="center"
            mb={12}
            opacity={0}
            transform="translateY(20px)"
            animation={inView ? "fadeInUp 0.5s ease-out forwards" : "none"}
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
            What I Do
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
