import React, { useEffect, useMemo, useState } from 'react';

import {
  Box,
  Button,
  Center,
  ChakraProps,
  Container,
  Flex,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';

import { FORMULA } from '@/constants/formula';
import { formatNumberKR } from '@/utils/format/format-number-kr';

import BarChart from './_fragments/BarChart';
import DoughnutChart from './_fragments/DoughnutChart';
import ResultTable from './_fragments/ResultTable';
import Sources from './_fragments/Sources';

interface ResultDetailByIdProps extends ChakraProps {
  id?: string | string[];
}

function ResultDetailById({ id, ...basisProps }: ResultDetailByIdProps) {
  const [params, setParams] = useState<any>([]);

  const Item = useMemo(() => {
    return id ? FORMULA.filter((item: any) => item.id === Number(id))[0] : null;
  }, [id]);

  const submitForm = () => {
    const inputs = document.getElementsByTagName('input');
    const data = Array.from(inputs).map((input, idx) => ({
      id: Item.params[idx].id,
      title: Item.params[idx].title,
      unit: Item.params[idx].unit,
      value: Number(input.value),
    }));
    console.log(data);
    setParams(data);
  };

  useEffect(() => {
    const extractedData = Item?.params?.map((param: any) => ({
      id: param.id,
      title: param.title,
      unit: param.unit,
      value: param.default,
    }));
    setParams(extractedData);
  }, [id]);

  const reduction = useMemo(() => {
    if (!Item) return;
    const a = Item.result?.find(
      (item: any) => item.title === '연평균 온실가스 배출 감축량',
    );
    if (!a) return;
    if (!params || params.length < 1) return;
    return a.formula(params);
  }, [Item, params]);

  return (
    <Box {...basisProps}>
      <Container px="20px">
        <Text fontSize="32px" textAlign="center" fontWeight="bold" mt="60px">
          예상 감축량 산정 및 배출권 수익 산정
        </Text>
        <Text fontSize="18px" textAlign="center" mt="30px">
          모니터링 인자에 대한 정보를 입력하여 예상 감축량을 도출하고,
          <br />
          배출권 가격을 연동함으로써 해당 사업을 통한 배출권 수익을 예상할 수
          있습니다.
        </Text>
        <Box
          bgColor="#F5F5F5"
          borderRadius="40px"
          px="60px"
          py="50px"
          mt="60px"
          mb="50px"
        >
          <Text fontSize="32px" fontWeight="bold">
            데이터 입력
          </Text>
          <VStack w="100%" mt="30px" spacing="30px">
            {Item?.params.map((p: any, idx: number) => {
              return (
                <Box key={idx} w="100%">
                  <Flex mb="10px" alignItems="center">
                    <Text fontSize="18px" fontWeight="bold">
                      {p.title}
                    </Text>
                    <Text fontSize="14px" ml="10px">
                      단위 : {p.unit}
                    </Text>
                  </Flex>
                  <Input
                    bgColor="white"
                    borderRadius="full"
                    h="60px"
                    defaultValue={p.default}
                  />
                </Box>
              );
            })}
          </VStack>
          <Center mt="40px">
            <Button
              colorScheme="dark"
              textAlign="center"
              h="60px"
              w="200px"
              borderRadius="full"
              size="lg"
              onClick={submitForm}
            >
              결과 확인하기
            </Button>
          </Center>
        </Box>

        <Sources id={id} />

        <ResultTable data={Item} params={params} />
        <Flex
          alignItems="center"
          mb="100px"
          direction={{ base: 'column', sm: 'row' }}
          gap="20px"
        >
          <Box maxW="500px" mx="auto" w="50%">
            <Text
              fontSize="16px"
              fontWeight="bold"
              textAlign="center"
              mb="10px"
            >
              NDC 기여율
            </Text>
            <DoughnutChart
              result={Math.floor(reduction * 10)}
              goal={371000000}
            />
          </Box>
          <Box maxW="500px" mx="auto" w="100%">
            <VStack>
              <Text fontSize="24px" fontWeight="bold">
                예상 감축량
              </Text>
              <Text fontSize="18px" textAlign="center" mb="10px">
                <Text as="span" fontSize="24px" fontWeight="bold">
                  {reduction
                    ? formatNumberKR(Math.round(reduction * 1000) / 100)
                    : 0}
                </Text>{' '}
                (tCO₂)
              </Text>
              <Text fontSize="24px" fontWeight="bold">
                목표
              </Text>
              <Text fontSize="18px">
                <Text as="span" fontSize="24px" fontWeight="bold">
                  371,000,000
                </Text>{' '}
                (tCO₂)
              </Text>
            </VStack>
          </Box>
        </Flex>
        <Flex
          alignItems="center"
          mb="100px"
          direction={{ base: 'column', sm: 'row' }}
          gap="20px"
        >
          <Box maxW="500px" mx="auto" w="50%">
            <Text
              fontSize="16px"
              fontWeight="bold"
              textAlign="center"
              mb="10px"
            >
              탄소중립 기여율
            </Text>
            <BarChart result={Math.floor(reduction * 30)} goal={981000000} />
          </Box>
          <Box maxW="500px" mx="auto" w="100%">
            <VStack>
              <Text fontSize="24px" fontWeight="bold">
                예상 감축량
              </Text>
              <Text fontSize="18px" textAlign="center" mb="10px">
                <Text as="span" fontSize="24px" fontWeight="bold">
                  {reduction
                    ? formatNumberKR(Math.round(reduction * 3000) / 100)
                    : 0}
                </Text>{' '}
                (tCO₂)
              </Text>
              <Text fontSize="24px" fontWeight="bold">
                목표
              </Text>
              <Text fontSize="18px">
                <Text as="span" fontSize="24px" fontWeight="bold">
                  981,000,000
                </Text>{' '}
                (tCO₂)
              </Text>
            </VStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default ResultDetailById;
