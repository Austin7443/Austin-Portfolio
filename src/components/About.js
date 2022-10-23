import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
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
        <Text fontStyle="italic" fontSize={"1rem"} color={tertiary}>
          {"<h2>"}
        </Text>
        <Text
          lineHeight={0.8}
          ml={[0, 0, marginLeft]}
          fontSize={["3rem", "3rem", "6rem"]}
          fontWeight={"bold"}
          color={secondary || "#FFFFFF"}
          textAlign={["center", "center", "start"]}
        >
          About me
        </Text>
        <Text fontStyle="italic" fontSize={"1rem"} color={tertiary}>
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

        <Text fontStyle="italic" fontSize={"1rem"} color={tertiary}>
          {"<p>"}
        </Text>
        <Text
          maxW={"500px"}
          fontSize={"1.2rem"}
          color={primary}
          ml={marginLeft}
        >
          I'm Austin Onueze and I'm a Frontend web developer from Lagos,
          Nigeria. I have had various training and experience with working with
          other developers which has very much motivated me to keep learning
          and pushing to get to the peak of my career as a web developer.
          <br />
          I currently work as a frontend developer with Zilight innovation labs, where i work
          in close collaboration with both team mates and members of other department like the product 
          design team, backend team and marketing team to achieve user friendly products.<br />
          I specialize in standards-based HTML, CSS, Javascript and React; with various packages and frameworks 
          to develop products to be search engine
          friendly, using the latest development principles and techniques. To
          find out more about me and what i can do, check out my contact.
        </Text>
        <Text fontStyle="italic" fontSize={"1rem"} color={tertiary}>
          {"</p>"}
        </Text>
      </Box>
      <Image
      id="dp"
        src={profile}
        alt="profile image"
        maxW={"400px"}
        //zIndex={2}
        className="reveal"
        p={["50px", "0px", ""]}
      />
    </Flex>
  );
};
