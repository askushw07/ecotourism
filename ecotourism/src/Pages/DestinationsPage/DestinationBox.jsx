import { Center, Text, Box, Heading, Flex, Spacer } from "@chakra-ui/react";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";

export const DestinationBox = ({ img, name, price }) => {
  const[path,setpath]=useState();
  const handleClick = () => {
    console.log(name)
    setpath(name)
  };
  return (<>
  {path?<Navigate to={`/${name}`}   />:
    <Box
      width="200px"
      height="300px"
      borderRadius="10px"
      backgroundImage={img}
      backgroundSize="cover" // You can adjust this property based on your needs
      backgroundRepeat="no-repeat"
      onClick={handleClick}
    >
    
      <Flex direction="column">
        <Heading as="h2" size="xl" margin="10px">
          {name}
        </Heading>
        <Text margin={"8px"} marginTop="170px" fontSize={"xl"}>
          Starting Price <br /> ₹{price}/-
        </Text>
      </Flex>
    </Box>}
    </>
  );
};
