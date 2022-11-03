import React from "react";
import { Box, Text, Stack, Button, Flex } from "@chakra-ui/react";
import { Span } from "./Span";

export const Intro = ({ marginLeft, color }) => {
  const { secondary } = color;
  return (
    <Box position={"relative"} cursor="pointer">
      <Box
        position={"absolute"}
        zIndex={10}
        background={"transparent"}
        h={["75vh", "85vh", "100%", "100%"]}
      >
        <Span />
      </Box>
      <Box position={"relative"}>
        <Text
          fontSize={["0.8rem", "0,8rem", "1rem"]}
          color={"#878787"}
          pt={["100px", "100px", "50px"]}
          fontFamily={"Brush Script MT, Brush Script Std, cursive"}
        >
          {"<body>"}
        </Text>
        <Text
          fontSize={["0.8rem", "0,8rem", "1rem"]}
          color={"#878787"}
          pt={["0"]}
          fontFamily={"Brush Script MT, Brush Script Std, cursive"}
        >
          {"<h1>"}
        </Text>
        <Stack
          lineHeight={1}
          letterSpacing={[-1.5, -1.5, -6.5]}
          ml={marginLeft}
          fontSize={["2.5rem", "2.8rem", "7rem"]}
          fontWeight={"bold"}
          color={"#FBFBFB" || "#FFFFFF"}
          py={["15px", "15px", "5px"]}
        >
          <Box zIndex={4}>
            <Text>Hi!</Text>
            <Text>I'm Austin,</Text>
            <Text>
              Web{" "}
              <Box as="span" id="me" color={secondary} className="ani">
                Developer.
              </Box>
            </Text>
          </Box>
        </Stack>
        <Text
          fontSize={["0.8rem", "0,8rem", "1rem"]}
          color={"#878787"}
          fontFamily={"Brush Script MT, Brush Script Std, cursive"}
        >
          {"</h1>"}
        </Text>
        <Text
          fontSize={["0.8rem", "0,8rem", "1rem"]}
          lineHeight={[0.5, 0.5, ""]}
          color={"#878787"}
          fontFamily={"Brush Script MT, Brush Script Std, cursive"}
        >
          {"<p>"}
        </Text>
        <Text
          fontSize={["1.7rem", "1.7rem", "2.2rem"]}
          color={"#808080"}
          ml={marginLeft}
          className="hi"
        >
          Frontend Developer
        </Text>
        <Text
          fontSize={["0.8rem", "0,8rem", "1rem"]}
          color={"#878787"}
          fontFamily={"Brush Script MT, Brush Script Std, cursive"}
        >
          {"</p>"}
        </Text>
        <Flex justify={["flex-start", "flex-start"]}>
          <Button
            id="button"
            aria-label="Contact me"
            fontSize={["0.8rem", "0.9rem", "1.2rem"]}
            fontWeight={"light"}
            color={"#2A9D8F"}
            border={"2px solid #2A9D8F"}
            borderRadius={"none"}
            bg={"transparent"}
            mt={"30px"}
            mb={["100px"]}
            ml={[marginLeft]}
            size={"lg"}
            w={"270px"}
            zIndex={20}
            alignItems={"center"}
          >
            <a href="mailto:austin7443@gmail.com"> Contact me!</a>
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};
