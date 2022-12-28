import { Flex, Image } from '@chakra-ui/react';
import React from 'react';
import SerchInput from './SerchInput';
import RightContent from './RightConten/RightContent';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/clientApp';
import Directory from './Directory/Directory';

const Navibar: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <Flex
      bg='white'
      height='44px'
      padding='6px 12px'
      justify={{ md: 'space-between' }}
    >
      <Flex
        align='center'
        width={{ base: '40px', md: 'auto' }}
        mr={{ base: 0, md: 2 }}
      >
        <Image src='/images/redditFace.svg' alt='' height='30px' />
        <Image
          src='/images/redditText.svg'
          alt=''
          height='55px'
          px={2}
          my={-3}
          display={{ base: 'none', md: 'unset' }}
        />
      </Flex>
      {user && <Directory />}
      <SerchInput user={user} />
      <RightContent user={user} />
    </Flex>
  );
};
export default Navibar;
