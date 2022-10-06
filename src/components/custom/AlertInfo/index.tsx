import { Alert, AlertDescription, AlertIcon } from "@chakra-ui/react";

interface AlertInfoProps {
  alertDescription: string;
}

function AlertInfo({ alertDescription }: AlertInfoProps) {
  return (
    <Alert status='info' w='100%'>
      <AlertIcon />
      <AlertDescription textColor='blue.500' fontWeight='bold'>{alertDescription}</AlertDescription>
    </Alert>
  )
}

export default AlertInfo;
