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
    title: 'B-C유 순발열량',
    val: 39.2,
    unit: 'MJ/L',
    source: '온실가스 배출권거래제의 배출량 보고 및 인증에 관한 지침',
    rowSpan: 3,
  },
  { id: 2, title: 'B-C 이산화탄소배출계수', val: 80.3, unit: 'tCO₂/TJ' },
  { id: 3, title: '전력배출계수', val: 0.45941, unit: 'tCO₂-eq/MWh' },
  {
    id: 4,
    title: '베이스라인 운송거리',
    val: 260.83,
    unit: 'km',
    source: '화물운송시장 동향 보고서, 한국교통연구원',
    rowSpan: 1,
  },
  {
    id: 5,
    title: '화물운송 베이스라인 배출계수',
    val: 76,
    unit: 'gCO₂/tkm',
    source: '방법론 참고(고체광물 연료, 석유제품)',
    rowSpan: 1,
  },
];

function Sources10() {
  return (
    <TableContainer pt="30px" pb="20px">
      <Table size="sm">
        <Thead>
          <Tr>
            <Th>구분</Th>
            <Th textAlign="center">인자정보</Th>
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
                <Td textAlign="center">{item.title}</Td>
                <Td isNumeric>{item.val}</Td>
                <Td>{item.unit}</Td>
                {item?.source && (
                  <Td rowSpan={item.rowSpan} textAlign="left">
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

export default Sources10;
