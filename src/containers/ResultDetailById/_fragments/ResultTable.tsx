import { toInteger } from 'lodash-es';

import {
  Box,
  Flex,
  SimpleGrid,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

import { formatNumberKR } from '@/utils/format/format-number-kr';

function ResultTable({ data, params, ...basisProps }: any) {
  return (
    <>
      <SimpleGrid mb="100px" columns={{ base: 1, md: 3 }} spacing="10px">
        {data?.result?.map((inter: any, idx: number) => {
          return (
            <Box
              key={idx}
              w="100%"
              borderRadius="40px"
              border="1px solid #CCC"
              py="30px"
            >
              <Text fontSize="18px" textAlign="center">
                {inter.title}
              </Text>
              <Flex justifyContent="center" alignItems="center" mt="10px">
                <Text fontSize="30px" fontWeight="bold">
                  {formatNumberKR(
                    toInteger(params?.length > 0 ? inter.formula(params) : 0),
                  )}
                </Text>
                <Text fontSize="15px" textAlign="right" ml="10px">
                  ({inter.unit})
                </Text>
              </Flex>
              {/* <Text fontSize="15px"  fontWeight="bold">{formatNumberKR(params?.length > 0 ? inter.formula(params) : 0)}</Text> */}
            </Box>
          );
        })}
      </SimpleGrid>
    </>
  );
}

export default ResultTable;