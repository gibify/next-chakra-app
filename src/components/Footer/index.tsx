import type { NextPage } from 'next';
import { Box, Text } from '@chakra-ui/react'


function Footer() {
  return (
    <Box as='footer' bg='#3E57FF' w='100%' h='100%' p={4} display='flex' alignItems='center' justifyContent='center'>
      <Text fontSize='2xl' color='white'>@ all reserved</Text>
    </Box>
  )
}

export default Footer;
