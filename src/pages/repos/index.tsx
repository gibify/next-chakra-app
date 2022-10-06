import { useState } from 'react';
import { GetServerSideProps } from "next";
import { AddIcon, TrashIcon } from 'chakra-ui-ionicons';
import {
  Box,
  Input,
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
  Flex,
  IconButton
} from '@chakra-ui/react';
import { EditIcon, SmallCloseIcon } from '@chakra-ui/icons';
import DeleteDialog from '../../components/custom/DeleteDialog';
import AlertInfo from '../../components/custom/AlertInfo';
import { ReposService } from '../../services/repo';

type Data = {
  data: {
    id: number;
    name: string;
  }[]
}
function Repos({ data }: Data) {
  const [inputSearch, setInputSearch] = useState<string>('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  let repos = data;

  if (inputSearch.length > 0) {
    repos = data.filter((repo) => repo.name.toLowerCase().includes(inputSearch.toLowerCase()));
  }

  return (
    <Box h='100vh' p={4}>
      <Box w='100%' display='flex' alignItems='center' justifyContent='space-between' marginY={5} >
        <Flex>
          <Input
            onChange={(event) => setInputSearch(event.target.value)}
            value={inputSearch}
            w={80}
            placeholder='Digite o nome do repo'
          />
          {inputSearch.length > 0 ? (
            <IconButton
              onClick={() => setInputSearch('')}
              aria-label='limpar input'
              icon={<SmallCloseIcon w={6} h={6} color='gray.500' />}
              marginLeft={2}
            />
          ) : (<></>)}
        </Flex>

        <Button
          colorScheme='blue'
        >
          <AddIcon w={6} h={6} color='white' marginRight={2}
          />
          Cadastrar uma Loja
        </Button>
      </Box>
      {
        repos.length > 0 ? (
          <TableContainer w='100%'>
            <Table variant='simple' colorScheme='blue'>
              <Thead>
                <Tr >
                  <Th isNumeric>ID</Th>
                  <Th>Nome do repositório</Th>
                  <Th>Responsável</Th>
                  <Th>Telefone</Th>
                  <Th>Cidade/UF</Th>
                  <Th>Status</Th>
                  <Th>Ações</Th>
                </Tr>
              </Thead>
              <Tbody>
                {repos.map((item) => {
                  return (
                    <Tr key={item.id} >
                      <Td isNumeric>{item.id}</Td>
                      <Td>{item.name}</Td>
                      <Td>{item.name}</Td>
                      <Td>{item.name}</Td>
                      <Td>{item.name}</Td>
                      <Td>{item.name}</Td>
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
        ) : (
          <Flex alignItems='center' justifyContent='center' marginTop={4} w='50%' margin='auto'>
            <AlertInfo alertDescription='Parceiro não encontrados!' />
          </Flex>
        )
      }
      <DeleteDialog
        isOpen={isOpen}
        onClose={onClose}
        alertDialogBody='Deseja realmente deletar a loja?'
        alertDialogHeader='Deletar loja'
      />
    </Box >

  )
}

export default Repos;

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await ReposService.getRepos()
  return {
    props: { data }
  }
}