import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

const DATA = [
  {
    id: 1,
    title: '베이스라인 운송거리',
    val: 260.833333333333,
    unit: 'km',
    source: '화물운송시장 동향 보고서, 한국교통연구원',
    rowSpan: 1,
  },
  {
    id: 2,
    title: '컨테이너 선박 운송 기본 배출계수',
    val: '',
    unit: 'gCO₂/tkm',
    source: '방법론 참고(화물 유형별 상이)',
    rowSpan: 1,
  },
];

function Sources9() {
  return (
    <TableContainer pt="30px" pb="20px">
      <Table size="sm">
        <Thead>
          <Tr>
            <Th>구분</Th>
            <Th>인자정보</Th>
            <Th isNumeric>값</Th>
            <Th>단위</Th>
            <Th textAlign="center">출처</Th>
          </Tr>
        </Thead>
        <Tbody>
          {DATA.map((item) => {
            return (
              <Tr key={item.id}>
                <Td>{item.id}</Td>
                <Td>{item.title}</Td>
                <Td isNumeric>{item.val}</Td>
                <Td>{item.unit}</Td>
                {item?.source && (
                  <Td rowSpan={item.rowSpan} textAlign="center">
                    {item.source}
                  </Td>
                )}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default Sources9;
