import axios from 'axios';
import { useEffect, useState } from 'react';
import { Box, Spinner } from '@chakra-ui/react';
import { RouteMatch } from 'react-router-dom';

export const SERVER_ENDPOINT =
  process.env.REACT_APP_SERVER_ENDPOINT || 'http://localhost:3000';

function HandleRedirect() {
  const [destination, setDestination] = useState<null | string>(null);
  const [error, setError] = useState();
  const {
    params: { shortId },
  } = RouteMatch<{
    shortId: string;
  }>();

  useEffect(() => {
    async function getData() {
      return axios
        .get(`${SERVER_ENDPOINT}/api/createurl/${shortId}`)
        .then((res: { data: { destination: SetStateAction<string | null> } }) =>
          setDestination(res.data.destination)
        )
        .catch((err: SetStateAction<undefined>) => {
          setError(err);
        });
    }
    getData();
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
        alignItems="center"
        justifyContent="center"
      >
        <Spinner />
      </Box>
    );
  }
  return <p>(error && JSON.stringify(error))</p>;
}
export default HandleRedirect;
