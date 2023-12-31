import React, { useEffect, useMemo, useState } from 'react';

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Center,
  HStack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from '@chakra-ui/react';

import { useEvaluationDetailPageContext } from '@/contexts/pages/evaluationDetail/useEvaluationDetailPageContext';

import { DATA } from '@/constants/data';
import isEqual from '@/utils/isEqual';

const COLOR = ['cyan', 'purple', 'blue', 'pink'];

function MethodologyTab({ id }: any) {
  const dispatch = useEvaluationDetailPageContext((ctx) => ctx.dispatch);
  const [result, setResult] = useState<any>([]);

  const data: any = useMemo(() => {
    return id ? DATA.filter((item) => item.id === Number(id))[0] : null;
  }, [id]);

  const handleSetResult = (idx: number, item_idx: number, value: any) => {
    const current = [...result];
    current[idx].question[item_idx].answer = value;
    setResult(current);
  };

  const collectResult = data?.methodology?.map((method: any) => ({
    id: method.id,
    question: method.question.map((question: any) => ({
      id: question.id,
      answer: question.answer,
    })),
  }));

  const trueResult = data?.methodology?.map((method: any) => ({
    id: method.id,
    question: method.question.map((question: any) => ({
      id: question.id,
      answer: true,
    })),
  }));

  const nullResult = data?.methodology?.map((method: any) => ({
    id: method.id,
    question: method.question.map((question: any) => ({
      id: question.id,
      answer: null,
    })),
  }));

  useEffect(() => {
    const isCorrect = isEqual(result, collectResult);
    dispatch({ type: 'SET_METHOD_IS_CORRECT', payload: isCorrect });
  }, [result]);

  useEffect(() => {
    const extractedData = data?.methodology?.map((addition: any) => ({
      id: addition.id,
      question: addition.question.map((question: any) => ({
        id: question.id,
        answer: undefined,
      })),
    }));
    setResult(extractedData);
  }, [data]);

  return (
    <Box mt="40px">
      <TableContainer>
        <Table variant="simple" size="md">
          <Thead
            bgColor="#FBFBFB"
            borderBottomWidth="2px"
            borderColor="#CDCDCD"
          >
            <Tr>
              <Th>
                <Text textAlign="center" fontSize="15px" color="#4C4C4C">
                  평가구분
                </Text>
              </Th>
              <Th colSpan={2}>
                <Text textAlign="center" fontSize="15px" color="#4C4C4C">
                  평가 내용
                </Text>
              </Th>
              <Th>
                <Text textAlign="center" fontSize="15px" color="#4C4C4C">
                  자체평가
                </Text>
              </Th>
            </Tr>
          </Thead>
          <Tbody borderBottomWidth="2px" borderColor="#CDCDCD">
            {data?.methodology?.map((method: any, idx: number) => {
              const isCorrect =
                result && isEqual(result[idx], collectResult[idx]);
              const isNull =
                result && isEqual(collectResult[idx], nullResult[idx]);
              const isTrue = result && isEqual(result[idx], trueResult[idx]);
              return (
                <React.Fragment key={idx}>
                  {method?.question?.map((item: any, item_idx: number) => {
                    const selectedAnswer =
                      result?.[idx]?.question?.[item_idx]?.answer;
                    return (
                      <React.Fragment key={item_idx}>
                        <Tr>
                          {item_idx === 0 && (
                            <Td
                              bgColor={`${COLOR[idx]}.50`}
                              rowSpan={method?.question?.length * 2 + 1}
                              whiteSpace="pre-line"
                              textAlign="center"
                            >
                              {method.title}
                            </Td>
                          )}
                          <Td>{item.id}</Td>
                          <Td maxW="550px" minW="550px">
                            <Text whiteSpace="pre-line">{item.title}</Text>
                          </Td>
                          <Td>
                            <VStack>
                              <HStack
                                spacing="10px"
                                justifyContent="center"
                                w="100%"
                              >
                                <>
                                  <Center
                                    bgColor={
                                      selectedAnswer === true
                                        ? '#000000'
                                        : '#F5F5F5'
                                    }
                                    w="80px"
                                    h="40px"
                                    borderRadius="full"
                                    cursor="pointer"
                                    onClick={() =>
                                      selectedAnswer === true
                                        ? handleSetResult(
                                            idx,
                                            item_idx,
                                            undefined,
                                          )
                                        : handleSetResult(idx, item_idx, true)
                                    }
                                  >
                                    <Text
                                      color={
                                        selectedAnswer === true
                                          ? '#FFFFFF'
                                          : '#4C4C4C'
                                      }
                                    >
                                      예
                                    </Text>
                                  </Center>
                                  <Center
                                    bgColor={
                                      selectedAnswer === false
                                        ? '#000000'
                                        : '#F5F5F5'
                                    }
                                    w="80px"
                                    h="40px"
                                    borderRadius="full"
                                    cursor="pointer"
                                    onClick={() =>
                                      selectedAnswer === false
                                        ? handleSetResult(
                                            idx,
                                            item_idx,
                                            undefined,
                                          )
                                        : handleSetResult(idx, item_idx, false)
                                    }
                                  >
                                    <Text
                                      color={
                                        selectedAnswer === false
                                          ? '#FFFFFF'
                                          : '#4C4C4C'
                                      }
                                    >
                                      아니오
                                    </Text>
                                  </Center>
                                </>
                              </HStack>
                              {item.answer === null && (
                                <Center
                                  bgColor={
                                    selectedAnswer === null
                                      ? '#000000'
                                      : '#F5F5F5'
                                  }
                                  w="170px"
                                  h="40px"
                                  borderRadius="full"
                                  cursor="pointer"
                                  onClick={() =>
                                    selectedAnswer === null
                                      ? handleSetResult(
                                          idx,
                                          item_idx,
                                          undefined,
                                        )
                                      : handleSetResult(idx, item_idx, null)
                                  }
                                >
                                  <Text
                                    color={
                                      selectedAnswer === null
                                        ? '#FFFFFF'
                                        : '#4C4C4C'
                                    }
                                  >
                                    해당없음
                                  </Text>
                                </Center>
                              )}
                            </VStack>
                          </Td>
                        </Tr>
                        <Tr>
                          <Td colSpan={3} p="0px">
                            <Accordion allowToggle>
                              <AccordionItem bgColor="#FBFBFB">
                                <AccordionButton minH="50px">
                                  <Box as="span" textAlign="left">
                                    해설보기
                                  </Box>
                                  <AccordionIcon ml="10px" />
                                </AccordionButton>
                                <AccordionPanel p="20px">
                                  <Text
                                    whiteSpace="pre-line"
                                    wordBreak="break-word"
                                  >
                                    {item.comment}
                                  </Text>
                                </AccordionPanel>
                              </AccordionItem>
                            </Accordion>
                          </Td>
                        </Tr>
                      </React.Fragment>
                    );
                  })}
                  <Tr bgColor={`${COLOR[idx]}.100`}>
                    <Td colSpan={2}>
                      <Text fontWeight="bold">{method.result_title}</Text>
                    </Td>
                    <Td>
                      <Text
                        fontWeight="bold"
                        textAlign="center"
                        color={
                          isCorrect || (isNull && isTrue) ? 'black' : 'red'
                        }
                      >
                        {isCorrect
                          ? isNull
                            ? '해당없음'
                            : '만족'
                          : isNull && isTrue
                          ? '만족'
                          : '불만족'}
                      </Text>
                    </Td>
                  </Tr>
                </React.Fragment>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default MethodologyTab;
