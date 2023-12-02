import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import React from 'react';

const TabledLinks = () => {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th> #</Th>
            <Th>Link</Th>
            <Th>Shortened</Th>
            <Th>Clicks</Th>
            <Th>Date Created</Th>
            <Th>QR</Th>
            <Th>...</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td isNumeric>1</Td>
            <Td>millimetres (mm)</Td>
            <Td>25.4</Td>
            <Td>1</Td>
            <Td>millimetres (mm)</Td>
            <Td>25.4</Td>
            <Td>25.4</Td>
          </Tr>
          <Tr>
            <Td isNumeric>2</Td>
            <Td>millimetres (mm)</Td>
            <Td>25.4</Td>
            <Td>1</Td>
            <Td>millimetres (mm)</Td>
            <Td>25.4</Td>
            <Td>25.4</Td>
          </Tr>
          <Tr>
            <Td isNumeric>3</Td>
            <Td>millimetres (mm)</Td>
            <Td>25.4</Td>
            <Td>1</Td>
            <Td>millimetres (mm)</Td>
            <Td>25.4</Td>
            <Td>25.4</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Td isNumeric>4</Td>
            <Td>millimetres (mm)</Td>
            <Td>25.4</Td>
            <Td>1</Td>
            <Td>millimetres (mm)</Td>
            <Td>25.4</Td>
            <Td>25.4</Td>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default TabledLinks;
