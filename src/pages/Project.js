import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { data } from '../components/Portfolio';

export const Project = ({ color }) => {
  const { secondary } = color;

  return (
    <Box bg={"#000"}>
      <Flex w={"100%"} justify={"center"}>
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gap="0em"
          templateRows={"44%"}
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
                     // className="reveal"
                      // id="card"
                    />
                  </Box>
                  <Box className="face back" id="ani" rounded={"lg"}>
                    <Flex
                      rounded={"full"}
                      bg={"#000"}
                      h={"140px"}
                      w={"140px"}
                      align={"center"}
                      justify={"center"}
                    >
                      <Text fontSize={"1.3rem"} fontWeight={"semibold"}>
                        View Project!
                      </Text>
                    </Flex>
                  </Box>
                </Box>
              </Box>
            </>
          ))}
        </Grid>
      </Flex>
      <Box textAlign={"center"} color={secondary}>
        <Text
          fontSize={"1rem"}
          //ml={marginLeft}
          py={["15px", "15px", "0"]}
        >
          Designed and Built by Austin Onueze
        </Text>
      </Box>
    </Box>
  );
};
