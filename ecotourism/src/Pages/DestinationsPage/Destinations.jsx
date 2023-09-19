import { Box, Container, Heading } from "@chakra-ui/react";
import "./Destinations.css";
import ReadMore from "./ReadMore";
import { IndianDestinations } from "./IndianDestinations";
import { IndianText, InternationalText } from "./DestinationsText";
import BigCrousel from "./BigCrousel";

import SearchBar from "./SearchBar";
import InternationalDestinations from "./InternationalDestinations";

const Destinations = () => {

  return (
    <>
      <Container maxW="7xl" content="center" className="Destinations">
        <SearchBar />
        <BigCrousel />

        <Box marginTop="10">
          <Heading>Trending Indian Destinations</Heading>
          <ReadMore text={IndianText} maxChars={300} />
          <IndianDestinations />
        </Box>

        <Box marginTop="10">
          <Heading>Trending International Destinations</Heading>
          <ReadMore text={InternationalText} maxChars={300} />
          <InternationalDestinations />
        </Box>

        <Box marginTop="10">
          <Heading>EcoTourism Specials</Heading>

          <IndianDestinations />
        </Box>
      </Container>
    </>
  );
};
export default Destinations