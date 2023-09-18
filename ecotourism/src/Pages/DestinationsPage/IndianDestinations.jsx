import React from "react";
import { Flex } from "@chakra-ui/react";
import { DestinationBox } from "./DestinationBox";
import { wrap } from "framer-motion";

import one from "../../Assets/Indian Destinations/Andaman1.jpg";
import two from "../../Assets/Indian Destinations/Gujarat-trn-img.jpg";
import three from "../../Assets/Indian Destinations/Himachal1.jpg";
import four from "../../Assets/Indian Destinations/Kerala-trn-img.jpg";
import five from "../../Assets/Indian Destinations/Kashmir.jpg";

export const IndianDestinations = () => {
  const IndianDestinations = [
    {
      name: "Andaman",
      img: one, // Corrected image variable name
      price: 10600,
    },
    {
      name: "Gujrat",
      img: two, // Corrected image variable name
      price: 30800,
    },
    {
      name: "Himachal",
      img: three, // Corrected image variable name
      price: 25200,
    },
    {
      name: "Krerela",
      img: four, // Corrected image variable name
      price: 45100,
    },
    {
      name: "Kashmir",
      img: five, // Corrected image variable name
      price: 60400,
    },
  ];

  return (
    <Flex color="white" justifyContent={"space-around"} m="20px" wrap={"wrap"}>
      {IndianDestinations.map((destination, index) => (
        <DestinationBox key={index} {...destination} />
      ))}
    </Flex>
  );
};
