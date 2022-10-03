import { Button } from '@chakra-ui/react';
import { LogoGoogleIcon } from 'chakra-ui-ionicons';

function GoogleLogin() {
  return (
    <Button w='80%' margin='auto' leftIcon={<LogoGoogleIcon />} colorScheme='blue' variant='outline'>
      Entrar com a conta Gira
    </Button >
  )
}

export default GoogleLogin;