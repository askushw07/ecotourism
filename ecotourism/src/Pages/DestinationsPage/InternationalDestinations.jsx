import React from 'react'

import { Flex, Spacer, Square, Center, Box, Text } from "@chakra-ui/react";
import { DestinationBox } from "./DestinationBox";
import { wrap } from "framer-motion";

import one from "../../Assets/International/Dubai.jpg";
import two from "../../Assets/International/Japan-Banner.jpg";
import three from "../../Assets/International/South-Africa-Trnd.jpg"
import four from "../../Assets/International/Thailand.jpg"
import five from "../../Assets/International/Vietnam.jpg"
const InternationalDestinations = () => {
    const InternationalDestination=[
        {
          name:"Dubai",
          img:one,
          price:46600
        },
        {
          name:"Japan",
          img:two,
          price:30800
        },
        {
          name:"Africa",
          img:three,
          price:25200
        },
        {
          name:"Thailand",
          img:four,
          price:45100
        },{
          name:"Vietnam",
          img:five,
          price:60400
        }
      ]
  return (
    <Flex color="white" justifyContent={"space-around"} m="20px" wrap={"wrap"}>

    {InternationalDestination.map((e)=> <DestinationBox {...e}/>)}
     
     
    </Flex> 
  )
}

export default InternationalDestinations