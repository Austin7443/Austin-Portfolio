// import React, { useState } from "react";
// import { Flex, Text, HStack, Button, Box, Switch } from "@chakra-ui/react";
// import audio from "../components/audio.mp3";
// import { FaSoundcloud } from "react-icons/fa";
// import { GiHamburgerMenu } from "react-icons/gi"
// import { MdClose } from "react-icons/md";

// const media = new Audio(audio);
// media.controls = true;
// //media.autoplay = true

// console.log(media)

// export const Navbar = () => {
//   const [toggle, setToggle] = useState(false);
//   const [mobile, setMobile] = useState(false);

//   // const onload = () => {
//   //   media.play();
//   // };

//   // window.addEventListener("load", function () {
//   //   onload();
//   // });

//   const playAudio = () => {
//     setToggle(!toggle);
//     // console.log(media, "mediaaaa");
//     if (media.paused) {
//       media.play();
//     } else {
//       media.pause();
//     }
//   };

//   return (
//     <>
//       <Text fontStyle="italic" fontSize={"1rem"} color={"#878787"} bg={"#000"}>
//         {"<html>"}
//       </Text>
//       <Flex
//         justify={"space-between"}
//         align={"center"}
//         fontWeight={"semibold"}
//         className="ani"
//         bg={"#000"}
//         p={["10px 10px", "20px 30px", "0px 50px"]}
//       >
//         <HStack fontWeight={"semibold"}>
//           <FaSoundcloud size={["2.5rem"]} color={"#2A9D8F"} />
//           <Text color={"#FFFFFF"} fontSize={["1rem", "1rem", "1.2rem"]}>
//             Sound
//           </Text>

//           <Box color={"#2A9D8F"} fontSize={"1.5rem"} cursor={"pointer"}>
//             <Switch onChange={playAudio} isChecked={toggle} />
//           </Box>
//         </HStack>
//         {/*<Text
//         fontSize={"1.4rem"}
//         color={"gray"}
//         border={"2px solid #2A9D8F"}
//         p={"10px"}
//         className="ani"
//       >
//         A.O
//   </Text>*/}

//         <Flex
//           className={mobile ? "nav-mobile" : "nav-links"}
//           onClick={() => setMobile(false)}
//          // spacing={10}
//           color={"gray"}
//           fontSize={"1.4rem"}
//           cursor={"pointer"}
//           align={"center"}
//           justify={"flex-end"}
//         >
//           <Box className="pad" mr={"15px"}>
//             <a href="/">Home</a>
//           </Box>
//           <Box className="pad" mr={"15px"}>
//             <a href="#about">About</a>
//           </Box>
//           <Box className="pad" mr={"15px"}>
//             <a href="#projects">Projects</a>
//           </Box>
//           <Box className="pad" mr={"15px"}>
//             <a href="#contact">Contact</a>
//           </Box>

//           <Button
//             id="button"
//             fontSize={"1.2rem"}
//             fontWeight={"light"}
//             color={"#2A9D8F"}
//             border={"2px solid #2A9D8F"}
//             borderRadius={"none"}
//             bg={"transparent"}
//             size={"lg"}
//             className="ani"
//             cursor={"pointer"}
//             onClick={() =>
//               (window.location.href =
//                 "/file:///C:/Users/hp/Downloads/Austin's%20CV.pdf")
//             }
//           >
//             Resume
//           </Button>
//         </Flex>
//         <Button id="mobile-menu-icon" onClick={() => setMobile(!mobile)}>
//           {mobile ? <MdClose /> : <GiHamburgerMenu />}
//         </Button>
//       </Flex>
//     </>
//   );
// };
