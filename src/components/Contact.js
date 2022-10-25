import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { BsGithub } from "react-icons/bs";
//import { FaWhatsapp } from "react-icons/fa";
import {
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";

export const Contact = ({ color, marginLeft }) => {
  const { primary, secondary, tertiary } = color;
  return (
    <Box mt={"100px"} className="reveal" position={"relative"}>
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
          {/*<BsTwitter size={"2rem"} style={{paddingBottom: "10px"}} />*/}
          <a href="https://www.instagram.com/invites/contact/?i=1rvtwu62lzrve&utm_content=9q811pa">
            <AiOutlineInstagram
              size={"2rem"}
              style={{ paddingBottom: "12px" }}
              id="shake"
            />
          </a>
          <a href="https://wa.me/2347065861622">
           {/*} <FaWhatsapp
              size={"2rem"}
              style={{ paddingBottom: "12px" }}
              id="shake"
  />*/}
          </a>
          <Box
            borderLeft={`2px solid ${secondary}`}
            h={"200px"}
            ml={"10px !important"}
          ></Box>
        </Stack>
        <Box>
          <Text fontStyle="italic" fontSize={"1rem"} color={tertiary}>
            {"<h2>"}
          </Text>
          <Text
            lineHeight={0.8}
            // ml={marginLeft}
            fontSize={["3rem", "3rem", "6rem"]}
            fontWeight={"bold"}
            color={secondary || "#FFFFFF"}
            textAlign={"center"}
            id="contact"
          >
            Get in Touch
          </Text>
          <Text fontStyle="italic" fontSize={"1rem"} color={tertiary}>
            {"<h2>"}
          </Text>

          <Text fontStyle="italic" fontSize={"1rem"} color={tertiary}>
            {"<div>"}
          </Text>
          <Flex justify={"center"}>
            <Box>
              <Box
                //className="ani"
                border={`5px solid ${secondary}`}
                p={["20px", "20px", "50px"]}
                textAlign={"center"}
              >
                <Text
                  maxW={"520px"}
                  fontSize={"1.2rem"}
                  color={primary}
                  //ml={marginLeft}
                >
                  You can reach out to me through any of my contact options, my
                  inbox is always open. Whether you have a question or just want
                  to say hi, I’ll try my best to get back to you!
                </Text>
                <Button
                  w={"200px"}
                  id="button"
                  fontSize={"1.2rem"}
                  fontWeight={"light"}
                  color={secondary}
                  border={"2px solid #2A9D8F"}
                  borderRadius={"none"}
                  bg={"transparent"}
                  //ml={marginLeft}
                  mt={"30px"}
                  size={"lg"}
                  textAlign={"center"}
                  justifyContent={"center"}
                >
                  <a href="mailto:austin7443@gmail.com">Say Hello</a>
                </Button>
              </Box>
            </Box>
          </Flex>
          <Text fontStyle="italic" fontSize={"1rem"} color={tertiary}>
            {"<div>"}
          </Text>

          <Box
            w={"100%"}
            mx={"auto"}
            display={["flex", "flex", "none"]}
            mt={"100px"}
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
              {/*<BsTwitter size={"1.5rem"} />*/}
              <a href="https://www.instagram.com/invites/contact/?i=1rvtwu62lzrve&utm_content=9q811pa">
                <AiOutlineInstagram size={"1.5rem"} />
              </a>
              <a href="https://wa.me/2347065861622">
                {/*<FaWhatsapp size={"1.5rem"} />*/}
              </a>
            </Flex>
          </Box>
          <Text
            fontSize={"1rem"}
            color={secondary}
            //ml={marginLeft}
            textAlign={"center"}
            py={["15px", "15px", "0"]}
          >
            Designed and Built by Austin Onueze
          </Text>
          <Text fontStyle="italic" fontSize={"1rem"} color={tertiary}>
            {"</body>"}
          </Text>
        </Box>
        <Box display={["none", "none", "block"]}>
          <Stack spacing={36}>
            <a href="mailto:austin7443@gmail.com">
              <Text
                id="mail"
                fontSize={"1.5rem"}
                mb={["20px"]}
                mr={["-20px"]}
              >
                austin7443@gmail.com
              </Text>
              <Box borderRight={`2px solid ${secondary}`} h={"200px"}></Box>
            </a>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};
