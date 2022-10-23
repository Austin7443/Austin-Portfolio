import React, { useState } from "react";
import {
  Text,
  HStack,
  Button,
  Box,
  Switch,
  UnorderedList,
  ListItem,
  Flex,
} from "@chakra-ui/react";
import audio from "../components/audio.mp3";
import { FaSoundcloud } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import "../index.css";

const media = new Audio(audio);
media.controls = true;
//media.autoplay = true

console.log(media);

export const Navbar2 = () => {
  const [toggle, setToggle] = useState(false);
  const [mobile, setMobile] = useState(false);

  // const onload = () => {
  //   media.play();
  // };

  // window.addEventListener("load", function () {
  //   onload();
  // });

  const playAudio = () => {
    setToggle(!toggle);
    // console.log(media, "mediaaaa");
    if (media.paused) {
      media.play();
    } else {
      media.pause();
    }
  };

  return (
    <>
      {/*<Text fontStyle="italic" fontSize={"1rem"} color={"#878787"} bg={"#000"}>
        {"<html>"}
  </Text>*/}
      <nav className="navbar">
        <HStack fontWeight={"semibold"} className="logo">
          <FaSoundcloud size={["2.5rem"]} color={"#2A9D8F"} />
          <Text color={"#FFFFFF"} fontSize={["1rem", "1rem", "1.2rem"]}>
            Sound
          </Text>

          <Box color={"#2A9D8F"} fontSize={"1.5rem"} cursor={"pointer"}>
            <Switch onChange={playAudio} isChecked={toggle} />
          </Box>
        </HStack>
        <UnorderedList
          alignItems={"center"}
          //justifyContent={"center"}
          className={mobile ? "nav-links-mobile" : "nav-links"}
          right={0}
          listStyleType={"none"}
          onClick={() => setMobile(false)}
          fontSize={"1.4rem"}
          overflowX={"hidden"}
          zIndex={2}
          //w={"100%"}
        >
          <Flex
            w={["100%", "100%", "75%", "55%"]}
            justify={["center", "center", "space-between", "space-between"]}
            align={"center"}
            direction={["column", "column", "row", "row"]}
            fontWeight={["semibold"]}
          >
            <Box mb={["-20px", "-20px", "0px", "0px"]}>
              <a href="/" className="home">
                <ListItem className="pad">Home</ListItem>
              </a>
            </Box>
            <Box my={["-20px", "-20px", "-20px", "0px"]}>
              <a href="#about" className="about">
                <ListItem className="pad">About</ListItem>
              </a>
            </Box>
            <Box my={["-20px", "-20px", "-20px", "0px"]}>
              <a href="#projects" className="projects">
                <ListItem className="pad">Projects</ListItem>
              </a>
            </Box>
            <Box my={["-20px", "-20px", "-20px", "0px"]}>
              <a href="#contact" className="contact">
                <ListItem className="pad">Contact</ListItem>
              </a>
            </Box>
            <Box
              mt={["-20px", "-20px", "0px", "0px"]}
              //mb={["-80px", "-80px", "-80px", "0px"]}
            >
              <a href="https://austin-cv.netlify.app/" className="resume">
                <ListItem
                  fontSize={["1.4rem", "1.4rem", "1.4rem", "1.2rem"]}
                  fontWeight={["semibold", "semibold", "light"]}
                  color={["#000", "#000", "#2A9D8F", "#2A9D8F"]}
                  border={"2px solid #2A9D8F"}
                  borderRadius={"none"}
                  bg={"transparent"}
                  size={"lg"}
                  p={["0px", "0px", "5px 10px", "10px 20px"]}
                  //className="ani"
                >
                  Resume
                </ListItem>
              </a>
            </Box>
          </Flex>
        </UnorderedList>
        <Button id="mobile-menu-icon" onClick={() => setMobile(!mobile)}>
          {mobile ? <MdClose /> : <GiHamburgerMenu />}
        </Button>
      </nav>
    </>
  );
};
