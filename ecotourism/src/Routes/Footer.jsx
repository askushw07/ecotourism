import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import logo from '../Assets/logo.png'
import React from "react";
import {
  // BsArrowUpCircleFill,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  // FaRegArrowAltCircleUp,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  return (
    <Box
      w="100%"
      p="3rem 5rem 1rem"
      bgColor= "#7DBBA9"//"gray.700"
      color="whiteAlpha.900"
    >
      <Flex justifyContent="space-between" w="80%" m="auto">
        <Box margin="auto auto auto 0" w="30%">
          {/* <Heading as="h2">ecoTourism</Heading> */}
          <Link to="/"><Image src={logo} height="4rem" /></Link>
        </Box>
        <Flex justifyContent="space-around" w="45%">
          <Flex flexDirection="column" alignItes="left" rowGap={2}>
            <Link className="grow" to="/">Home</Link>
            <Link className="grow">About Company</Link>
            <Link className="grow">Destinations</Link>
            <Link className="grow">Activities</Link>
            <Link className="grow">Packages</Link>
            {/* <Link className="grow" to="/signin">Login</Link> */}
          </Flex>
          <Flex flexDirection="column" alignItems="left" rowGap={2}>
            <Flex alignItems="center" gap={2} className="grow">
              <BsFacebook />
              <a href="#">FaceBook</a>
            </Flex>
            <Flex alignItems="center" gap={2} className="grow">
              <BsInstagram />
              <a href="#">Instagram</a>
            </Flex>
            <Flex alignItems="center" gap={2} className="grow">
              <BsTwitter />
              <a href="#">Twitter</a>
            </Flex>
            <Flex alignItems="center" gap={2} className="grow">
              <BsLinkedin />
              <a href="#">LinkedIn</a>
            </Flex>
          </Flex>
          {/* <button><FaRegArrowAltCircleUp /></button> */}
          {/* <Box height="100%" m="auto auto">
          <BsArrowUpCircleFill />
        </Box> */}
        </Flex>
        <Box>
          <Heading as="h3" fontSize="md">Contact Us</Heading>

        </Box>
      </Flex>
      <Box mt="3rem" fontSize="sm" textAlign="center">
        {" "}
        &copy; {date.getFullYear()} <strong>ecoTourism</strong> |{"   "}
        <i>All Rights Riserved</i>
      </Box>
    </Box>
  );
};

export default Footer;
