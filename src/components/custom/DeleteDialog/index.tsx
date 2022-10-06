import React from 'react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react';

interface DeleteDialogProps {
  isOpen: boolean;
  onClose: () => void;
  alertDialogHeader: string;
  alertDialogBody: string;
};

function DeleteDialog({ isOpen, onClose, alertDialogBody, alertDialogHeader }: DeleteDialogProps) {
  const cancelRef = React.useRef(null)

  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              {alertDialogHeader}
            </AlertDialogHeader>

            <AlertDialogBody>
              {alertDialogBody}
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancelar
              </Button>
              <Button colorScheme='red' onClick={onClose} ml={3}>
                Deletar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

export default DeleteDialog;