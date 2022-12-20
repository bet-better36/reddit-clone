import { Flex, Image } from '@chakra-ui/react';
import React from 'react';
import SerchInput from './SerchInput';
import RightContent from './RightConten/RightContent';

const Navibar: React.FC = () => {
  return (
    <Flex bg='white' height='44px' padding='6px 12px'>
      <Flex>
        <Image
          src='/images/redditFace.svg'
          alt=''
          height='30px'
        />
        <Image
          src='/images/redditText.svg'
          alt=''
          height='55px'
          px={2}
          my={-3}
          display={{ base: 'none', md: 'unset' }}
        />
      </Flex>
      {/* <Directry /> */}
      <SerchInput />
      <RightContent />
    </Flex>
  );
};
export default Navibar;
