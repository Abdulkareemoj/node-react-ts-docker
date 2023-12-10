import { Box, Flex } from '@chakra-ui/react';
import Sidebar from './Sidebar';
import Footer from './Footer';
// Pass the child props
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Flex>
        <Sidebar />
        <Box flex="1" mx="20">
          {children}
        </Box>
      </Flex>
      <Footer />
    </>
  );
}
