import React, { useEffect, useMemo, useState } from 'react';

import Router from 'next/router';

import {
  Box,
  Button,
  Center,
  ChakraProps,
  Container,
  Flex,
  HStack,
  Input,
  Select,
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
  const [selectValue, setSelectValue] = useState<any>(0);

  const Item = useMemo(() => {
    return id ? FORMULA.filter((item: any) => item.id === Number(id))[0] : null;
  }, [id]);

  const submitForm = () => {
    let data = null;
    const inputs = document.getElementsByTagName('input');

    if (Item.id === 9) {
      const selectElement = document.getElementById('select-box');
      data = Array.from([inputs[0], selectElement, inputs[1]]).map(
        (input: any, idx) => ({
          id: Item.params[idx].id,
          title: Item.params[idx].title,
          unit: Item.params[idx].unit,
          value: Number(input.value),
        }),
      );
    } else {
      data = Array.from(inputs).map((input, idx) => ({
        id: Item.params[idx].id,
        title: Item.params[idx].title,
        unit: Item.params[idx].unit,
        value: Number(input.value),
      }));
    }
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
    let a = null;
    if (!Item) return;
    if (!params || params.length < 1) return;
    if (Item.result.length > 3) {
      // 여기가 왜 틀린거야?
      a = Item.result.filter((item: any) => item.id === 3 || item.id === 6);
      if (!a) return;
      return a[0].formula(params) + a[1].formula(params);
    } else {
      a = Item.result?.find(
        (item: any) => item.id === 3 || item.id === 6,
        // (item: any) => item.title === '연평균 온실가스 배출 감축량',
      );
      if (!a) return;
      return a.formula(params);
    }
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
              if (Item.id === 9 && p.id === 2) {
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
                    <Select
                      id="select-box"
                      defaultValue={p.default}
                      placeholder="유형 선택"
                      bgColor="white"
                      borderRadius="full"
                      h="60px"
                      onChange={(e) => setSelectValue(e.target.value)}
                    >
                      <option value={83}>농작물, 가축</option>
                      <option value={61}>음료</option>
                      <option value={76}>식료품</option>
                      <option value={94}>통조림</option>
                      <option value={74}>기타 식재료, 사료</option>
                      <option value={76}>고체 광물 연료, 석유 제품</option>
                      <option value={90}>광물, 금속 폐기물</option>
                      <option value={80}>금속 제품</option>
                      <option value={57}>광물 제품</option>
                      <option value={70}>
                        기타 원유 제품, 제조된 광물, 건설 재료
                      </option>
                      <option value={76}>비료</option>
                      <option value={70}>화학제품</option>
                      <option value={100}>운송 장비</option>
                      <option value={119}>기계, 금속 제품</option>
                      <option value={84}>유리, 세라믹, 도자기 제품</option>
                      <option value={94}>묶음 제품</option>
                      <option value={113}>기타 재료</option>
                    </Select>

                    <Text textAlign="right" mt="10px" fontSize="14px">
                      선택 값 :{' '}
                      <Text as="span" fontSize="16px" fontWeight="bold">
                        {selectValue}
                      </Text>{' '}
                      {p.unit}
                    </Text>
                  </Box>
                );
              }
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
            <HStack>
              <Button
                colorScheme="light"
                textAlign="center"
                h="60px"
                w="200px"
                borderRadius="full"
                size="lg"
                onClick={() => Router.push('/more')}
              >
                <Text color="black">돌아가기</Text>
              </Button>
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
            </HStack>
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
                국가 NDC
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
                2050 탄소중립
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
