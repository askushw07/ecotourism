import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import { Box, Button, Flex, Image, useToast } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Assets/logo.png";

const Navbar = () => {
  const { logout } = useContext(AuthContext);
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
    navigate("/signin");
  };
  return (
    <Box bgColor="#7DBBA9" w="100%" p="0.5rem 1rem" color="white">
      <Flex alignItems="center" w="90%" justifyContent="space-between" >
        <Flex w="30%" >
          {/* <Link to="/"><Heading as="h2" >ecoTourism</Heading></Link> */}
          <Link to="/"><Image src={logo} height="4rem" /></Link>
        </Flex>
        <Flex justifyContent="space-around" w="45%" ml="0">
          <Link  to="/" className="grow">Home</Link>
          <Link className="grow">Destinations</Link>
          <Link className="grow">Activities</Link>
          <Link className="grow">Packages</Link>
          <Link className="grow">About</Link>
        </Flex>
        <Flex w="10%" >
          <Button className="grow" bgColor="#DEB74C" m={0} p="0.8rem 1.5rem" borderRadius="3rem"><Link to="/signin">Login</Link></Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
