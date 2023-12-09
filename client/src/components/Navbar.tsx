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
        Dashboard
      </ChakraLink>
      <ChakraLink as={ReactRouterLink} to="/contact" p="5">
        Contact
      </ChakraLink>
      <Spacer />
      <ChakraLink as={ReactRouterLink} to="#" p="5">
        Logout
      </ChakraLink>
      <Switch
        color="green"
        isChecked={isDark}
        onChange={toggleColorMode}
        p="5"
      />
    </Flex>
  );
}
