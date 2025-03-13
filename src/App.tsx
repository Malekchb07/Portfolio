import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from "./components/about/About";
import Navbar from "./components/navbar/Navbar";
import { ChakraProvider, createLocalStorageManager } from "@chakra-ui/react";
import Contact from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import { AirbnbCard } from "./components/accueil/AirbnbCard";
import { ProjectDetail } from "./components/projects/Project_Details";
import { Reviews } from "./components/reviews/Reviews";
import { Skills } from "./components/skills/Skills";
import { Timeline } from "./components/timeline/Timeline";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ProjectsList } from "./components/projects/Projects";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { useEffect } from 'react';

const colorModeManager = createLocalStorageManager('portfolio-color-mode');

function AppContent() {
  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    const handleLanguageChange = (lng: string) => {
      document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, []);
  // const { i18n } = useTranslation();

  return (
    <ChakraProvider colorModeManager={colorModeManager}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/have-fun" element={<AirbnbCard />} />
          <Route path="/projects" element={<ProjectsList />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/" element={
            <>
              <About />
              <Skills />
              <Timeline />
              </>
          } />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <AppContent />
    </I18nextProvider>
  );
}

export default App;
