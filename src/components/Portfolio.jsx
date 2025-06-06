/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Box, Button, Flex, Grid, HStack, Image, Text } from "@chakra-ui/react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { data } from "./ProjectData";

export const Portfolio = ({ color, marginLeft }) => {
  const navigate = useNavigate();
  const { primary, secondary, tertiary } = color;
  return (
    <Box id="projects">
      <Box position={"relative"} className="reveal">
        <Flex
          align={["start", "center", "flex-end"]}
          direction={["column", "column", "row"]}
        >
          <Box w={"100%"}>
            <Text
              fontSize={["0.8rem", "0,8rem", "1rem"]}
              color={tertiary}
              fontFamily={"Brush Script MT, Brush Script Std, cursive"}
            >
              {"<h2>"}
            </Text>

            <Text
              fontSize={["20rem", "20rem", "15rem", "20rem", "26rem"]}
              fontWeight={"extrabold"}
              color={"#929292"}
              position={"absolute"}
              top={["10%", "10%", "-3%", "-12%"]}
              letterSpacing={"-40px"}
              opacity={"20%"}
              display={["none", "none", "block"]}
            >
              WORK
            </Text>
            <Box
              lineHeight={0.8}
              ml={[0, 0, marginLeft]}
              fontSize={["2rem", "2.5rem", "4rem", "6rem"]}
              fontWeight={"semibold"}
              color={secondary || "#FFFFFF"}
              textAlign={["center", "center", "start"]}
            >
              <HStack
                letterSpacing={-5}
                justifyContent={["center", "center", "start"]}
              >
                <span id="shake">M</span>
                <span id="shake" style={{ paddingRight: "15px" }}>
                  y
                </span>
                <span id="shake">P</span>
                <span id="shake">o</span>
                <span id="shake">r</span>
                <span id="shake">t</span>
                <span id="shake">f</span>
                <span id="shake">o</span>
                <span id="shake">l</span>
                <span id="shake">i</span>
                <span id="shake">o</span>
              </HStack>
            </Box>
            <Box lineHeight={[0.7, 0.7, null]}>
              <Text
                fontSize={["0.8rem", "0,8rem", "1rem"]}
                color={tertiary}
                fontFamily={"Brush Script MT, Brush Script Std, cursive"}
              >
                {"<h2>"}
              </Text>

              <Text
                fontSize={["0.8rem", "0,8rem", "1rem"]}
                color={tertiary}
                fontFamily={"Brush Script MT, Brush Script Std, cursive"}
              >
                {"<p>"}
              </Text>
            </Box>
            <Text
              maxW={"800px"}
              fontSize={["16px", "16px", "19px"]}
              color={primary}
              ml={["15px", "15px", marginLeft]}
            >
              A small gallery of some projects I have worked on. I built some
              alone and others I built with some amazing developers. I'll keep
              updating as the list grows - I promise :). To get a clearer
              glimpse - visit{" "}
              <a href="/projects">
                <Text as="span" color={secondary} cursor="pointer">
                  {" "}
                  my work
                </Text>{" "}
              </a>
              page.
            </Text>
            <Text
              fontSize={["0.8rem", "0,8rem", "1rem"]}
              color={tertiary}
              fontFamily={"Brush Script MT, Brush Script Std, cursive"}
            >
              {"</p>"}
            </Text>
          </Box>

          <Button
            id="button"
            aria-label="See more"
            fontSize={["15px", "16px", "19px"]}
            fontWeight={"light"}
            // display={"flex"}
            // justify={["center", null, null]}
            ml={["15px", "15px", marginLeft]}
            color={secondary}
            border={"2px solid #2A9D8F"}
            borderRadius={"none"}
            bg={"transparent"}
            size={"lg"}
            w={"250px"}
            onClick={() => {
              navigate("/projects");
            }}
          >
            See more!
          </Button>
        </Flex>

        <Text
          fontSize={"1rem"}
          color={tertiary}
          mt={"100px"}
          fontFamily={"Brush Script MT, Brush Script Std, cursive"}
        >
          {"<img>"}
        </Text>

        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
          ]}
          w={"100%"}
          gap="1em"
          // className="reveal"
        >
          {data.map((data) => (
            <Box key={data?.id} className="all" cursor={"pointer"} w={"100%"}>
              <Box className="card">
                <Box className="face front">
                  <Image
                    src={data?.images}
                    alt={data?.alt}
                    h={"100%"}
                    // className="reveal"
                    loading="lazy"
                  />
                </Box>
                <Box className="face back" id="ani" rounded={"lg"}>
                  <Flex
                    rounded={"full"}
                    bg={"#000"}
                    h={"150px"}
                    w={"150px"}
                    align={"center"}
                    justify={"center"}
                    direction={"column"}
                  >
                    <Text
                      fontSize={"1.3rem"}
                      fontWeight={"semibold"}
                      pb={"10px"}
                    >
                      <a href={data?.link}>View Project!</a>
                    </Text>
                    <Box>
                      <HStack spacing={6}>
                        <a
                          href={data?.gitLink}
                          rel="noreferrer"
                          target="_blank"
                        >
                          <FiGithub size={"1.5rem"} />
                        </a>
                        <a href={data?.link} rel="noreferrer" target="_blank">
                          <FiExternalLink size={"1.5rem"} />
                        </a>
                      </HStack>
                    </Box>
                  </Flex>
                </Box>
              </Box>
            </Box>
          ))}
        </Grid>
        <Text
          fontSize={["0.8rem", "0,8rem", "1rem"]}
          color={tertiary}
          fontFamily={"Brush Script MT, Brush Script Std, cursive"}
        >
          {"</img>"}
        </Text>
      </Box>
    </Box>
  );
};
