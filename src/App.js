import { Box, Text } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Project } from "./pages/Project";
import { Home } from "./pages/Home";
import "./index.css";
import { Navbar21 } from "./components/Navbar21";

function App() {
  const color = {
    primary: "#FBFBFB",
    secondary: "#2A9D8F",
    tertiary: "#808080",
  };

  // Reveal on Scroll

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 50;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);
  window.scroll(0, 0);

  return (
    <Box overflowX={"hidden"} maxW={"1500px"} mx={"auto"}>
      <Router>
        <Navbar21 color={color} />

        <Box>
          <Routes>
            <Route path="*" element={<Home />} />
            <Route index element={<Home />} />
            <Route path="/project" element={<Project color={color} />} />
          </Routes>
          <Text
            fontSize={"1rem"}
            color={"#878787"}
            bg={"#000"}
            fontFamily={"Brush Script MT, Brush Script Std, cursive"}
          >
            {"<html>"}
          </Text>
        </Box>
      </Router>
    </Box>
  );
}
export default App;
