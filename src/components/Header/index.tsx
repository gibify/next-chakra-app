import React from 'react';
import NextLink from "next/link"
import type { NextPage } from 'next';
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Link, useDisclosure } from '@chakra-ui/react'
import styles from './styles.module.css';
import { HamburgerIcon, StarIcon, IconProps } from '@chakra-ui/icons';
import { LogOutOutlineIcon } from 'chakra-ui-ionicons';

type Menu = {
  name: string;
  to: string;
}

const menu: Menu[] = [
  {
    name: 'Home',
    to: '/',
  },
  {
    name: 'Parceiros',
    to: '/seller',
  },
  {
    name: 'Clientes',
    to: '/buyer',
  },
  {
    name: 'Dashboard',
    to: '/dashboard',
  },
];

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef(null)
  return (
    <>
      <Box as='header' bg='#3E57FF' w='100%' h='100%' p={4} display='flex' alignItems='center' >
        <Button ref={btnRef} colorScheme='white' onClick={onOpen}>
          <HamburgerIcon w={8} h={8} />
        </Button>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            Evandro
          </DrawerHeader>
          <DrawerBody display='flex' flexDirection='column' alignSelf='flex-start'>
            {menu.map((item) => {
              return (
                <NextLink key={item.name} href='/home' passHref>
                  {item.name}
                </NextLink>
                // <Link href={item.to} alignSelf='flex-start' p={0} key={item.name} colorScheme='white' color='blue' fontSize='1xl'>
                // </Link>
              )
            })}
          </DrawerBody>

          <DrawerFooter>
            <Button onClick={onClose} colorScheme='blue'>
              <LogOutOutlineIcon w={8} h={8} color="wehite" marginRight={4} />
              Sair
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Header;
