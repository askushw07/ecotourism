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
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "./Breadcrums";
import { ChevronDownIcon } from "@chakra-ui/icons";
import PackageCard from "./PackageCard";
import axios from "axios";
const Pacakges = () => {
  const { name } = useParams();
  console.log(name);
  const [sliderValue, setSliderValue] = useState(50);
  const [data, setData] = useState([]);
  const [daysSort, setDaysSort] = useState(false);
  const [priceSort, setPriceSort] = useState(false);
  const [daysOrder, setDaysOrder] = useState("desc");
  const [priceOrder, setPriceOrder] = useState("asc");

  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "sm",
  };

  const Url = (url) => {
    if (daysSort) {
      return `${url}&_sort=days&_order=${daysOrder},${priceOrder}`;
    } else if (priceSort) {
      return `${url}&_sort=price&_order=${priceOrder}`;
    }
    return url;
  };

  const getData = async () => {
    const URL = Url(
      `https://ecotourism-msze.onrender.com/newDataEcotourism?destination=${name}`
    );
    // console.log(URL)
    let res = await axios.get(URL);
    //console.log(res.data);
    setData(res.data);
  };

  const handleChange = (e) => {
    let v = e.target.value;
    //console.log(v)
    if (v == "price LH") {
      setPriceSort(true);
      setPriceOrder("asc");
      //console.log("done")
    } else if (v == "price HL") {
      setPriceSort(true);
      setPriceOrder("desc");
    } else if (v == "duration LH") {
      setDaysSort(true);
      setDaysOrder("asc");
    } else if (v == "duration HL") {
      setDaysSort(true);
      setDaysOrder("desc");
    }
  };

  useEffect(() => {
    getData();
  }, [daysOrder, daysSort, priceSort, priceOrder]);
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
            <MenuItem value={"price LH"} onClick={(e) => handleChange(e)}>
              Price Low to High
            </MenuItem>
            <MenuItem value={"price HL"} onClick={(e) => handleChange(e)}>
              Price High to Low
            </MenuItem>
            <MenuItem value={"duration LH"} onClick={(e) => handleChange(e)}>
              Duration Low to High
            </MenuItem>
            <MenuItem value={"duration HL"} onClick={(e) => handleChange(e)}>
              Duraion High to low
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>

      <Box>
        {data? (
          data.map((e) => <PackageCard {...e} />)
        ) : (
          <h1>"No Tours Available"</h1>
        )}
      </Box>
    </Box>
  );
};

export default Pacakges;
