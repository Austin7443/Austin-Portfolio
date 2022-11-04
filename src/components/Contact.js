import { Box, Button, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import {
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";

export const Contact = ({ color }) => {
  const { primary, secondary, tertiary } = color;
  return (
    <Box mt={"100px"} className="reveal" position={"relative"} mb={"-100px"}>
      <Flex
        color={secondary}
        align={"end"}
        justify={["center", "center", "space-between"]}
        mb={"-20px"}
      >
        <Stack
          spacing={6}
          className={"sticky"}
          display={["none", "none", "block"]}
        >
          <a href="https://github.com/Austin7443">
            <BsGithub
              size={"2rem"}
              style={{ paddingBottom: "12px" }}
              id="shake"
            />
          </a>
          <a href="https://www.linkedin.com/in/austin-onueze-3608b621a">
            <AiOutlineLinkedin
              size={"2rem"}
              style={{ paddingBottom: "12px" }}
              id="shake"
            />
          </a>

          <a href="https://www.facebook.com/austin.onueze">
            <AiOutlineFacebook
              size={"2rem"}
              style={{ paddingBottom: "12px" }}
              id="shake"
            />
          </a>
          <a href="https://www.instagram.com/invites/contact/?i=1rvtwu62lzrve&utm_content=9q811pa">
            <AiOutlineInstagram
              size={"2rem"}
              style={{ paddingBottom: "12px" }}
              id="shake"
            />
          </a>
          <a href="https://wa.me/2347065861622">
            <FaWhatsapp
              size={"2rem"}
              style={{ paddingBottom: "12px" }}
              id="shake"
            />
          </a>
          <Box
            borderLeft={`2px solid ${secondary}`}
            h={"200px"}
            ml={"10px !important"}
          ></Box>
        </Stack>
        <Box>
          <Text
            fontSize={["0.8rem", "0,8rem", "1rem"]}
            color={tertiary}
            fontFamily={"Brush Script MT, Brush Script Std, cursive"}
          >
            {"<h2>"}
          </Text>
          <Text
            lineHeight={0.8}
            fontSize={["2rem", "2.5rem", "4rem", "6rem"]}
            fontWeight={"semibold"}
            color={secondary || "#FFFFFF"}
            textAlign={"center"}
            id="contact"
          >
            <HStack letterSpacing={-7} justifyContent={"center"}>
              <span id="shake">G</span>
              <span id="shake">e</span>
              <span id="shake" style={{ paddingRight: "15px" }}>
                t
              </span>
              <span id="shake">i</span>
              <span id="shake" style={{ paddingRight: "15px" }}>
                n
              </span>
              <span id="shake">T</span>
              <span id="shake">o</span>
              <span id="shake">u</span>
              <span id="shake">c</span>
              <span id="shake">h</span>
            </HStack>
          </Text>
          <Text
            fontSize={["0.8rem", "0,8rem", "1rem"]}
            lineHeight={[0.5, 0.5, ""]}
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
            {"<div>"}
          </Text>
          <Flex justify={"center"}>
            <Box>
              <Box
                border={`5px solid ${secondary}`}
                p={["20px", "20px", "50px"]}
                textAlign={"center"}
              >
                <Text
                  maxW={"520px"}
                  fontSize={["15px", "16px", "19px"]}
                  color={primary}
                >
                  You can reach out to me through any of my contact options, my
                  inbox is always open. Whether you have a question or just want
                  to say hi, I’ll get back to you ASAP!
                </Text>
                <Button
                  w={"200px"}
                  id="button"
                  aria-label="Say Hello"
                  fontSize={["15px", "16px", "19px"]}
                  fontWeight={"light"}
                  color={secondary}
                  border={"2px solid #2A9D8F"}
                  borderRadius={"none"}
                  bg={"transparent"}
                  mt={["20px", "20px", "30px"]}
                  size={"lg"}
                  textAlign={"center"}
                  justifyContent={"center"}
                >
                  <a href="mailto:austin7443@gmail.com">Say Hello</a>
                </Button>
              </Box>
            </Box>
          </Flex>
          <Text
            fontSize={["0.8rem", "0,8rem", "1rem"]}
            color={tertiary}
            fontFamily={"Brush Script MT, Brush Script Std, cursive"}
          >
            {"</div>"}
          </Text>

          <Box
            w={"100%"}
            mx={"auto"}
            display={["flex", "flex", "none"]}
            mt={["50px", "50px", "100px"]}
          >
            <Flex
              w={"70%"}
              justify={"space-between"}
              align={"center"}
              mx={"auto"}
            >
              <a href="https://github.com/Austin7443">
                <BsGithub size={"1.5rem"} />
              </a>
              <a href="https://www.linkedin.com/in/austin-onueze-3608b621a">
                <AiOutlineLinkedin size={"1.5rem"} />
              </a>

              <a href="https://www.facebook.com/austin.onueze">
                <AiOutlineFacebook size={"1.5rem"} />
              </a>
              <a href="https://www.instagram.com/invites/contact/?i=1rvtwu62lzrve&utm_content=9q811pa">
                <AiOutlineInstagram size={"1.5rem"} />
              </a>
              <a href="https://wa.me/2347065861622">
                <FaWhatsapp size={"1.5rem"} />
              </a>
            </Flex>
          </Box>
          <Text
            fontSize={["0.8rem", "0,8rem", "1rem"]}
            color={secondary}
            textAlign={"center"}
            py={["10px", "10px", "0"]}
          >
            Designed and Built by Austin Onueze
          </Text>
          <Text
            fontSize={["0.8rem", "0,8rem", "1rem"]}
            color={tertiary}
            fontFamily={"Brush Script MT, Brush Script Std, cursive"}
          >
            {"</body>"}
          </Text>
        </Box>
        <Box display={["none", "none", "block"]}>
          <Stack spacing={36}>
            <a href="mailto:austin7443@gmail.com">
              <Text
                className="mail"
                fontSize={"1.5rem"}
                mb={["20px"]}
                mr={["0", "0", "0", "-20px"]}
                id="shake"
              >
                austin7443@gmail.com
              </Text>
              <Box borderRight={`2px solid ${secondary}`} h={"140px"}></Box>
            </a>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};
