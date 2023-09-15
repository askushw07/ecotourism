import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import { Box, Button, Flex, Heading, useToast } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

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
    return <Box bgColor="teal.300" w="100%" p="1rem" color="white">
        <Flex alignItems="center" justifyContent="space-between" w="85%" m="auto">
            <Flex alignItems="left" w="35%">
                {/* <Button onClick={handleLogout}>Logout</Button> */}
                <Link to="/"><Heading as="h2" >ecoTourism</Heading></Link>
            </Flex>
            <Flex alignItems="center" justifyContent="space-between" w="50%">
                <Link to="/">Home</Link>
                <Link>Destinations</Link>
                <Link>Packages</Link>
                <Link to="/signin">Login</Link>
                
            </Flex>
        </Flex>
  </Box>;
};

export default Navbar;
