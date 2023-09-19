import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
// import { Box, Button, Flex, Image, useToast } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Assets/logo.png";

// const Navbar = () => {
//   const { logout } = useContext(AuthContext);
//   const toast = useToast();
//   const navigate = useNavigate();
//   const handleLogout = () => {
//     toast({
//       title: "Logged Out Successfully.",
//       status: "success",
//       duration: 2000,
//       isClosable: true,
//     });
//     logout();
//     navigate("/signin");
//   };
//   return (
//     <Box bgColor="#7DBBA9" w="100%" p="0.5rem 1rem" color="white">
//       <Flex alignItems="center" w="90%" justifyContent="space-between" >
//         <Flex w="30%" >
//           {/* <Link to="/"><Heading as="h2" >ecoTourism</Heading></Link> */}
//           <Link to="/"><Image src={logo} height="4rem" /></Link>
//         </Flex>
//         <Flex justifyContent="space-around" w="45%" ml="0">
//           <Link  to="/" className="grow">Home</Link>
//           <Link to="/destination" className="grow">Destinations</Link>
//           <Link className="grow">Activities</Link>
//           <Link className="grow">Packages</Link>
//           <Link className="grow">About</Link>
//           <Link className="grow" to="/contact">Contact Us</Link>
//         </Flex>
//         <Flex w="10%" >
//           <Button className="grow" bgColor="#DEB74C" m={0} p="0.8rem 1.5rem" borderRadius="3rem"><Link to="/signin">Login</Link></Button>
//         </Flex>
//       </Flex>
//     </Box>
//   );
// };

// export default Navbar;

import {
  Box,
  Flex,
  HStack,
  Image,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaUserCircle } from "react-icons/fa";

const Links = [
  { name: "Home", path: "/" },
  { name: "Destinations", path: "/destination" },
  {name: "Activities",path:"/"},
  {name:"Packages", path:"/"},
  {name:"About", path:"/"},
  {name:"Contact",path:"/contact"}
];

const NavLink = ({ children }) => {
  return (
    <Box
      className="grow"
      color="whiteAlpha.900"
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
    >
      <Link to={children.path}>{children.name}</Link>
    </Box>
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { logout, auth } = useContext(AuthContext);
  // console.log(auth)
    const toast = useToast();
    const navigate = useNavigate();
    const handleLogout = () => {
      toast({
        title: "Logged Out Successfully.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      logout();
      navigate("/");
    };
  return (
    <>
      <Box
        bg="#7DBBA9" //{useColorModeValue('gray.100', 'gray.900')}
        p={"0.7rem 2rem"}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} justifyContent="space-between" alignItems={"center"}>
            <Box>
              <Link to="/">
                <Image src={logo} height="4rem" />
              </Link>
            </Box>
            <HStack
              as={"nav"}
              spacing={7}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              {!auth ? <Link to="/signin"><MenuButton
                className="grow"
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                // minW={0}
                // _hover={{bg:"red"}}
              >
                <FaUserCircle color="#fff" size={"1.5rem"}/>
                {/* <Avatar
                  size={'sm'}
                /> */}
              </MenuButton></Link>:<h3>User</h3>}
              {auth&&<MenuList>
                <MenuItem className="grow">Profile</MenuItem>
                <MenuItem className="grow" onClick={()=>handleLogout()}>Logout</MenuItem>
                {/* <MenuDivider />
                <MenuItem>Link 3</MenuItem> */}
              </MenuList>}
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
