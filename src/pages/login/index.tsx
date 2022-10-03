import { Box, Heading, Text, Flex, Spacer } from '@chakra-ui/react';
import GoogleLogin from '../components/GoogleLogin';

function Login() {
  return (
    <Box h='100vh' w='100%' display='flex' justifyContent='center' alignItems='center'>
      <Flex p={5} maxWidth='550px' minH='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' display='flex' flexDirection='column' justifyContent='space-between' alignItems='center'>
        <Heading textAlign='center' >Bem vindo ao Portal do Backoffice by Gira</Heading>
        <Text fontSize='xl' color='brack' marginTop={8}>
          Aqui você tem a gestão completa da sua loja online.
          Tem alguma dúvida ou precisa de assistência? Mande mensagem pra gente no número
          (11) 93080-0871 ou e-mail em suporte@canaldstak.com.br
        </Text>
        <Spacer />
        <GoogleLogin />
      </Flex >
    </Box >
  )
}

export default Login;