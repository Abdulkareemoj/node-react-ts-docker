import { Box, Flex } from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';
// Pass the child props
export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <Box flex="1" mx="20">
        {children}
      </Box>
      <Footer />
    </>
  );
}
