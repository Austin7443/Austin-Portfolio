/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import profile from "./images/pic.png";

export const About = ({ color, marginLeft }) => {
  const { primary, secondary, tertiary } = color;

  return (
    <Flex
      align={"center"}
      mt={"100px"}
      w={"100%"}
      justify={"space-between"}
      id="about"
      direction={["column", "column", "row"]}
    >
      <Box w={["100%", "100%", "50%"]} className="reveal">
        <Text
          fontSize={["0.8rem", "0,8rem", "1rem"]}
          color={tertiary}
          fontFamily={"Brush Script MT, Brush Script Std, cursive"}
        >
          {"<h2>"}
        </Text>
        <Box
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
            <span id="shake">A</span>
            <span id="shake">b</span>
            <span id="shake">o</span>
            <span id="shake">u</span>
            <span id="shake" style={{ paddingRight: "15px" }}>
              t
            </span>
            <span id="shake">M</span>
            <span id="shake">e</span>
          </HStack>
        </Box>
        <Text
          fontSize={["0.8rem", "0,8rem", "1rem"]}
          lineHeight={[0.7, 0.7, 0]}
          color={tertiary}
          fontFamily={"Brush Script MT, Brush Script Std, cursive"}
        >
          {"<h2>"}
        </Text>
        <Text
          fontSize={["10rem", "10rem", "13rem", "20rem", "24rem"]}
          fontWeight={"extrabold"}
          color={"#929292"}
          position={"absolute"}
          zIndex={-2}
          top={"45%"}
          letterSpacing={"-30px"}
          opacity={"20%"}
          display={["none", "none", "block"]}
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
          color={primary}
          ml={["15px", "15px", marginLeft]}
          fontSize={["16px", "16px", "19px"]}
        >
          I'm a seasoned frontend developer who have been passionate about the
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
      <Box w={["100%", "100%", "50%"]} align="center">
        <Image
          // id="dp"
          src={profile}
          alt="profile image"
          w={["350px", "400px", "400px", "400px"]}
          h={["350px", "400px", "400px", "400px"]}
          borderRadius={"100%"}
          className="reveal"
          // opacity={["90%"]}
          p={["20px", "0px", "0px"]}
          loading="lazy"
        />
      </Box>
    </Flex>
  );
};
