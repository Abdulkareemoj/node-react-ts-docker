import {
  Box,
  Container,
  Text,
  Stack,
  Button,
  Center,
  Image,
  Link as ChakraLink,
  chakra,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
ChevronRightIcon;
import { ChevronRightIcon } from '@chakra-ui/icons';
export default function Landing() {
  return (
    <>
      {/* <SEO title={'Welcome'} description={'Link Shortener'} /> */}
      <Box mb={20}>
        <Box as="section" pt="6rem" pb={{ base: '0', md: '5rem' }}>
          <Container>
            <Box textAlign="center">
              <chakra.h1
                maxW="16ch"
                mx="auto"
                fontSize={{ base: '2.25rem', sm: '3rem', lg: '4rem' }}
                fontFamily="heading"
                letterSpacing="tighter"
                fontWeight="extrabold"
                mb="16px"
                lineHeight="1.2"
              >
                {'Main Page'}
                <Box as="span" color="teal.500" _dark={{ color: 'teal.300' }}>
                  {' '}
                  {'Title'}
                </Box>
              </chakra.h1>

              <Text
                maxW="560px"
                mx="auto"
                color="gray.500"
                _dark={{ color: 'gray.400' }}
                fontSize={{ base: 'lg', lg: 'xl' }}
                mt="6"
              >
                {'message'}
              </Text>

              <Stack
                mt="10"
                spacing="4"
                justify="center"
                direction={{ base: 'column', sm: 'row' }}
              >
                <ChakraLink as={ReactRouterLink} to="/">
                  <Button
                    h="4rem"
                    px="40px"
                    fontSize="1.2rem"
                    as="a"
                    size="lg"
                    colorScheme="teal"
                    rightIcon={<ChevronRightIcon fontSize="0.8em" />}
                  >
                    {'Get Started'}
                  </Button>
                </ChakraLink>
                <Button
                  as="a"
                  size="lg"
                  h="4rem"
                  px="40px"
                  fontSize="1.2rem"
                  href="/"
                  target="__blank"
                >
                  Bruh
                </Button>
              </Stack>
            </Box>

            <Center>
              <Box
                display="inline-block"
                mt="70px"
                rounded="xl"
                bg="green.50"
                shadow="base"
                px="6"
                py="4"
              >
                <Image height={55} width={240} src="/logo.svg" alt="Logo" />
              </Box>
            </Center>
          </Container>
        </Box>
      </Box>
    </>
  );
}
