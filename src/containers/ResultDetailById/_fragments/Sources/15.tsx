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
    title: '전력배출계수',
    val: 0.45941,
    unit: 'tCO₂-eq/MWh',
    source: '온실가스 배출권거래제의 배출량 보고 및 인증에 관한 지침',
    rowSpan: 1,
  },
  {
    id: 2,
    title: '차량별 km당 연료소비량(승용, 휘발유)',
    val: 0.0852272727272727,
    unit: 'L/km',
    source: '2021 국가교통통계, 국토교통부',
    rowSpan: 3,
  },
  {
    id: 3,
    title: '차량별 km당 연료소비량(승합, 경유)',
    val: 0.102040816326531,
    unit: 'L/km',
  },
  {
    id: 4,
    title: '차량별 km당 연료소비량(화물, 경유)',
    val: 0.107142857142857,
    unit: 'L/km',
  },
  {
    id: 5,
    title: '전기차량 km당 전력소비량',
    val: 0.212615166548547,
    unit: 'kWh/km',
    source: '2022 자동차에너지소비효율분석집, 한국에너지공단',
    rowSpan: 1,
  },
];

function Sources13() {
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

export default Sources13;
