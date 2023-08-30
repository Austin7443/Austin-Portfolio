import {
  Text,
  HStack,
  Button,
  Box,
  Switch,
  UnorderedList,
  ListItem,
  Flex,
  Divider,
} from "@chakra-ui/react";
// import audio from "../components/audio.mp3";
import { FaSoundcloud } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
// import ReactHowler from "react-howler";

// import "../index.css";
import { useState } from "react";

// const media = new Audio(audio);
// media.controls = true;
// media.loop = true;

export const Navbar21 = () => {
  // const [toggle, setToggle] = useState(false);
  const [mobile, setMobile] = useState(false);

  function scrollToTop() {
    window.scroll(0, 0)
  }

  // const playAudio = () => {
  //   setToggle(!toggle);
    // if (media.paused) {
    //   media.play();
    // } else {
    //   media.pause();
    // }
  // };

  // useEffect(() => {
  //   toggle ? media.play() : media.pause();
  // }, [toggle]);

  // useEffect(() => {
  //   media.addEventListener("ended", () => setToggle(false));

  //   return () => {
  //     media.addEventListener("ended", () => setToggle(false));
  //   };
  // }, []);

  return (
    <>
      {/*<ReactHowler
        //src="http://goldfirestudios.com/proj/howlerjs/sound.ogg"
        // playing={toggle}
  />*/}
      <nav className="navbar">
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
        <UnorderedList
          alignItems={"center"}
          className={mobile ? "nav-links-mobile" : "nav-links"}
          right={0}
          listStyleType={"none"}
          //onClick={() => setMobile(false)}
          fontSize={["1rem", "1rem", "1.3rem"]}
          overflowX={"hidden"}
          zIndex={2}
          color={"#808080"}
          py={["40px", "40px", "0px"]}
        >
          <Flex
            w={["100%", "100%", "75%", "60%"]}
            justify={["center", "center", "space-between", "space-between"]}
            align={"center"}
            direction={["column", "column", "row", "row"]}
            fontWeight={["medium", "medium", "semibold"]}
            borderBottom={["1px solid #808080", "none", "none"]}
            // _hover={{ color: "#2A9D8F" }}
          >
            <Divider style={{ color: "black" }} />
            <Box
              py={["7px", "7px", "0px"]}
              className="home"
              onClick={scrollToTop}
            >
              <ListItem className="pad" title="Home">
                Home
              </ListItem>
            </Box>
            <Divider style={{ color: "black" }} />
            <Box py={["7px", "7px", "0px"]}>
              <a href="#about" className="about">
                <ListItem className="pad">About</ListItem>
              </a>
            </Box>
            <Divider style={{ color: "black" }} />
            <Box py={["7px", "7px", "0px"]}>
              <a href="#projects" className="projects">
                <ListItem className="pad">Projects</ListItem>
              </a>
            </Box>
            <Divider style={{ color: "black" }} />
            <Box py={["7px", "7px", "0px"]}>
              <a href="#contact" className="contact">
                <ListItem className="pad">Contact</ListItem>
              </a>
            </Box>
            <Divider style={{ color: "black" }} />
            <Box py={["7px", "7px", "0px"]}>
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
            </Box>
          </Flex>
        </UnorderedList>
        <Button
          id="mobile-menu-icon"
          onClick={() => setMobile(!mobile)}
          aria-label="Menu-icon"
        >
          {mobile ? <MdClose /> : <GiHamburgerMenu />}
        </Button>
      </nav>
      <Text
        fontSize={"1rem"}
        color={"#878787"}
        position={"absolute"}
        zIndex={30}
        fontFamily={"Brush Script MT, Brush Script Std, cursive"}
      >
        {"<html>"}
      </Text>
    </>
  );
};
