import { Button, Flex, Image, Text } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';

import { LAYOUT } from '@/constants/layout';
import { MY_IMAGES } from '@/images';

import HomeHeaderDrawer from './components/HomeHeaderDrawer';
import {
  HOME_HEADER_VARIANTS,
  HomeHeaderVariantType,
} from './constants/variants';

import { MenuIcon } from 'generated/icons/MyIcons';

interface HomeHeaderProps {
  variant?: HomeHeaderVariantType;
}

const HomeHeader = ({ variant = 'light' }: HomeHeaderProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const cssByVariant = HOME_HEADER_VARIANTS[variant];
  return (
    <>
      <Flex //
        as="header"
        px={{ base: '16px', md: '80px' }}
        alignItems="center"
        justifyContent="space-between"
        position="fixed"
        zIndex="sticky"
        transition="all 0.3s"
        w="100%"
        h={LAYOUT.HEADER.HEIGHT}
        bgColor="white"
      >
        <Image alt="logo" src="/images/logo.png" w="287px" h="48px" />
        <Button colorScheme="dark" w="130px" borderRadius="full">
          <Text>문의하기</Text>
        </Button>
      </Flex>
      <HomeHeaderDrawer
        isOpen={isOpen}
        onClose={onClose}
        bodyProps={cssByVariant.drawer}
      />
    </>
  );
};

export default HomeHeader;
