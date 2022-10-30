import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Menu,
  MenuButton,
  useDisclosure,
  useBreakpointValue,
  HStack,
  Switch,
} from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";
import { MdClear, MdMenu } from "react-icons/md";
import { FaSoundcloud } from "react-icons/fa";
import audio from "../components/audio.mp3";

const media = new Audio(audio);
media.controls = true;
media.loop = true;

const NavBar2 = () => {
  const links = [
    { name: "Home", route: "/" },
    { name: "About", route: "#about" },
    { name: "Projects", route: "#projects" },
    { name: "Contact Us", route: "#contact" },
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const menuOpen = useBreakpointValue([false, false, false, true]);
  const [showMenu, setShowMenu] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setShowMenu(menuOpen);
  }, [menuOpen]);
  const fontSizes = ["1rem", "1rem", "1.2rem", null];

  const playAudio = () => {
    setToggle(!toggle);
    if (media.paused) {
      media.play();
    } else {
      media.pause();
    }
  };

  return (
    <Flex
      id="top"
      px={[8, 4, 10, 14]}
      alignItems={[null, "space-between", "space-between", "center"]}
      justifyContent={["space-between"]}
      direction={["column", "column", "column", "row"]}
      pt={4}
      bg={["#000"]}
    >
      <Flex alignItems="center" flexGrow={1} justifyContent="space-between">
        <HStack fontWeight={"semibold"} className="logo" alignItems={"center"}>
          <FaSoundcloud size={["2.5rem"]} color={"#2A9D8F"} />
          <Text color={"#FFFFFF"} fontSize={["1rem", "1rem", "1.2rem"]}>
            Sound
          </Text>

          <Box color={"#2A9D8F"} fontSize={"1.5rem"} cursor={"pointer"}>
            <Switch
              onChange={playAudio}
              isChecked={toggle}
              colorScheme="teal"
              aria-label="Sound switch"
            />
          </Box>
        </HStack>
        <Box
          display={["block", "block", "block", "none"]}
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? (
            <MdClear size="1.5rem" color="#2A9D8F" />
          ) : (
            <MdMenu size="1.5rem" color="#2A9D8F" />
          )}
        </Box>
      </Flex>

      <Flex
        color="#2A9D8F"
        ml={[null, null, 0, "auto"]}
        mt={[null, null, 3, 0]}
        fontFamily="trendaregular"
        justifyContent="space-around"
        fontSize={[null, "1rem", null, null]}
        direction={["column", "column", "row", "row"]}
        alignItems={["center", "center", null, null]}
        sx={{
          "& .chakra-button:not(.resume)": {
            "&, &:hover, &:focus, &:active": {
              background: "none",
              boxShadow: "none",
            },
          },
        }}
        //eslint-disable-next-line
        display={showMenu ? "flex" : "none"}
      >
        {links.map((link, index) => {
          return link.route !== "" ? (
            <Button
              key={index}
              sx={{
                "& .activeLink::after": {
                  content: '""',
                  position: "absolute",
                  width: "50%",
                  height: "1rem",
                  clipPath: "polygon(13% 78%, 91% 78%, 100% 100%, 0% 100%)",
                  transform: "translate(-50%, -50%)",
                  bottom: "-35%",
                  left: "50%",
                  background: "#F98B88",

                  "@media screen and (max-width: 48em )": {
                    bottom: "-20%",
                  },
                },
              }}
              fontSize={fontSizes}
            >
              <a href={`${link.route}`} className="pad">
                {link.name}
              </a>
            </Button>
          ) : (
            <Menu key={index} isOpen={isOpen} onClose={onClose}>
              <MenuButton
                as={Button}
                onClick={onOpen}
                onMouseLeave={onClose}
                onMouseOver={onOpen}
                rightIcon={<FiChevronDown />}
                fontSize={fontSizes}
              >
                {link.name}
              </MenuButton>
            </Menu>
          );
        })}
        <Button
          className="resume"
          as="a"
          href="https://austin-cv.netlify.app/"
          id="button"
          fontSize={["1.4rem", "1.4rem", "1.4rem", "1.2rem"]}
          fontWeight={["semibold", "semibold", "light"]}
          color={["#2A9D8F", "#2A9D8F", "#2A9D8F", "#2A9D8F"]}
          border={["2px solid #2A9D8F"]}
          borderRadius={"none"}
          bg={["transparent"]}
          size={"lg"}
          p={["5px 10px", "10px 20px"]}
          _hover={{ bg: "#9A82B880" }}
          _focus={{ border: "none" }}
          // ml={[null, null, 3, 3]}
          mt={["1rem", "1rem", 0, 0]}
        >
          <Box pos="relative" top="-1px">
            Resume
          </Box>
        </Button>
      </Flex>
    </Flex>
  );
};

export default NavBar2;
