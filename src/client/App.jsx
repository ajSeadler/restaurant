import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MenuCart from "./components/MenuCart";



function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/menu" element={<Menu />} />
        <Route path ="/about" element={<About />} />
        <Route path ="/contact" element={<Contact />} />
        <Route path ="/togo" element={<MenuCart />} />
        
      </Routes>
      <Footer />
      
    </>
  );
}

export default App;
