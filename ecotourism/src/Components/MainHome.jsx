import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import bgImage from "../Assets/homebg_1.jpeg";

export default function WithBackgroundImage() {
  return (
    <Flex
      w={"full"}
      h={"120vh"}
      backgroundImage={bgImage}
      backgroundSize={"cover"}
          backgroundPosition={"center center"}
    >
      <VStack
        //   color={"#fff"}
        // m={"5rem auto auto"}
          w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6} color="#fff" mt={"-10rem"}>
          <Text
            color={"#fff"}
            fontWeight={700}
            lineHeight={1.5}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            Discover the Hidden Gems of Hillside Villages
          </Text>
          <p>
            Escape to breathtaking views, charming local traditions and
            sustainable lifestyle in Ecotourism picturesque Hillside Village.
          </p>
          <Stack direction={"row"}>
            <Button
              bg={"teal.300"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "teal.500" }}
            >
              Show me more
            </Button>
            <Button
              bg={"blabkAlpha"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "blackAlpha.500" }}
            >
              Show me more
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
