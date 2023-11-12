import React, { useMemo } from 'react';

import {
  Box,
  ChakraProps,
  Container,
  Flex,
  Image,
  Text,
} from '@chakra-ui/react';

import { DATA } from '@/constants/data';

interface EvaluationDetailByIdProps extends ChakraProps {
  id?: string | string[];
}

function EvaluationDetailById({
  id,
  ...basisProps
}: EvaluationDetailByIdProps) {
  const Item = useMemo(() => {
    return id ? DATA.filter((item) => item.id === Number(id))[0] : null;
  }, [id]);

  return (
    <Box
      {...basisProps}
      pt="20px"
      pb={{ base: '150px', sm: '0px' }}
      overflow="hidden"
    >
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
            <Text mt="20px">{Item?.description}</Text>
          </Box>
          <Image
            src={Item?.icon}
            pos="absolute"
            bottom={{ base: '-200px', sm: '-30px' }}
            right={{ base: '-60px', sm: '-20px' }}
            w="300px"
          />
        </Flex>
      </Container>
    </Box>
  );
}

export default EvaluationDetailById;
