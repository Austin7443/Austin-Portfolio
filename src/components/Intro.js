import React from "react";
import { Box, Text, Stack, Button, HStack, Flex } from "@chakra-ui/react";
import { Span } from "./Span";

export const Intro = ({ marginLeft, color }) => {
  const { secondary } = color;
  return (
    <Box position={"relative"}>
      <Box position={"absolute"} zIndex={10} background={"transparent"}>
        <Span />
      </Box>
      <Box position={"relative"}>
        <Text
          fontStyle="italic"
          fontSize={"1rem"}
          color={"#878787"}
          pt={["70px", "70px", "50px"]}
        >
          {"<body>"}
        </Text>
        <Text
          fontStyle="italic"
          fontSize={"1rem"}
          color={"#878787"}
          //pt={["70px", "70px", "0"]}
        >
          {"<h1>"}
        </Text>
        <Stack
          lineHeight={[0.9, 0.9, 1]}
          letterSpacing={[-6.0, -6.5]}
          ml={marginLeft}
          fontSize={["2.8rem", "3rem", "7rem"]}
          fontWeight={"bold"}
          color={"#FBFBFB" || "#FFFFFF"}
          py={"5px"}
        >
          <Box zIndex={4}>
            <HStack>
              <span id="shake">H</span>
              <span id="shake">i,</span>
            </HStack>
            <HStack>
              <span id="shake">I'</span>
              <span id="shake" style={{ paddingRight: "20px" }}>
                m
              </span>
              <span id="shake">A</span>
              <span id="shake">u</span>
              <span id="shake">s</span>
              <span id="shake">t</span>
              <span id="shake">i</span>
              <span id="shake">n,</span>
            </HStack>
            <HStack>
              <span id="shake">I'</span>
              <span id="shake" style={{ paddingRight: "20px" }}>
                m
              </span>
              <span id="shake" style={{ paddingRight: "20px" }}>
                a
              </span>
              <Box id="me" color={secondary} className="ani">
                <span id="shake">D</span>
                <span id="shake">e</span>
                <span id="shake">v</span>
                <span id="shake">e</span>
                <span id="shake">l</span>
                <span id="shake">o</span>
                <span id="shake">p</span>
                <span id="shake">e</span>
                <span id="shake">r</span>
                <span id="shake">,</span>
              </Box>
            </HStack>
          </Box>
        </Stack>
        <Text fontStyle="italic" fontSize={"1rem"} color={"#878787"}>
          {"</h1>"}
        </Text>
        <Text fontStyle="italic" fontSize={"1rem"} color={"#878787"}>
          {"<p>"}
        </Text>
        <Text
          fontSize={["1.5rem", "1.5rem", "2rem"]}
          color={"#808080"}
          ml={marginLeft}
          className="hi"
        >
          Frontend Developer
        </Text>
        <Text fontStyle="italic" fontSize={"1rem"} color={"#878787"}>
          {"</p>"}
        </Text>
        <Flex justify={["center", "flex-start", "flex-start"]}>
          <Button
            id="button"
            fontSize={"1.2rem"}
            fontWeight={"light"}
            color={"#2A9D8F"}
            border={"2px solid #2A9D8F"}
            borderRadius={"none"}
            bg={"transparent"}
            mt={"30px"}
            mb={"100px"}
            ml={[0, 0, marginLeft]}
            size={"lg"}
            w={"250px"}
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
