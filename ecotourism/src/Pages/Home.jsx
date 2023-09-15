import { Box, Image } from "@chakra-ui/react";
import bgImage from "../Assets/homebg_1.jpeg";

const Home = () => {
  return (
    <>
      <Box w="100%">
        <Image src={bgImage} alt="Dan Abramov" w="100%" />
      </Box>
    </>
  );
};

export default Home;
