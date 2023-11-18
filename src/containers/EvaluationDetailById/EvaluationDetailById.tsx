import React, { useMemo, useState } from 'react';

import {
  Box,
  Button,
  Center,
  ChakraProps,
  Container,
  Flex,
  Image,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import { DATA } from '@/constants/data';

import AdditionalTab from './_fragments/AdditionalTab';
import MethodologyTab from './_fragments/MethodologyTab';
import Modal from './_fragments/Modal';

interface EvaluationDetailByIdProps extends ChakraProps {
  id?: string | string[];
}

const TAB = [
  { id: 1, title: '방법론 적용(불가)평가 ' },
  { id: 2, title: '추가성 평가 ' },
];
function EvaluationDetailById({
  id,
  ...basisProps
}: EvaluationDetailByIdProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selectedTab, setSelectedTab] = useState(1);

  const Item = useMemo(() => {
    return id ? DATA.filter((item) => item.id === Number(id))[0] : null;
  }, [id]);

  return (
    <>
      <Modal id={id} isOpen={isOpen} onClose={onClose} />
      <Box {...basisProps} pt="20px" pb="150px" overflow="hidden">
        <Container px="20px">
          <Flex
            justifyContent="space-between"
            alignItems="flex-start"
            pos="relative"
          >
            <Box w={{ base: '100%', sm: 'calc(100% - 350px)' }}>
              <Text fontSize="24px" fontWeight="bold">
                {Item?.subTitle}
                <br />
                {Item?.title}
              </Text>
              <Text mt="20px" maxW="800px">
                {Item?.description}
              </Text>
            </Box>
            <Image
              src={Item?.icon}
              pos="absolute"
              display={{ base: 'none', sm: 'flex' }}
              bottom="-30px"
              right="-20px"
              w="300px"
            />
          </Flex>
          {/* Tab */}
          <Flex
            maxW="800px"
            justifyContent="space-between"
            pos="relative"
            mx="auto"
            mt="40px"
          >
            {TAB.map((tab, idx) => {
              const isActive = tab.id === selectedTab;
              return (
                <Box
                  key={idx}
                  bgColor="#F5F5F5"
                  w={{ base: 'calc(50% - 5px)', sm: 'calc(50% - 10px)' }}
                  p="10px"
                  borderRadius="full"
                  h="70px"
                  zIndex={1}
                  cursor="pointer"
                  onClick={() => setSelectedTab(tab.id)}
                >
                  <Center
                    bgColor={isActive ? '#2A2C2D' : '#F5F5F5'}
                    borderRadius="full"
                    h="100%"
                  >
                    <Text
                      color={isActive ? 'white' : '#858585'}
                      fontWeight="bold"
                    >
                      {tab.title}
                    </Text>
                  </Center>
                </Box>
              );
            })}
            <Box
              pos="absolute"
              w="90%"
              h="5px"
              bgColor="#F5F5F5"
              top="50%"
              right="10%"
            />
          </Flex>
          {selectedTab === 1 && <MethodologyTab data={Item} />}
          {selectedTab === 2 && <AdditionalTab data={Item} />}
          <Button
            position="fixed"
            bottom="20px"
            w="300px"
            h="60px"
            colorScheme="dark"
            borderRadius="full"
            right="calc(50% - 150px)"
            cursor="pointer"
            onClick={onOpen}
          >
            <Text color="white">예상 감축량 확인하기</Text>
          </Button>
        </Container>
      </Box>
    </>
  );
}

export default EvaluationDetailById;
