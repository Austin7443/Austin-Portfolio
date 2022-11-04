import React from "react";
import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import profile from "./images/dp.jpeg";

export const About = ({ color, marginLeft }) => {
  const { primary, secondary, tertiary } = color;

  return (
    <Flex
      align={"center"}
      mt={"100px"}
      w={"100%"}
      justify={"space-around"}
      id="about"
      direction={["column", "column", "column", "row"]}
    >
      <Box bg={""} className="reveal">
        <Text
          fontSize={["0.8rem", "0,8rem", "1rem"]}
          color={tertiary}
          fontFamily={"Brush Script MT, Brush Script Std, cursive"}
        >
          {"<h2>"}
        </Text>
        <Text
          lineHeight={0.8}
          ml={[0, 0, marginLeft]}
          fontSize={["2rem", "2.5rem", "4rem", "6rem"]}
          fontWeight={"semibold"}
          color={secondary || "#FFFFFF"}
          textAlign={["center", "center", "start"]}
        >
          <HStack
            letterSpacing={[-7, -7, -10]}
            justifyContent={["center", "center", "start"]}
          >
            <span id="shake">C</span>
            <span id="shake">h</span>
            <span id="shake">e</span>
            <span id="shake">c</span>
            <span id="shake" style={{ paddingRight: "14px" }}>
              k
            </span>
            <span id="shake">m</span>
            <span id="shake" style={{ paddingRight: "14px" }}>
              e
            </span>
            <span id="shake">o</span>
            <span id="shake">u</span>
            <span id="shake">t</span>
            <span id="shake">!</span>
          </HStack>
        </Text>
        <Text
          fontSize={["0.8rem", "0,8rem", "1rem"]}
          lineHeight={[0.7, 0.7, ""]}
          color={tertiary}
          fontFamily={"Brush Script MT, Brush Script Std, cursive"}
        >
          {"<h2>"}
        </Text>
        <Text
          fontSize={"24rem"}
          fontWeight={"extrabold"}
          color={"#929292"}
          position={"absolute"}
          zIndex={-2}
          top={"45%"}
          right={["-170%", "-100%", "-90%"]}
          letterSpacing={"-30px"}
          opacity={"20%"}
        >
          TOOLS
        </Text>

        <Text
          fontSize={["0.8rem", "0,8rem", "1rem"]}
          color={tertiary}
          fontFamily={"Brush Script MT, Brush Script Std, cursive"}
          lineHeight={[0.7, 0.7, ""]}
        >
          {"<p>"}
        </Text>
        <Text
          maxW={"500px"}
          color={primary}
          ml={["15px", "15px", marginLeft]}
          fontSize={["16px", "16px", "19px"]}
        >
          I'm a sessioned frontend developer who have been passionate about the
          web and building user-friendly product from the day I found out about
          it using the latest development principles and techniques. <br />
          <br />
          For over a year now, I've had the opportunity to learn from and work
          with other really cool developers which has led me horn my skill and
          has kept pushing me to get to the peak of my career.
          <br />
          <br />
          I currently work as a frontend developer with Zealight innovation lab
          in Lagos, Nigeria. where i work in close collaboration with both the
          frontend team mates and other teams like the product design team,
          backend team and marketing team to achieve user friendly products.
          <br />
          Want to know more about me and how I can help you?{" "}
          <Text as="span" color={secondary} cursor={"pointer"}>
            {" "}
            <a href="mailto:austin7443@gmail.com"> Say hi!</a>
          </Text>{" "}
        </Text>
        <Text
          fontSize={["0.8rem", "0,8rem", "1rem"]}
          color={tertiary}
          fontFamily={"Brush Script MT, Brush Script Std, cursive"}
        >
          {"</p>"}
        </Text>
      </Box>
      <Image
        id="dp"
        src={profile}
        alt="profile image"
        maxW={"400px"}
        className="reveal"
        p={["50px", "0px", ""]}
        loading="lazy"
      />
    </Flex>
  );
};
