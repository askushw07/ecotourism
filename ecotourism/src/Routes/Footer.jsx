import { Box, Flex, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import {
  BsArrowUpCircleFill,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  FaRegArrowAltCircleUp,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  return (
    <Box w="100%" pt="3rem" pb="1rem" bgColor="gray.700" color="whiteAlpha.900" mt="8rem">
      <Grid templateColumns="repeat(4, 1fr)" gap={8} w="80%" m="auto auto">
        <Box margin="auto auto">
          <Heading as="h2">ecoTourism</Heading>
        </Box>
        <Flex flexDirection="column" alignItems="left" rowGap={2}>
          <Link to="/">Home</Link>
          <Link>Destinations</Link>
          <Link>Packages</Link>
          <Link to="/signin">Login</Link>
        </Flex>
        <Flex flexDirection="column" alignItems="left" rowGap={2}>
          <Flex alignItems="center" gap={2}>
            <BsFacebook />
            <a href="#">FaceBook</a>
          </Flex>
          <Flex alignItems="center" gap={2}>
            <BsInstagram />
            <a href="#">Instagram</a>
          </Flex>
          <Flex alignItems="center" gap={2}>
            <BsTwitter />
            <a href="#">Twitter</a>
          </Flex>
          <Flex alignItems="center" gap={2}>
            <BsLinkedin />
            <a href="#">LinkedIn</a>
          </Flex>
        </Flex>
        {/* <button><FaRegArrowAltCircleUp /></button> */}
        <Box height="100%" m="auto auto">
          <BsArrowUpCircleFill />
        </Box>
      </Grid>
      <Box mt="3rem" fontSize="sm">
        {" "}
        &copy; {date.getFullYear()} <strong>ecoTourism</strong> |{"   "}
        <i>All Rights Riserved</i>
      </Box>
    </Box>
  );
};

export default Footer;
