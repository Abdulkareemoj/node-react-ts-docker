import { useState } from 'react';
import { useColorMode, Switch, Flex, Button } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react';

// export default function Navbar() {
export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Flex>
      {/* Desktop */}
      <Flex>
        <ChakraLink as={ReactRouterLink} to="/">
          Home
        </ChakraLink>
        <ChakraLink as={ReactRouterLink} to="/links">
          Links
        </ChakraLink>
        <ChakraLink as={ReactRouterLink} to="/contact">
          Contact
        </ChakraLink>
      </Flex>
      <Switch color="green" isChecked={isDark} onChange={toggleColorMode} />
    </Flex>
  );
}
// }
