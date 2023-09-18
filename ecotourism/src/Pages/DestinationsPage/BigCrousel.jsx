import React from 'react';
import { Box } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./BigCrousel.css"
import one from "../../Assets/BIgcrouselImages/1st.jpg";
import two from "../../Assets/BIgcrouselImages/2nd.jpg";
import three from "../../Assets/BIgcrouselImages/3rd.jpg";
import four from "../../Assets/BIgcrouselImages/4rth.jpg";
import five from "../../Assets/BIgcrouselImages/6th.jpg";

const imageArray = [one, two, three, four, five]; // Define an array of image imports

const BigCrousel = () => {
  return (
    <Box>
      <Carousel className="main-Slide" infiniteLoop={true} autoPlay={true} interval={2000}>
        {imageArray.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Image ${index + 1}`} />
           
          </div>
        ))}
      </Carousel>
    </Box>
  );
};

export default BigCrousel;
