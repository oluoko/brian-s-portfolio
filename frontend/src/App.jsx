import React, { useState } from "react";
import useLocalStorage from "use-local-storage";

import "./App.css";
import { Toggle } from "./components/Toggle/Toggle.jsx";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Brian } from "./components/Brian/Brian.jsx";
import { About } from "./components/About/About.jsx";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import ContactForm from "./components/ContactForm/ContactForm.jsx";

const App = () => {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <Navbar isdark={isDark} setisdark={setIsDark} />
      <Brian />
      <About />
      <Experience />
      <Projects />
      <ContactForm />
      <Contact />
    </div>
  );
};

export default App;
