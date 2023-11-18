import React, { useEffect, useState } from 'react';

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
} from '@chakra-ui/react';

import { useEvaluationDetailPageContext } from '@/contexts/pages/evaluationDetail/useEvaluationDetailPageContext';

import isEqual from '@/utils/isEqual';

const COLOR = ['red', 'orange', 'yellow'];

function AdditionalTab({ data }: any) {
  const dispatch = useEvaluationDetailPageContext((ctx) => ctx.dispatch);
  const [result, setResult] = useState<any>([]);

  const handleSetResult = (idx: number, item_idx: number, value: boolean) => {
    const current = [...result];
    current[idx].question[item_idx].answer = value;
    setResult(current);
  };

  const collectResult = data?.additional?.map((addition: any) => ({
    id: addition.id,
    question: addition.question.map((question: any) => ({
      id: question.id,
      answer: question.answer,
    })),
  }));

  useEffect(() => {
    const isCorrect = isEqual(result, collectResult);
    dispatch({ type: 'SET_ADDITION_IS_CORRECT', payload: isCorrect });
  }, [result]);

  useEffect(() => {
    const extractedData = data?.additional?.map((addition: any) => ({
      id: addition.id,
      question: addition.question.map((question: any) => ({
        id: question.id,
        answer: null,
      })),
    }));
    setResult(extractedData);
  }, []);

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
            {data?.additional?.map((addition: any, idx: number) => {
              const isCorrect =
                result && isEqual(result[idx], collectResult[idx]);
              return (
                <React.Fragment key={idx}>
                  {addition?.question?.map((item: any, item_idx: number) => {
                    const selectedAnswer =
                      result?.[idx]?.question?.[item_idx]?.answer;
                    return (
                      <React.Fragment key={item_idx}>
                        <Tr>
                          {item_idx === 0 && (
                            <Td
                              bgColor={`${COLOR[idx]}.50`}
                              rowSpan={addition?.question?.length + 2}
                            >
                              <Text textAlign="center" whiteSpace="pre-line">
                                {addition.title}
                              </Text>
                            </Td>
                          )}
                          <Td>{item.id}</Td>
                          <Td maxW="550px" minW="550px">
                            <Text whiteSpace="pre-line">{item.title}</Text>
                          </Td>
                          <Td>
                            <HStack
                              spacing="10px"
                              justifyContent="center"
                              w="100%"
                            >
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
                                  handleSetResult(idx, item_idx, true)
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
                                  handleSetResult(idx, item_idx, false)
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
                            </HStack>
                          </Td>
                        </Tr>
                      </React.Fragment>
                    );
                  })}
                  <Tr bgColor={`${COLOR[idx]}.100`}>
                    <Td colSpan={2}>
                      <Text fontWeight="bold">{addition.result_title}</Text>
                    </Td>
                    <Td>
                      <Text
                        fontWeight="bold"
                        textAlign="center"
                        color={isCorrect ? 'black' : 'red'}
                      >
                        {isCorrect ? '만족' : '불만족'}
                      </Text>
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
                            <Text whiteSpace="pre-line">
                              {addition.comment}
                            </Text>
                          </AccordionPanel>
                        </AccordionItem>
                      </Accordion>
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

export default AdditionalTab;
