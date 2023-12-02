import { useState } from 'react';
import { useColorMode, Switch, Flex, Button, Spacer } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react';

// export default function Navbar() {
export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <>
      <Flex px="10">
        {/* Desktop */}
        <Flex>
          <ChakraLink as={ReactRouterLink} to="/" p="5">
            Home
          </ChakraLink>
          <ChakraLink as={ReactRouterLink} to="/links" p="5">
            Links
          </ChakraLink>
          <ChakraLink as={ReactRouterLink} to="/contact" p="5">
            Contact
          </ChakraLink>
        </Flex>
        <Spacer />
        <Switch
          color="green"
          isChecked={isDark}
          onChange={toggleColorMode}
          p="5"
        />
      </Flex>
    </>
  );
}
// }
