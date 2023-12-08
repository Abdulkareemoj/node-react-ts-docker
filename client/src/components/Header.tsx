import { Flex, Box, Spacer } from '@chakra-ui/react';
import Date from './Date';
const Header = () => {
  return (
    <Flex>
      <Box>Hello User</Box>
      <Box>Track your Links with Ease</Box>
      <Spacer />
      <Date />
    </Flex>
  );
};

export default Header;
