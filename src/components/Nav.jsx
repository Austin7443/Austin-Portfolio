import {
  Box,
  Button,
  Flex,
  HStack,
  // Image,
  Stack,
  Switch,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
// import logo from "../assets/logo.png";
import { MdClear, MdMenu } from "react-icons/md";
import { useEffect, useState } from "react";
import "../App.css";
import { FaSoundcloud } from "react-icons/fa";

function Nav() {
  const [showMenu, setShowMenu] = useState(null);
  const menuOpen = useBreakpointValue([false, false, true, true]);

  useEffect(() => {
    setShowMenu(menuOpen);
  }, [menuOpen]);

  return (
    <Flex
      className="gradient"
      bg="#000"
      w={"100%"}
      position={"fixed"}
      zIndex={20}
      direction={["column", "column", "row", "row"]}
      align={"center"}
      justifyContent={["space-between"]}
      p={["20px 0px", "20px 20px", "40px 20px", "15px 40px"]}
      fontFamily={"Trenda-regular"}
    >
      <Flex w={["100%", "100%", "10%", "20%"]} align={["flex-start"]}>
        <Link to="/">
          <HStack fontWeight={"semibold"} className="logo">
            <FaSoundcloud size={["2.5rem"]} color={"#2A9D8F"} />
            <Text color={"#FFFFFF"} fontSize={["1rem", "1rem", "1.2rem"]}>
              Sound
            </Text>

            <Box
              color={"#2A9D8F"}
              fontSize={"1.5rem"}
              cursor={"pointer"}
              pb={"5px"}
            >
              <Switch
                // onChange={playAudio}
                // isChecked={toggle}
                colorScheme="teal"
                aria-label="Sound switch"
              />
              {/* <label class="switch">
              <input type="checkbox" checked={toggle} onChange={playAudio} />
              <span class="slider round"></span>
</label> */}
            </Box>
          </HStack>
        </Link>
      </Flex>
      <Box>
        <Stack
          w={"100%"}
          fontWeight={"bold"}
          fontSize="1.15em"
          direction={["column", "column", "row", "row"]}
          alignItems="center"
          justifyContent={"space-between"}
          p={[null, null, "10px 10px", "20px 80px"]}
          fontFamily={"Trenda-regular"}
          display={showMenu ? "flex" : "none"}
          color={"#808080"}
        >
          <Text pr={["0px", "0px", "40px"]}>
            <a href="#home" className="home">
              Home
            </a>
          </Text>
          <Text pr={["0px", "0px", "40px"]}>
            <a href="#about" className="about">
              About
            </a>
          </Text>
          <Text pr={["0px", "0px", "40px"]}>
            <a href="#projects" className="projects">
              Projects
            </a>
          </Text>
          <Text pr={["0px", "0px", "40px"]}>
            <a href="#contact" className="contact">
              Contact
            </a>
          </Text>
          <a href="https://austin-cv.netlify.app/" className="resume">
            <Button
              id="button"
              //_hover={{ background: "#2A9D8F" }}
              fontSize={["1rem", "1rem", "1.3rem", "1.5rem"]}
              fontWeight={["medium", "medium", "light"]}
              bg={["#2A9D8F", "#2A9D8F", "transparent"]}
              color={["#000", "#000", "#2A9D8F"]}
              display={["block", "block", "none", "none"]}
              p={["0 10px", "5px 10px", "10px 20px"]}
              border={["none", "none", "2px solid #2A9D8F"]}
              // rounded={["sm", "sm", "none"]}
            >
              Resume
            </Button>
          </a>
        </Stack>
      </Box>
      <Box>
        <Stack direction={"row"} alignItems="center">
          <a href="https://austin-cv.netlify.app/" className="resume">
            <Button
              id="button"
              fontSize={["1rem", "1rem", "1.3rem", "1.3rem"]}
              fontWeight={["medium", "medium", "light"]}
              color={["#000", "#000", "#2A9D8F"]}
              border={["none", "none", "2px solid #2A9D8F"]}
              rounded={["sm", "sm", "none"]}
              bg={["#2A9D8F", "#2A9D8F", "transparent"]}
              p={["0 10px", "5px 10px", "10px 20px"]}
              h={["25px", "25px", "40px"]}
            >
              Resume
            </Button>
          </a>
        </Stack>
      </Box>
      <Box
        position={"absolute"}
        right={"20px"}
        top={"30px"}
        display={["block", "block", "none", "none"]}
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? <MdClear size="1.8rem" /> : <MdMenu size="2.5rem" />}
      </Box>
    </Flex>
  );
}

export default Nav;
