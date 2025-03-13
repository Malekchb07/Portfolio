import { Box, Container, Heading, Progress, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
import { motion, Transition } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCode, FaDatabase, FaServer, FaMobile } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const MotionBox = motion(Box);

interface Skill {
  name: string;
  level: number;
  icon: JSX.Element;
  color: string;
}

const skills: Skill[] = [
  { name: "Frontend Development", level: 75, icon: <FaCode size={30} />, color: "blue.400" },
  { name: "Backend Development", level: 75, icon: <FaServer size={30} />, color: "green.400" },
  { name: "Database Management", level: 70, icon: <FaDatabase size={30} />, color: "purple.400" },
  { name: "Mobile Development", level: 80, icon: <FaMobile size={30} />, color: "orange.400" }
];

const cardTransition: Transition = {
  duration: 0.5,
  ease: "easeOut"
};

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ ...cardTransition, delay: index * 0.1 }}
      bg={useColorModeValue("white", "gray.700")}
      p={6}
      borderRadius="lg"
      boxShadow="xl"
      display="flex"
      flexDirection="column"
      gap={4}
    >
      <Box color={skill.color}>
        {skill.icon}
      </Box>
      <Text fontSize="xl" fontWeight="bold">
        {skill.name}
      </Text>
      <Box position="relative">
        <Progress
          value={inView ? skill.level : 0}
          transition="all 1s"
          size="sm"
          colorScheme={skill.color.split('.')[0]}
          borderRadius="full"
        />
        <Text
          position="absolute"
          right="0"
          top="-25px"
          fontSize="sm"
        >
          {skill.level}%
        </Text>
      </Box>
    </MotionBox>
  );
};

export const Skills = () => {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  return (
    <Box py={20} bg={bgColor}>
      <Container maxW="container.xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={cardTransition}
        >
          <Heading 
            textAlign="center" 
            mb={12}
          >
          {t('skills.title', 'My Skills')}

            
          </Heading>
        </motion.div>
        
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};