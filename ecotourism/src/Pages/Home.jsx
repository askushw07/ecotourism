import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import bgImage from "../Assets/homebg_1.jpeg";
import { Link } from "react-router-dom";
import destination from '../Assets/des01.jpeg'
import activity from '../Assets/rafting.jpeg'

const Home = () => {
  return (
    <>
      <Box w="100%">
        <Image src={bgImage} alt="Dan Abramov" w="100%" />
      </Box>
      <Box width="85%" m="5rem auto">
        <Flex justifyContent="space-between" mb='1rem'>
          <Heading as="h2">Popular Destination</Heading>
          <Button><Link>All Destinations</Link></Button>
        </Flex>
        <Flex gap={2}>
          <Link><Flex flexDirection="column"><Image src={destination} /><p>Shimla</p></Flex></Link>
          <Link><Flex flexDirection="column"><Image src={destination} /><p>Shimla</p></Flex></Link>
          <Link><Flex flexDirection="column"><Image src={destination} /><p>Shimla</p></Flex></Link>
          <Link><Flex flexDirection="column"><Image src={destination} /><p>Shimla</p></Flex></Link>
        </Flex>
      </Box>
      <Box width="85%" m="5rem auto">
        <Flex justifyContent="space-between" mb='1rem'>
          <Heading as="h2">Popular Activities</Heading>
          <Button><Link>All Activities</Link></Button>
        </Flex>
        <Flex gap={2}>
          <Link><Flex flexDirection="column"><Image src={activity} /><p>Shimla</p></Flex></Link>
          <Link><Flex flexDirection="column"><Image src={activity} /><p>Shimla</p></Flex></Link>
          <Link><Flex flexDirection="column"><Image src={activity} /><p>Shimla</p></Flex></Link>
          <Link><Flex flexDirection="column"><Image src={activity} /><p>Shimla</p></Flex></Link>
        </Flex>
      </Box>
    </>
  );
};

export default Home;
