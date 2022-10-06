import { signIn, getSession } from 'next-auth/react';
import { getToken } from 'next-auth/jwt'
import { Button } from '@chakra-ui/react';
import { LogoGoogleIcon } from 'chakra-ui-ionicons';
import Login from '../../pages/login';

function GoogleLogin() {
  async function login() {
    const session = await getSession()
    const toke = await getToken({req: ''})
    console.log(session)

  }

  return (
    <>
      <Button onClick={() => signIn()} w='100%' margin='auto' leftIcon={<LogoGoogleIcon />} colorScheme='blue' variant='outline'>
        signin goggle
      </Button >
      <Button onClick={() => login()} w='100%' margin='auto' leftIcon={<LogoGoogleIcon />} colorScheme='blue' variant='outline'>
        get session
      </Button >
    </>
  )
}

export default GoogleLogin;