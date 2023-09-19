import {
    Box,
    chakra,
    Container,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
  } from '@chakra-ui/react';
import { ReactNode } from 'react';
  import logo from "../Assets/logo.png"
  import {
    FaInstagram,
    FaTwitter,
    FaYoutube,
  } from 'react-icons/fa';
  import { BiMailSend } from 'react-icons/bi';
  
  const Logo = () => {
    return (
    //   <svg height={32} viewBox="0 0 120 28" xmlns="http://www.w3.org/2000/svg">
    //     {/* Your SVG path here */}
        //   </svg>
        <img src={logo} alt="" sizes='5rem'/>
    );
  };
  
  const SocialButton = () => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        // href={}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}
      >
        <VisuallyHidden>{"label"}</VisuallyHidden>
        {"children"}
      </chakra.button>
    );
  };
  
  const ListHeader = () => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {"children"}
      </Text>
    );
  };
  
  export default function LargeWithNewsletter() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}
      >
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
            spacing={8}
          >
            <Box>
              <Logo logo={logo} />
            </Box>
            <Text fontSize={'sm'}>
              © 2022 Chakra Templates. All rights reserved
            </Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Company</ListHeader>
              <Box as="a" href={'#'}>
                About us
              </Box>
              <Box as="a" href={'#'}>
                Blog
              </Box>
              <Box as="a" href={'#'}>
                Contact us
              </Box>
              <Box as="a" href={'#'}>
                Pricing
              </Box>
              <Box as="a" href={'#'}>
                Testimonials
              </Box>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Support</ListHeader>
              <Box as="a" href={'#'}>
                Help Center
              </Box>
              <Box as="a" href={'#'}>
                Terms of Service
              </Box>
              <Box as="a" href={'#'}>
                Legal
              </Box>
              <Box as="a" href={'#'}>
                Privacy Policy
              </Box>
              <Box as="a" href={'#'}>
                Status
              </Box>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Stay up to date</ListHeader>
              <Stack direction={'row'}>
                <Input
                  placeholder={'Your email address'}
                  bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                  border={0}
                  _focus={{
                    bg: 'whiteAlpha.300',
                  }}
                />
                <IconButton
                  bg={useColorModeValue('green.400', 'green.800')}
                  color={useColorModeValue('white', 'gray.800')}
                  _hover={{
                    bg: 'green.600',
                  }}
                  aria-label="Subscribe"
                  icon={<BiMailSend />}
                />
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    );
  }
  