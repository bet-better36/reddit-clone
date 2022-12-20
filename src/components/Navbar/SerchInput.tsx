import { SearchIcon } from '@chakra-ui/icons';
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  border,
} from '@chakra-ui/react';
import React from 'react';

type SerchInputProps = {
  // user:
};

const SerchInput: React.FC<SerchInputProps> = () => {
  return (
    <Flex flexGrow={1} mr={2} align='center'>
      <InputGroup>
        <InputLeftElement pointerEvents='none'>
          <SearchIcon color='gray.300' mb={1} />
        </InputLeftElement>
        <Input
          placeholder='Serch Reddit'
          fontSize='10px'
          _placeholder={{ color: 'gray.500' }}
          _hover={{
            bg: 'white',
            border: '1px solid',
            borderColor: 'blue.500',
          }}
          _focus={{
            outline: 'none',
            border: '1px solid',
            borderColor: 'blue.500',
          }}
          height='34px'
          bg='gray.50'
        />
      </InputGroup>
    </Flex>
  );
};
export default SerchInput;
