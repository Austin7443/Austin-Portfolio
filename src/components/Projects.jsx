import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
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
import profile from "./images/pic.jpeg";
import { Link } from "react-router-dom";

export const Projects = ({ color }) => {
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
                h={["70px", "70px", "100px"]}
                w={["70px", "70px", "100px"]}
                left={["0%", "0%", "-8%"]}
                top={["10%", "10%", "-20%"]}
                loading="lazy"
                id="tools"
              />
              <Image
                src={css}
                alt="css icon"
                h={["70px", "70px", "100px"]}
                w={["70px", "70px", "100px"]}
                left={["-18", "-8%", "-38%"]}
                top={["18%", "18%", "20%"]}
                loading="lazy"
                id="tools"
              />
              <Image
                src={java}
                alt="javascript icon"
                h={["70px", "70px", "100px"]}
                w={["70px", "70px", "100px"]}
                left={["19%", "15%", "-40%"]}
                top={["20%", "18%", "43%"]}
                loading="lazy"
                id="tools"
              />
              <Image
                src={react}
                alt="react icon"
                h={["70px", "70px", "100px"]}
                w={["70px", "70px", "100px"]}
                left={["55%", "55%", "-35%"]}
                top={["-10%", "-10%", "33%"]}
                loading="lazy"
                id="tools"
              />
              <Image
                src={git}
                alt="git icon"
                h={["70px", "70px", "100px"]}
                w={["70px", "70px", "100px"]}
                left={["80%", "80%", "-58%"]}
                top={["-70%", "-70%", "0%"]}
                loading="lazy"
                id="tools"
              />
              <Image
                src={scss}
                alt="scss icon"
                h={["70px", "70px", "100px"]}
                w={["70px", "70px", "100px"]}
                left={["35%", "35%", "-110%"]}
                top={["-150%", "-150%", "-35%"]}
                loading="lazy"
                id="tools"
              />
              <Image
                src={bootstrap}
                alt="bootstrap icon"
                h={["70px", "70px", "100px"]}
                w={["70px", "70px", "100px"]}
                left={["72%", "72%", "-180%"]}
                top={["-160%", "-160%", "-42%"]}
                loading="lazy"
                id="tools"
              />
            </Flex>
            <Image
              position="relative"
              top={["-80%", "-80%", "-75%", 0]}
              src={profile}
              alt="Profile icon"
              className="profileImg"
              left={["0%", "0%", "0%", "-50%"]}
              loading="lazy"
            />
          </Flex>
        </Flex>
        <Flex
          justify={["center", "center", "flex-end"]}
          mt={["0", "0", "20px"]}
        >
          <Box w={"100%"}>
            <Flex justify={["center", "center", "flex-end"]}>
              <Text
                fontSize={["1rem", "1rem", "1.5rem"]}
                color={secondary}
                fontWeight={"semibold"}
              >
                Technologies Used
              </Text>
            </Flex>
            <Flex justify={["center", "center", "flex-end"]}>
              <Text
                fontSize={["1.7rem", "1.7rem", "2.2rem"]}
                color={tertiary}
                fontWeight={"semibold"}
              >
                My Daily Tools
              </Text>
            </Flex>
            <Box mt={"20px"} ml={["0", "0", "0", "-100px"]}>
              <Text
                bg={"#120707"}
                maxW={["600px"]}
                p={"40px"}
                border={`3px solid ${tertiary}`}
                fontSize={["15px", "15px", "17px"]}
              >
                These are some of the tools that help me build amazing products.
                I work with these on daily basis and have a good understanding
                about them. <br />I also work with various packages, CSS
                libraries and team management tools which are listed in{" "}
                <Text
                  as="span"
                  color={"#2A9D8F"}
                  cursor="pointer"
                  onClick={() =>
                    (window.location.href = "https://austin-cv.netlify.app/")
                  }
                >
                  my CV
                </Text>
                .
                <br />I also have basic knowledge of MongoDB, Express and
                Node.js.
              </Text>
              <Text
                fontSize={"30rem"}
                fontWeight={"extrabold"}
                color={"#929292"}
                position={"absolute"}
                zIndex={-2}
                top={"90%"}
                left={["30%", "30%", "30%", "50%"]}
                opacity={"20%"}
                display={["none", "none", "block"]}
              >
                Hi
              </Text>
            </Box>
            <Flex justify={["center", "center", "center", "flex-end"]}>
              <Box>
                <HStack
                  spacing={[2, 2, 4]}
                  py={"20px"}
                  fontSize={["13px", "14px", "16px"]}
                >
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
