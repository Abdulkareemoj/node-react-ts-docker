import { Box } from '@chakra-ui/react';

import URLShortenerForm from '../components/URLShortener';
import Header from '../components/Header';

function Home() {
  return (
    <>
      <Box>
        <Header />
      </Box>
      <Box
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <URLShortenerForm />
      </Box>
    </>
  );
}
export default Home;
