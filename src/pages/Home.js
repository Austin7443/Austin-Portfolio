import { Box } from "@chakra-ui/react";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Intro } from "../components/Intro";
import { Portfolio } from "../components/Portfolio";
import { Projects } from "../components/Projects";
import "../index.css";

export const Home = () => {
  const color = {
    primary: "#FBFBFB",
    secondary: "#2A9D8F",
    tertiary: "#808080",
  };
  const marginLeft = "30px";

  return (
    <Box
      w={"100%"}
      p={["10px 10px", "20px 30px", "20px 50px"]}
      bg={"#000"}
      overflowX="hidden"
      
      mx="auto"
    >
      <Intro color={color} marginLeft={marginLeft} />
      <Portfolio color={color} marginLeft={marginLeft} />
      <About color={color} marginLeft={marginLeft} />
      <Projects color={color} marginLeft={marginLeft} />
      <Contact color={color} marginLeft={marginLeft} />
    </Box>
  );
};
