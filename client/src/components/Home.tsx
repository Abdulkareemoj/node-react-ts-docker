import { Box } from '@chakra-ui/react';

import URLShortenerForm from './URLShortener';

function Home() {
  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <URLShortenerForm />
    </Box>
  );
}
export default Home;
