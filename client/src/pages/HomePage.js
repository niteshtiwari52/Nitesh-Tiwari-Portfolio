import React from "react";
import DefaultLayoutHoc from "../Layout/DefaultLayout";
import About from ".././components/About";
import Contact from ".././components/Contact";

import Home from ".././components/Home";
import Modal from ".././components/Modal";
import Navbar from ".././components/Navbar";
import Projects from ".././components/Projects";
import Skills from ".././components/Skills";
import SocialLinks from ".././components/SocialLinks";

const HomePage = () => {
  return (
    <>
      <Modal />
      {/* <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <SocialLinks /> */}
    </>
  );
};

export default DefaultLayoutHoc(HomePage);
