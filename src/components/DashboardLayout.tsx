import { Box, Flex } from '@chakra-ui/react';
import Sidebar from './Sidebar';
import Footer from './Footer';
// Pass the child props
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar />
      <Box flex="1" mx="20">
        {children}
      </Box>

      <Footer />
    </>
  );
}
