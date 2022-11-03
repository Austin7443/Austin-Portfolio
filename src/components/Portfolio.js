import React from "react";
import { Box, Button, Flex, Grid, HStack, Image, Text } from "@chakra-ui/react";
// import img1 from "./images/img22.png";
// import img2 from "./images/img33.png";
import img3 from "./images/img00.jpeg";
import img4 from "./images/img66.jpeg";
import img5 from "./images/img55.jpeg";
import img6 from "./images/img77.jpeg";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export const Portfolio = ({ color, marginLeft }) => {
  const navigate = useNavigate();
  const { primary, secondary, tertiary } = color;
  return (
    <Box id="projects" className={"reveal"}>
      <Box>
        <Flex
          align={["center", "center", "flex-end"]}
          direction={["column", "column", "row"]}
        >
          <Box bg={""} w={"100%"}>
            <Text
              fontSize={["0.8rem", "0,8rem", "1rem"]}
              color={tertiary}
              fontFamily={"Brush Script MT, Brush Script Std, cursive"}
            >
              {"<h2>"}
            </Text>

            <Text
              fontSize={"27rem"}
              fontWeight={"extrabold"}
              color={"#929292"}
              position={"absolute"}
              zIndex={-2}
              top={"-12%"}
              left={"40%"}
              letterSpacing={"-50px"}
              opacity={"20%"}
            >
              WORKS
            </Text>
            <Text
              lineHeight={0.8}
              ml={[0, 0, marginLeft]}
              fontSize={["2rem", "2.5rem", "6rem"]}
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
            </Text>
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
            <Text
              maxW={"800px"}
              fontSize={["15px", "16px", "19px"]}
              color={primary}
              ml={marginLeft}
            >
              A small gallery of some projects I have worked on. I built some
              alone and others I built with some amazing developers. I'll keep
              updating as the list grows - I promise :). To get a clearer
              glimpse - visit{" "}
              <Text
                as="span"
                color={secondary}
                onClick={() => navigate("/project")}
                cursor={"pointer"}
              >
                {" "}
                my work
              </Text>{" "}
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
            ml={[marginLeft, marginLeft, 0]}
            color={secondary}
            border={"2px solid #2A9D8F"}
            borderRadius={"none"}
            bg={"transparent"}
            size={"lg"}
            w={["90%", "90%", "250px"]}
            onClick={() => {
              navigate("/project");
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
        <Flex w={"100%"} justify={"center"}>
          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(2, 1fr)",
            ]}
            gap="1em"
          >
            {data.map((data) => (
              <>
                <Box
                  key={data.images}
                  className="all"
                  cursor={"pointer"}
                  w={"100%"}
                >
                  <Box className="card">
                    <Box className="face front">
                      <Image
                        src={data.images}
                        alt={data.alt}
                        w={["100%", "100%", "100%"]}
                        h={"100%"}
                        className="reveal"
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
                          <a href={data.link}>View Project!</a>
                        </Text>
                        <Box>
                          <HStack spacing={6}>
                            <a href="https://github.com/Austin7443">
                              <FiGithub size={"1.5rem"} />
                            </a>
                            <a href={data.link}>
                              <FiExternalLink size={"1.5rem"} />
                            </a>
                          </HStack>
                        </Box>
                      </Flex>
                    </Box>
                  </Box>
                </Box>
              </>
            ))}
          </Grid>
        </Flex>
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

export const data = [
  {
    images: img3,
    alt: "Project Image",
    link: "https://myestate.app/",
  },
  {
    images: img6,
    alt: "Project Image",
    link: "https://www.wehaul247.com/",
  },
  {
    images: img5,
    alt: "Project Image",
    link: "/",
  },
  // {
  //   images: img2,
  //   alt: "Project Image",
  //   link: "https://v1-patient-howbodi.netlify.app/",
  // },

  // {
  //   images: img1,
  //   alt: "Project Image",
  //   link: "https://water-management.netlify.app/",
  // },
  {
    images: img4,
    alt: "Project Image",
    link: "/",
  },
];
