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


function App() {
	return (
		<ChakraProvider>
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Presentation />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/" element={<OpenDrawer/>}/>
				<Route path="/" element={<Footer/>}/>
			</Routes>
			<Footer/>
		</Router>
		</ChakraProvider>
	);
}

export default App;
