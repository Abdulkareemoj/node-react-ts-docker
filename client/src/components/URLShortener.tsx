import axios from 'axios';
import { useState } from 'react';

import { Box, Button, Heading, Input, InputGroup } from '@chakra-ui/react';

import { SERVER_ENDPOINT } from '../config/index';

function URLShortener() {
  // when creatiing more complicated forms use a library like formik for state management instead
  const [destination, setDestination] = useState();
  const [shortURL, setShortURL] = useState<{ shortId: string } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setShortURL(null);

    const result = await axios
      .post(`${SERVER_ENDPOINT}/api/createurl`, {
        destination,
      })
      .then((resp: { data: any }) => resp.data);
    console.log(result);

    // eslint-disable-next-line no-debugger
    debugger;
    setShortURL(result);
  }
  return (
    <Box pos="relative">
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <Input
            onChange={(e: any) => setDestination(e.target.value)}
            placeholder="https://example.com"
          />
          <Button type="submit">Shorten</Button>
        </InputGroup>
      </form>
      {shortURL && (
        <a href={`/${shortURL?.shortId}`}>
          {window.location.origin}/${shortURL?.shortId}
        </a>
      )}
    </Box>
  );
}
export default URLShortener;
