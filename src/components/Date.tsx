import { Box } from '@chakra-ui/react';
import moment from 'moment';

export default function Date() {
  return <Box>{moment().format('DD MMMM, YYYY')}</Box>;
}
