import { Box } from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';
// Pass the child props
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      <Navbar />
      <Box mx="20">{children}</Box>

      <Footer />
    </Box>
  );
}
