import { Box, Heading, Text, Flex, Spacer, Button } from '@chakra-ui/react';
import { useSession, signOut } from 'next-auth/react';
import AlertError from '../../components/custom/AlertError';
import GoogleLogin from '../../components/GoogleLogin';

function Login() {
  const { data: session } = useSession()
  console.log(session)
  return (
    <Box h='100vh' w='100%' display='flex' justifyContent='center' alignItems='center'>
      <Flex p={5} maxWidth='550px' minH='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' display='flex' flexDirection='column' justifyContent='space-between' alignItems='center'>
        <Heading textAlign='center' >Bem vindo ao Portal do Backoffice by Gira</Heading>
        <Text fontSize='xl' color='brack' marginTop={8}>
          Aqui você tem a gestão completa da sua loja online.
          Tem alguma dúvida ou precisa de assistência? Mande mensagem pra gente no número
          (11) 93080-0871 ou e-mail em suporte@canaldstak.com.br
        </Text>
        <Spacer w='100%' marginTop='4'>
          {session ? (<div>
            {session.user?.name}
            <Button onClick={() => signOut()}>Sair</Button>
            <GoogleLogin />
          </div>
          ) : <GoogleLogin />}
        </Spacer>
        <Spacer w='100%' marginTop='4'>
          <AlertError
            alertDescription='Erro na autenticação.'
          />
        </Spacer>
      </Flex >
    </Box >
  )
}

export default Login;