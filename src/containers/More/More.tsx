import React from 'react';

import { Box, ChakraProps, SimpleGrid, Text } from '@chakra-ui/react';

import Card from '@/containers/Home/_fragments/Card';

import { DATA } from '@/constants/data';

interface MoreProps extends ChakraProps {}

function More({ ...basisProps }: MoreProps) {
  return (
    <Box {...basisProps} mt="80px" pb="200px">
      <Text as="h2" textAlign="center" fontSize="45px" fontWeight="bold">
        외부사업 방법론
      </Text>
      <Text
        textAlign="center"
        fontSize="20px"
        mt="24px"
        mb="60px"
        wordBreak="keep-all"
        maxW="800px"
        mx="auto"
      >
        본 방법론별 사업 적용은 사용자의 편의를 위해 외부사업 방법론의 산정식을
        간소화하여 개발된 것으로 산정 결과값은 실제 사업계획서 결과 값과 다를 수
        있습니다.
      </Text>
      {/* w={{base: 1, sm: 2, md: 3, lg: 4}} */}
      <Box
        w={{ base: '270px', sm: '560px', md: '850px', lg: '1140px' }}
        mx="auto"
      >
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="20px">
          {DATA.map((item, idx) => {
            return <Card key={idx} item={item} p={0} />;
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default More;
