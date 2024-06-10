import axios from 'axios';
import { SetStateAction, useEffect, useState } from 'react';
import { Box, Spinner } from '@chakra-ui/react';
import { useMatch } from 'react-router-dom';

const SERVER_ENDPOINT =
  import.meta.env.VITE_SERVER_ENDPOINT || 'http://localhost:3000';

interface ShortId {
  shortId: string;
}

function HandleRedirect() {
  const [destination, setDestination] = useState<null | string>(null);
  const [error, setError] = useState<Error | undefined>(undefined);

  // const match = useMatch<ShortId>('/:shortId');
  // const shortId = match?.params.shortId;
  const match = useMatch<ShortId, unknown>('/:shortId');
  const shortId = match?.params?.shortId;

  async function getData({ shortId }: ShortId) {
    return axios
      .get(`${SERVER_ENDPOINT}/api/createurl/${shortId}`)
      .then((res: { data: { destination: SetStateAction<string | null> } }) =>
        setDestination(res.data.destination)
      )
      .catch((err: Error) => {
        setError(err);
      });
  }

  useEffect(() => {
    if (shortId) {
      getData({ shortId: shortId });
    }
  }, [shortId]);

  useEffect(() => {
    if (destination) {
      window.location.replace(destination);
    }
  }, [destination]);

  if (!destination && !error) {
    return (
      <Box
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Spinner size="xl" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <p>Error: {error.message}</p>
      </Box>
    );
  }

  return null;
}

export default HandleRedirect;
