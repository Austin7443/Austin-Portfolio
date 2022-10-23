import React from "react";
import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import img4 from "./images/img44.jfif";
// import bgImage from "./images/bgImages2.jfif";

export const Technologies = ({ color, marginLeft }) => {
  const { tertiary } = color;
  return (
    <>
      <Text
        fontStyle="italic"
        fontSize={"1rem"}
        color={tertiary}
        mt={"100px"}
        ml={marginLeft}
      >
        {"<section>"}
      </Text>
      <Box
        w={"100%"}
        display={"grid"}
        gridTemplateColumns={"auto auto auto auto"}
        gridGap={"10px"}
        py={"10px"}
        align={"center"}
        justifyContent={"center"}
        textAlign={"center"}
        // backgroundImage={bgImage}
        // backgroundSize={"cover"}
        // backgroundRepeat={"no-repeat"}
        mx={"auto"}
      >
        {data.map((data) => (
          <Flex
            bg={tertiary}
            w={"250px"}
            p={"30px"}
            h={"200px"}
            borderTop={data.colors}
            shadow={"lg"}
           
            //background={"transparent"}
          >
            <Stack>
              <Image
                src={data.img}
                alt="Project Image"
                w={"80px"}
                borderRadius={"50%"}
                textAlign={"center"}
                mx={"auto !important"}
              />
              <Text fontSize={"1.5rem"} color={data.fontColor}>
                {data.name}
              </Text>
              <Text fontSize={"1rem"} lineHeight={1}>{data.description}</Text>
            </Stack>
          </Flex>
        ))}
      </Box>
      <Text
        fontStyle="italic"
        fontSize={"1rem"}
        color={tertiary}
        ml={marginLeft}
      >
        {"</section>"}
      </Text>
    </>
  );
};

export const data = [
  {
    img: img4,
    name: "HTML",
    colors: "3px solid red",
    fontColor: "red",
    description:
      "Lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et quasi aut",
  },
  {
    img: img4,
    name: "CSS",
    colors: "3px solid pink",
    fontColor: "pink",
    description:
      "Lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et quasi aut",
  },
  {
    img: img4,
    name: "JAVASCRIPT",
    colors: "3px solid blue",
    fontColor: "blue",
    description:
      "Lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et quasi aut",
  },
  {
    img: img4,
    name: "REACT JS",
    colors: "3px solid orange",
    fontColor: "orange",
    description:
      "Lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et quasi aut",
  },
  {
    img: img4,
    name: "BOOTSTRAP",
    colors: "3px solid purple",
    fontColor: "purple",
    description:
      "Lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et quasi aut",
  },
  {
    img: img4,
    name: "SASS",
    colors: "3px solid yellow",
    fontColor: "yellow",
    description:
      "Lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et quasi aut",
  },
  {
    img: img4,
    name: "GIT",
    colors: "3px solid green",
    fontColor: "green",
    description:
      "Lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et quasi aut",
  },
  {
    img: img4,
    name: "SLACK/MEISTER",
    colors: "3px solid blue",
    fontColor: "blue",
    description:
      "Lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et quasi aut",
  },
  
];

{
  /*#button {
  width: "300px";
  height: 100px;
  border: none;
  color: white;
  background-color: rgb(255, 0, 68);
  border-radius: 4px;
  transition: "ease-out 0.5s";
  box-shadow: inset 0 0 0 0 #f9e506;
  outline: "none";
}
#button:hover {
  color: #000;
  cursor: pointer;
  box-shadow: inset 300px 0 0 0 #f9e506;
} */
}