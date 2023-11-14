import React from 'react';

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

function AdditionalTab({ data }: any) {
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
            {data?.additional?.map((item: any, idx: number) => {
              return (
                <React.Fragment key={idx}>
                  <Tr>
                    {idx === 0 && (
                      <Td
                        bgColor="#FBFBFB"
                        rowSpan={data?.additional?.length * 2 + 1}
                      >
                        <Text>
                          법적.제도적
                          <br />
                          추가성 평가
                        </Text>
                      </Td>
                    )}
                    <Td>{item.id}</Td>
                    <Td maxW="550px" minW="550px">
                      <Text whiteSpace="initial">{item.title}</Text>
                    </Td>
                    <Td>
                      <HStack spacing="10px">
                        <Center
                          bgColor="#000000"
                          w="80px"
                          h="40px"
                          borderRadius="full"
                          cursor="pointer"
                        >
                          <Text color="#FFFFFF">예</Text>
                        </Center>
                        <Center
                          bgColor="#F5F5F5"
                          w="80px"
                          h="40px"
                          borderRadius="full"
                          cursor="pointer"
                        >
                          <Text color="#4C4C4C">아니오</Text>
                        </Center>
                      </HStack>
                    </Td>
                  </Tr>
                  {item.comment ? (
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
                              <Text whiteSpace="initial">{item.comment}</Text>
                            </AccordionPanel>
                          </AccordionItem>
                        </Accordion>
                      </Td>
                    </Tr>
                  ) : (
                    <Tr>
                      <Td colSpan={3} py="0px" bgColor="#FBFBFB">
                        <Center justifyContent="flex-start" h="50px">
                          <Text>해설없음</Text>
                        </Center>
                      </Td>
                    </Tr>
                  )}
                </React.Fragment>
              );
            })}
            <Tr bgColor="#EFF0EE">
              <Td colSpan={2}>
                <Text fontWeight="bold">법적.제도적 추가성 평가 결과</Text>
              </Td>
              <Td>
                <Text fontWeight="bold" textAlign="center">
                  만족
                </Text>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default AdditionalTab;
