import { useColorMode, Switch, Flex, Spacer } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Flex
      as="nav"
      flexDirection="column"
      p="10"
      w="200px"
      h="100vh"
      borderRightWidth="1px"
    >
      <ChakraLink as={ReactRouterLink} to="/" p="5">
        Home
      </ChakraLink>
      <ChakraLink as={ReactRouterLink} to="/links" p="5">
        Links
      </ChakraLink>
      <ChakraLink as={ReactRouterLink} to="/contact" p="5">
        Contact
      </ChakraLink>
      <Spacer />
      <Switch
        color="green"
        isChecked={isDark}
        onChange={toggleColorMode}
        p="5"
      />
    </Flex>
  );
}
