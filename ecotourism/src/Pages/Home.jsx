import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import bgImage from "../Assets/homebg_1.jpeg";
import { Link } from "react-router-dom";
import destination from '../Assets/des01.jpeg'
import activity from '../Assets/rafting.jpeg'

const Home = () => {
  return (
    <Box bgColor="teal.50" p="8rem auto">
      <Box w="100%">
        <Image src={bgImage} alt="Dan Abramov" w="100%" />
      </Box>
      <Box width="85%" m="5rem auto">
        <Flex justifyContent="space-between" mb='1rem'>
          <Heading as="h2">Popular Destination</Heading>
          <Button className="grow"><Link>All Destinations</Link></Button>
        </Flex>
        <Flex gap={2}>
          <Link><Flex className="grow" flexDirection="column"><Image src={destination} /><p>Shimla</p></Flex></Link>
          <Link><Flex className="grow" flexDirection="column"><Image src={destination} /><p>Shimla</p></Flex></Link>
          <Link><Flex className="grow" flexDirection="column"><Image src={destination} /><p>Shimla</p></Flex></Link>
          <Link><Flex className="grow" flexDirection="column"><Image src={destination} /><p>Shimla</p></Flex></Link>
        </Flex>
      </Box>
      <Box width="85%" m="0 auto" pb="5rem">
        <Flex justifyContent="space-between" mb='1rem'>
          <Heading as="h2">Popular Activities</Heading>
          <Button className="grow"><Link>All Activities</Link></Button>
        </Flex>
        <Flex gap={2} >
          <Link><Flex className="grow" flexDirection="column"><Image src={activity} /><p>Shimla</p></Flex></Link>
          <Link><Flex className="grow" flexDirection="column"><Image src={activity} /><p>Shimla</p></Flex></Link>
          <Link><Flex className="grow" flexDirection="column"><Image src={activity} /><p>Shimla</p></Flex></Link>
          <Link><Flex className="grow" flexDirection="column"><Image src={activity} /><p>Shimla</p></Flex></Link>

        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
