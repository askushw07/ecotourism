import "./pacakages.css";
import {
  Box,
  Breadcrumb,
  Button,
  Container,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "./Breadcrums";
import { ChevronDownIcon } from "@chakra-ui/icons";
import PackageCard from "./PackageCard";
const Pacakges = () => {
  const { name } = useParams();

  const [sliderValue, setSliderValue] = useState(50);

  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "sm",
  };
  return (
    <Box className="main">
      <Breadcrumbs />
      <Box border={"1px solid black"} margin={"30px"}>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Price
          </MenuButton>
          <MenuList>
            <MenuItem width={"300px"}>
              <Slider
                aria-label="slider-ex-6"
                onChange={(val) => setSliderValue(val)}
              >
                <SliderMark value={0} {...labelStyles}>
                  10000
                </SliderMark>
                <SliderMark value={50} {...labelStyles}>
                  50000
                </SliderMark>

                <SliderMark value={100} {...labelStyles}>
                  100000
                </SliderMark>
                <SliderMark
                  value={sliderValue}
                  textAlign="center"
                  bg="blue.500"
                  color="white"
                  mt="-10"
                  ml="-5"
                  w="16"
                >
                  {sliderValue * 10000}
                </SliderMark>
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Sort
          </MenuButton>
          <MenuList>
            <MenuItem>Price Low to High</MenuItem>
            <MenuItem>Price High to Low</MenuItem>
            <MenuItem>Duration Low to High</MenuItem>
            <MenuItem>Duraion High to low</MenuItem>
          </MenuList>
        </Menu>
      </Box>

      <Box>
        <PackageCard />
        <PackageCard />
        <PackageCard />
      </Box>
    </Box>
  );
};

export default Pacakges;
