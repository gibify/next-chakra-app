import { AddIcon, TrashIcon } from 'chakra-ui-ionicons';
import { Box, Input, Button, Table, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import DeleteDialog from '../../components/custom/DeleteDialog';

const tablesValues = [
  {
    id: 1,
    name: 'Loja jeans',
    owner: 'Otto',
    phone: '11 99999-9999',
    city: 'Campinas-SP',
    status: 'ativo',
  },
  {
    id: 2,
    name: 'Tricot lojas',
    owner: 'Lúcia',
    phone: '11 99999-9999',
    city: 'São Paulo-SP',
    status: 'ativo',
  },
  {
    id: 3,
    name: 'Larry',
    owner: 'Regiane',
    phone: '11 99999-9999',
    city: 'Brusque-SC',
    status: 'ativo',
  },
]

function SellerList() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box h='100vh' p={4}>
      <Box w='100%' display='flex' alignItems='center' justifyContent='space-between' marginY={5} >
        <Input w={80} placeholder='Digite o nome da loja' />
        <Button
          colorScheme='blue'
        >
          <AddIcon w={6} h={6} color='white' marginRight={2}
          />
          Cadastrar uma Loja
        </Button>
      </Box>
      <TableContainer w='100%'>
        <Table variant='simple' colorScheme='blue'>
          <Thead>
            <Tr >
              <Th isNumeric>ID</Th>
              <Th>Nome da Loja</Th>
              <Th>Responsável</Th>
              <Th>Telefone</Th>
              <Th>Cidade/UF</Th>
              <Th>Status</Th>
              <Th>Ações</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tablesValues.map((item) => {
              return (
                <Tr key={item.id} >
                  <Td isNumeric>{item.id}</Td>
                  <Td>{item.name}</Td>
                  <Td>{item.owner}</Td>
                  <Td>{item.phone}</Td>
                  <Td>{item.city}</Td>
                  <Td>{item.status}</Td>
                  <Td>
                    <Button colorScheme='' p={0}>
                      <EditIcon w={8} color='black' />
                    </Button>
                    <Button colorScheme='' p={0}>
                      <TrashIcon w={8} color='black' onClick={onOpen} />
                    </Button>
                  </Td>
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <DeleteDialog
        isOpen={isOpen}
        onClose={onClose}
        alertDialogBody='Deseja realmente deletar a loja?'
        alertDialogHeader='Deletar loja'
      />
    </Box>
  )
}

export default SellerList;



