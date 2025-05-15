import {
  Box,
  Button,
  Flex,
  HStack,
  Stack,
  Switch,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { MdClear, MdMenu } from "react-icons/md";
import { useEffect, useState } from "react";
// import "../App.css";
import { FaSoundcloud } from "react-icons/fa";

function Nav() {
  const [showMenu, setShowMenu] = useState(null);
  const menuOpen = useBreakpointValue([false, false, true, true]);

  useEffect(() => {
    setShowMenu(menuOpen);
  }, [menuOpen]);

  return (
    <Flex
      bg={"#000"}
      w={"100%"}
      position={"fixed"}
      zIndex={20}
      direction={["column", "column", "row", "row"]}
      align={"center"}
      justifyContent={["space-between"]}
      p={["40px 0px", "40px 20px", "40px 20px", "15px 40px"]}
      fontFamily={"Trenda-regular"}
    >
      <Flex w={["100%", "100%", "10%", "20%"]} align={["flex-start"]}>
        <a href="/">
          <HStack fontWeight={"semibold"} className="logo">
            <FaSoundcloud size={["2.5rem"]} color={"#2A9D8F"} />
            <Text color={"#FFFFFF"} fontSize={["1rem", "1rem", "1.2rem"]}>
              Sound
            </Text>
            <Box
              color={"#2A9D8F"}
              fontSize={"1.5rem"}
              cursor={"pointer"}
              pb={"5px"}
            >
              <Switch
                // onChange={playAudio}
                // isChecked={toggle}
                colorScheme="teal"
                aria-label="Sound switch"
              />
              {/* <label class="switch">
              <input type="checkbox" checked={toggle} onChange={playAudio} />
              <span class="slider round"></span>
</label> */}
            </Box>
          </HStack>
        </a>
      </Flex>
      <Box>
        <Stack
          w={"100%"}
          fontWeight={"bold"}
          fontSize="1.15em"
          direction={["column", "column", "row", "row"]}
          alignItems="center"
          justifyContent={"space-between"}
          p={[null, null, "10px 10px", "20px 80px"]}
          fontFamily={"Trenda-regular"}
          display={showMenu ? "flex" : "none"}
          color={"#808080"}
        >
          <Text pr={["0px", "0px", "40px"]}>
            <a href="/" className="hova">
              Home
            </a>
          </Text>
          <Text pr={["0px", "0px", "40px"]}>
            <a href="/#about" className="hova">
              About
            </a>
          </Text>
          <Text pr={["0px", "0px", "40px"]}>
            <a href="/projects" className="hova">
              Projects
            </a>
          </Text>
          <Text pr={["0px", "0px", "40px"]}>
            <a href="/#contact" className="hova">
              Contact
            </a>
          </Text>
          <a href="https://austin-cv.netlify.app/">
            <Button
              // _hover={{ background: "#2A9D8F" }}
              fontSize={".9em"}
              bg={"transparent"}
              border={"2px solid #2A9D8F"}
              borderRadius={"none"}
              color="#2A9D8F"
              p="10px 30px"
              display={["block", "block", "none", "none"]}
            >
              Resume
            </Button>
          </a>
        </Stack>
      </Box>
      <Box>
        <Stack direction={"row"} alignItems="center">
          <a
            href="Austin's Resume.pdf"
            // download="Austin's Resume.pdf"
            rel="noreferrer"
            target="_blank"
          >
            <Button
              id="button"
              fontSize={".9em"}
              bg={"transparent"}
              border={"2px solid #2A9D8F"}
              borderRadius={"none"}
              color="#2A9D8F"
              p="10px 30px"
              display={["none", "none", "block", "block"]}
            >
              Resume
            </Button>
          </a>
        </Stack>
      </Box>
      <Box
        position={"absolute"}
        right={"20px"}
        top={"20px"}
        display={["block", "block", "none", "none"]}
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? (
          <MdClear size="1.8rem" color="#2A9D8F" />
        ) : (
          <MdMenu size="2.5rem" color="#2A9D8F" />
        )}
      </Box>
    </Flex>
  );
}

export default Nav;
