import React from "react";
import { Box, Button, Flex, Grid, HStack, Image, Text } from "@chakra-ui/react";
// import  img1 from "./images/img1.jpg"
//import  img2 from "./images/img22.jfif"
import img3 from "./images/img00.png";
import img4 from "./images/img44.jfif";
import img5 from "./images/img55.jfif";
import img6 from "./images/img77.png";
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export const Portfolio = ({ color, marginLeft }) => {
  const navigate = useNavigate();
  const { primary, secondary, tertiary } = color;
  return (
    <Box id="projects">
      <Box className="reveal">
        <Flex
          align={["center", "center", "flex-end"]}
          direction={["column", "column", "row"]}
        >
          <Box bg={""} w={"100%"}>
            <Text fontStyle="italic" fontSize={"1rem"} color={tertiary}>
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
              fontSize={["2.5rem", "3rem", "6rem"]}
              fontWeight={"bold"}
              color={secondary || "#FFFFFF"}
              textAlign={["center", "center", "start"]}
            >
              My Portfolio
            </Text>
            <Text fontStyle="italic" fontSize={"1rem"} color={tertiary}>
              {"<h2>"}
            </Text>

            <Text fontStyle="italic" fontSize={"1rem"} color={tertiary}>
              {"<p>"}
            </Text>
            <Text
              maxW={"800px"}
              fontSize={"1.2rem"}
              color={primary}
              ml={marginLeft}
            >
              A small gallery of projects done by me, both personal projects and
              clients project. Some i have built alone and others I've done
              together with other amazing developers. I'll keep updating as the
              list grows. Interested to see some more? Visit{" "}
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
            <Text fontStyle="italic" fontSize={"1rem"} color={tertiary}>
              {"</p>"}
            </Text>
          </Box>
          <Button
            id="button"
            fontSize={"1.2rem"}
            fontWeight={"light"}
            color={secondary}
            border={"2px solid #2A9D8F"}
            borderRadius={"none"}
            bg={"transparent"}
            size={"lg"}
            w={"250px"}
            onClick={() => {
              navigate("/project");
            }}
          >
            See more!
          </Button>
        </Flex>

        <Text
          fontStyle="italic"
          fontSize={"1rem"}
          color={tertiary}
          mt={"100px"}
        >
          {"<img>"}
        </Text>
        <Flex w={"100%"} justify={"center"}>
          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
            ]}
            gap="1em"
            //templateRows={["-25%", "-25%", "43%"]}
          >
            {data.map((data, i) => (
              <>
                <Box className="all" cursor={"pointer"} w={"100%"}>
                  <Box className="card">
                    <Box className="face front">
                      <Image
                        src={data.images}
                        alt={data.alt}
                        key={i}
                        w={["100%", "100%", "400px"]}
                        h={"100%"}
                        className="reveal"
                        // id="card"
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
        <Text fontStyle="italic" fontSize={"1rem"} color={tertiary}>
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
    images: img4,
    alt: "Project Image",
    link: "/",
  },
  {
    images: img5,
    alt: "Project Image",
    link: "/",
  },
  {
    images: img4,
    alt: "Project Image",
    link: "/",
  },
  {
    images: img3,
    alt: "Project Image",
    link: "/",
  },
  {
    images: img6,
    alt: "Project Image",
    link: "https://www.wehaul247.com/",
  },
];
