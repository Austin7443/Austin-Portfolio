/* eslint-disable react/prop-types */
import { Box, Flex, Grid, HStack, Image, Text } from "@chakra-ui/react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { data } from "../components/ProjectData";

export const Project = ({ color }) => {
  const { secondary, tertiary } = color;

  return (
    <>
      <Box bg={"#000"} boxSizing={"border-box"} pt={["50px", "50px", "130px"]} px={[null, null, "20px", "40px"]}>
        <Text
          fontSize={["0.8rem", "0,8rem", "1rem"]}
          color={tertiary}
          fontFamily={"Brush Script MT, Brush Script Std, cursive"}
        >
          {"<html>"}
        </Text>
        <Flex w={"100%"} justify={"center"}>
          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
            ]}
            w={"100%"}
            gap="1em"
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
                          <a href="https://github.com/Austin7443">
                            <FiGithub size={"1.5rem"} />
                          </a>
                          <a href={data?.link}>
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
        </Flex>
      </Box>
      <Flex
        align={"center"}
        color={secondary}
        w={"100%"}
        justify={"center"}
        bg={"#000"}
        pt={"50px"}
      >
        <Text fontSize={"1rem"} py={["15px", "15px", "0"]}>
          Designed and Built by Austin Onueze
        </Text>
      </Flex>
    </>
  );
};
