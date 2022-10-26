import { Box, Flex, Grid, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { data } from '../components/Portfolio';
import { FiGithub, FiExternalLink } from "react-icons/fi";

export const Project = ({ color }) => {
  const { secondary } = color;

  return (
    <>
    <Flex bg={"#000"} minHeight={"100vh"} boxSizing={"border-box"}>
      <Flex w={"100%"} justify={"center"} pt={"100px"}>
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
                      //className="reveal"
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
    </Flex>
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
