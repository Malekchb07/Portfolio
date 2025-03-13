import {
  ButtonGroup,
  Container,
  IconButton,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  return (
    <Container py={{ base: "12", md: "16" }}>
      <Stack spacing={{ base: "4", md: "5" }} align={"center"}>
        <Stack justify="space-between" direction="row" align="center">
          <ButtonGroup variant="tertiary">
            <IconButton
              as="a"
              href="https://github.com/Malekchb07"
              aria-label="GitHub"
              icon={<FaGithub />}
              style={{ color: "red", fontSize: "50px" }}
            />
            <IconButton
              as="a"
              href="https://www.linkedin.com/in/malek-chahbani-2a014a224/"
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              style={{ color: "blueviolet", fontSize: "50px" }}
            />
            <IconButton
              as="a"
              href="https://github.com/MalekChahbaniX"
              aria-label="GitHub"
              icon={<FaGithub />}
              style={{ color: "yellow", fontSize: "50px" }}
            />
          </ButtonGroup>
        </Stack>
        <Text fontSize="sm" color="fg.subtle">
          {t("footer.creation")} Malek CHAHBANI
        </Text>
        <Text fontSize="sm" color="fg.subtle">
          &copy; {new Date().getFullYear()}, Inc. All rights reserved.
        </Text>
      </Stack>
    </Container>
  );
};
