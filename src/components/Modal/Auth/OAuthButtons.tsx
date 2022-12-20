import { Button, Flex, Image } from '@chakra-ui/react';
import React from 'react';

const OAuthButtons: React.FC = () => {
  return (
    <Flex direction='column' width='100%' mb={4}>
      <Button variant='oauth' mb={2}>
        <Image src='/images/googlelogo.png' alt='' height='20px' mr={4} />
        continue with google
      </Button>
      <Button variant='oauth'>some other provider</Button>
    </Flex>
  );
};
export default OAuthButtons;
