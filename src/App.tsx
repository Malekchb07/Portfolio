import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Presentation from "./components/presentation/Presentation";
import About from "./components/about/About";
import Navbar from "./components/navbar/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import Contact from "./components/contact/Contact";
import { OpenDrawer } from "./components/presentation/openDrawer/OpenDrawer";
import { Footer } from "./components/footer/Footer";
import { AirbnbCard } from "./components/accueil/Accuiel";
import {Projects} from "./components/projects/Projects";
import { ProjectDetail } from "./components/projects/Project_Details";
import { Reviews } from "./components/reviews/Reviews";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
	return (
		<ChakraProvider>
			<Router>
			<Navbar />
				<Routes>
					<Route path="/" element={<AirbnbCard />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/projects/:id" element={<ProjectDetail />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/reviews" element={<Reviews />} />
					<Route path="/" element={<Footer />} />
				</Routes>
				<Footer />
			</Router>
		</ChakraProvider>
	);
}

export default App;
