import { Alert, AlertDescription, AlertIcon } from "@chakra-ui/react";

interface AlertErrorProps {
  alertDescription: string;
};

function AlertError({ alertDescription }: AlertErrorProps) {
  return (
    <Alert status='error' w='100%'>
      <AlertIcon />
      <AlertDescription color='red' fontWeight='bold'>
        {alertDescription}
      </AlertDescription>
    </Alert>
  )
}

export default AlertError;
