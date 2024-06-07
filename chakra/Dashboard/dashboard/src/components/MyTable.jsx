import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

const MyTable = () => {
  return (
<TableContainer bg={'white'}>
  <Table variant='striped' >
    <TableCaption>All Accounts Details</TableCaption>
    <Thead>
      <Tr>
        <Th>Sales</Th>
        <Th>Revenue</Th>
        <Th>Expenses</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>$3000</Td>
        <Td>$3000</Td>
        <Td>$1200</Td>
      </Tr>
      <Tr>
        <Td>$4000</Td>
        <Td>$4000</Td>
        <Td>$1500</Td>
      </Tr>
      <Tr>
        <Td>$5000</Td>
        <Td>$5000</Td>
        <Td>$2000</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>Last 3 Months</Th>
        <Th>Last 3 Months</Th>
        <Th>Last 3 Months</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>  )
}

export default MyTable
