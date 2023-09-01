/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

import { Box } from "@chakra-ui/react";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Intro } from "../components/Intro";
import { Portfolio } from "../components/Portfolio";
import { Projects } from "../components/Projects";
import "../index.css";
import { useEffect } from "react";

export const Home = () => {
  const color = {
    primary: "#FBFBFB",
    secondary: "#2A9D8F",
    tertiary: "#808080",
  };
  const marginLeft = "30px";

  useEffect(() => {
    if (window.location.hash) {
      const sectionId = window.location.hash.substring(1);
      scrollToSection(sectionId);
    }
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      w={"100%"}
      p={["10px 10px 0 10px", "20px 30px 0 30px", "20px 50px 0 50px"]}
      bg={"#000"}
      // overflowX="hidden"
      mx="auto"
    >
      <Intro color={color} marginLeft={marginLeft} />
      <Portfolio color={color} marginLeft={marginLeft} />
      <About color={color} marginLeft={marginLeft} />
      <Projects color={color} />
      <Contact color={color} />
    </Box>
  );
};
