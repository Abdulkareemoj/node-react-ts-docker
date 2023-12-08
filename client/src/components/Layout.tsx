import { Box, Flex } from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';
// Pass the child props
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Flex>
        <Navbar />
        <Box flex="1" mx="20">
          {children}
        </Box>
      </Flex>
      <Footer />
    </>
  );
}
