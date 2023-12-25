import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      {/* {isOpen ? (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      ) : (
        <> */}
      <Navbar />
      <Home />
      {/* <About /> */}
      <Skills />
      <Projects />
      <Contact />

      <SocialLinks />
      {/* </>
      )} */}
    </>
  );
}

export default App;
