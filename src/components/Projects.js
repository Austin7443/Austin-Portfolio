import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";
import "../index.css";
import html from "./images/html.jfif";
import css from "./images/88663_css_icon.png";
import scss from "./images/sass (2).png";
import bootstrap from "./images/291791_bootstrap_icon.png";
import react from "./images/7423887_react_react native_icon.png";
import git from "./images/git.png";
import java from "./images/308441_front-end_javascript_js_long shadow_markup language_icon.png";
import profile from "./images/profile.jpg";
import { Link } from "react-router-dom";

export const Projects = ({ color, marginLeft }) => {
  const { secondary, tertiary } = color;

  return (
    <Box
      color={"#FFFFFF"}
      w={"100%"}
      mt={["50px", "50px", "100px", "100px"]}
      position={"relative"}
      className="reveal"
    >
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        direction={[
          "column-reverse",
          "column-reverse",
          "column-reverse",
          "row",
        ]}
      >
        <Flex
          w={["100%", "100%", "100%", "50%"]}
          h={["350px", "350px", "400px", "450px"]}
          bg={"#2A9D8F"}
          rounded={"lg"}
          //_hover={{ bg: "#000" }}
        >
          <Flex
            align={"center"}
            m="50px auto"
            className="projects"
            display={["block", "block", "block", "flex"]}
          >
            <Flex
              align={"center"}
              className="text-wrapper"
              display={["block", "block", "flex"]}
              justify={["center", "center", "normal"]}
              mx={["auto", "auto", "auto"]}
              w={["250px", "250px", "300px"]}
              h={["250px", "250px", "300px"]}
            >
              <Image
                src={html}
                alt="HTML icon"
                className="html text-html"
                h={["70px", "70px", "100px"]}
                w={["70px", "70px", "100px"]}
                left={["0%", "0%", "-8%"]}
                top={["10%", "10%", "-20%"]}
              />
              <Image
                src={css}
                alt="css icon"
                className="css text-css"
                h={["70px", "70px", "100px"]}
                w={["70px", "70px", "100px"]}
                left={["-18", "-8%", "-38%"]}
                top={["18%", "18%", "20%"]}
              />
              <Image
                src={java}
                alt="javascript icon"
                className="css text-java"
                h={["70px", "70px", "100px"]}
                w={["70px", "70px", "100px"]}
                left={["19%", "15%", "-40%"]}
                top={["20%", "18%", "43%"]}
              />
              <Image
                src={react}
                alt="react icon"
                className="css text-react"
                h={["70px", "70px", "100px"]}
                w={["70px", "70px", "100px"]}
                left={["55%", "55%", "-35%"]}
                top={["-10%", "-10%", "33%"]}
              />
              <Image
                src={git}
                alt="git icon"
                className="css text-git"
                h={["70px", "70px", "100px"]}
                w={["70px", "70px", "100px"]}
                left={["80%", "80%", "-58%"]}
                top={["-70%", "-70%", "0%"]}
              />
              <Image
                src={scss}
                alt="scss icon"
                className="css text-scss"
                h={["70px", "70px", "100px"]}
                w={["70px", "70px", "100px"]}
                left={["35%", "35%", "-110%"]}
                top={["-150%", "-150%", "-35%"]}
              />
              <Image
                src={bootstrap}
                alt="bootstrap icon"
                className="css text-bootstrap"
                h={["70px", "70px", "100px"]}
                w={["70px", "70px", "100px"]}
                left={["72%", "72%", "-180%"]}
                top={["-160%", "-160%", "-42%"]}
              />
            </Flex>
            <Image
              position="relative"
              top={["-80%", "-80%", "-75%", 0]}
              src={profile}
              alt="Profile icon"
              className="profileImg"
              left={["0%", "0%", "0%", "-50%"]}
            />
          </Flex>
        </Flex>
        <Flex
          justify={["center", "center", "flex-end"]}
          mt={["0", "0", "20px"]}
        >
          <Box w={"100%"}>
            <Flex justify={["center", "center", "flex-end"]}>
              <Text fontSize={"1.5rem"} color={secondary} fontWeight={"bold"}>
                Technologies Used
              </Text>
            </Flex>
            <Flex justify={["center", "center", "flex-end"]}>
              <Text fontSize={"2.2rem"} color={tertiary} fontWeight={"bold"}>
                My Daily Tools
              </Text>
            </Flex>
            <Box mt={"20px"} ml={["0", "0", "0", "-100px"]}>
              <Text
                bg={"#120707"}
                maxW={["600px"]}
                p={"40px"}
                border={`3px solid ${tertiary}`}
              >
                These are some of the technologies i most frequently use to
                build amazing things, I work with these on daily basis and have
                a good understanding about them. I also have basic knowledge of
                MongoDB, Express and Node.js. I also work with various packages,
                CSS libraries and team management tools which are listed in my
                CV.
              </Text>
              <Text
                fontSize={"30rem"}
                fontWeight={"extrabold"}
                color={"#929292"}
                position={"absolute"}
                zIndex={-2}
                top={"90%"}
                left={["30%", "40%", "60%"]}
                //letterSpacing={"-50px"}
                opacity={"20%"}
              >
                Hi
              </Text>
            </Box>
            <Flex justify={["center", "center", "center", "flex-end"]}>
              <Box>
                <HStack spacing={[2, 2, 4]} py={"20px"}>
                  <Text>HTML</Text>
                  <Text>CSS</Text>
                  <Text>JavaScript</Text>
                  <Text>React</Text>
                  <Text>Bootstrap</Text>
                  <Text>SCSS</Text>
                  <Text>Git</Text>
                </HStack>
              </Box>
            </Flex>
            <Flex
              justify={"flex-end"}
              pb={["20px", "20px", "0px"]}
              mb={["15px", "15px", "20px", "0"]}
            >
              <Box>
                <HStack spacing={6}>
                  <a href="https://github.com/Austin7443">
                    <FiGithub size={"1.5rem"} />
                  </a>
                  <Link to="https://austin-cv.netlify.app/">
                    <FiExternalLink size={"1.5rem"} />
                  </Link>
                </HStack>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};