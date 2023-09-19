import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  Square,
  Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import {useNavigate} from 'react-router-dom'
import img from "../../Assets/Indian Destinations/Andaman1.jpg";
import { SunIcon } from "@chakra-ui/icons";
import "../pacakges/pacakages.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCameraRetro,
  faPlaneDeparture,
  faBowlFood,
} from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../Context/AuthContextProvider";
import { PrivateRoute } from "../../Routes/PrivateRoute";
import Contact from "../Contact";
//import { MdFlightTakeoff } from 'react-icons/fa';
const PackageCard = () => {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleClick = (val) => {
    if (auth) navigate(val)
    else navigate("/signin")
  }
  return (
    
    <Container
      maxW="7xl"
      content="center"
      borderRadius={"10px"}
      className="PacakgeCard"
    >
      <Flex
        color="white"
        height={{ base: "650px", md: "200px", lg: "200px" }}
        flexDirection={{ base: "column", md: "row", lg: "row" }}
        justifyContent={"center"}
      >
        <Center
          w="300px"
          height={"200px"}
          margin="0px auto"
          display={"flex"}
          justifyItems={"center"}
        >
          <Image
            src={image}
            width={"100%"}
            height={"100%"}
            display={"flex"}
            objectFit={"cover"}
            borderLeftRadius={"10px"}
          ></Image>
        </Center>

        <Box flex="1" border={"1px solid black"}   white-space={"nowrap"}>
          <Box display={"flex"} justifyContent={"space-between"}  white-space={"nowrap}"}
              overflow={"hidden"} >
            <Text
              size="lg"
              color={"black"}
              padding={"15px"}
              height={"50px"}
             
              text-overflow={"ellipsis"}
            >
              {destination} with xyz Loaded 5days
            </Text>
            <Box padding={"0px 40px "}>
              <Text padding={"10px 0px"} color={"black "}>
                {days} Days {days-1} Nights
              </Text>
            </Box>
          </Box>
          {/* <Divider />
          <SunIcon color={"teal"} boxSize={30} /> */}
          <Divider />
          <Box padding={"5px 15px"} overflow={"auto"}>
            <Text margin={"1rem auto 0.5rem"} color={"black"}>Customised Holidays</Text>

            <Box display={"flex"}  flexDirection={"row"} className="CustomHolidays" width={"400px"} content="fit">
              <Box
                margin={"0px 10px"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
              >
                <Button
                  colorScheme={"teal"}
                  variant={"outline"}
                  padding={"0"}
                  borderRadius={"100%"}
                  margin={"0px auto"} 
                >
                  <SunIcon color={"teal"} boxSize={30} />
                </Button>
                <Text>Higlights</Text>
              </Box>
              <Box
                margin={"0px 10px"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
              >
                <Button
                  colorScheme={"teal"}
                  variant={"outline"}
                  padding={"0"}
                  borderRadius={"100%"}
                  margin={"0px auto"}
                >
                  <FontAwesomeIcon icon={faPlaneDeparture} />
                </Button>
                <Text>Flights</Text>
              </Box>

              <Box
                margin={"0px 10px"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
              >
                <Button
                  colorScheme={"teal"}
                  variant={"outline"}
                  padding={"0"}
                  borderRadius={"100%"}
                  margin={"0px auto"}
                >
                  <FontAwesomeIcon icon={faBed} />
                </Button>
                <Text>Hotels</Text>
              </Box>
              <Box
                margin={"0px 10px"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
              >
                <Button
                  colorScheme={"teal"}
                  variant={"outline"}
                  padding={"0"}
                  borderRadius={"100%"}
                  margin={"0px auto"}
                >
                  <FontAwesomeIcon icon={faCameraRetro} />
                </Button>
                <Text>Sightseeing</Text>
              </Box>
              <Box
                margin={"0px 10px"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
              >
                <Button
                  colorScheme={"teal"}
                  variant={"outline"}
                  padding={"0"}
                  borderRadius={"100%"}
                  margin={"0px auto"}
                >
                  <FontAwesomeIcon icon={faBowlFood} />
                </Button>
                <Text>Meals</Text>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box size="300px" flexDirection={"column"}>
          <Flex padding={"15px 30px"} justifyContent={"space-between"}>
            <Text color={"black"}>Tour Type</Text>
            <Heading as={"h5"} size="sm" color="black">
              Premium
            </Heading>
          </Flex>
          <Container content="center" flex={1} >
            <Heading color={"black"}  display={"flex"} justifyContent={"center"}>₹ {price}</Heading>
            <Text color={"black"} display={"flex"} justifyContent={"center"}>Starting price per adult</Text>
          </Container>
          <Box margin={"10px 0px"} display={"flex"} justifyContent={"space-around"} >
            <Button colorScheme="teal" variant={"outline"} margin={"6px"} onClick={()=>handleClick("contact")}>
              want us to call you?
            </Button>
            <Button colorScheme="teal" margin={"2px"} onClick={()=>handleClick("checkout")}>
              Book Online
            </Button>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default PackageCard;
