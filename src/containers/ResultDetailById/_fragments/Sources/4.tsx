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
    title: '휘발유 순발열량',
    val: 30.4,
    unit: 'MJ/L',
    source: '온실가스 배출권거래제의 배출량 보고 및 인증에 관한 지침',
    rowSpan: 4,
  },
  { id: 2, title: '휘발유 이산화탄소 배출계수', val: 71.6, unit: 'tCO₂/TJ' },
  { id: 3, title: '경유 순발열량', val: 35.2, unit: 'MJ/L' },
  { id: 4, title: '경유 이산화탄소배출계수', val: 73.2, unit: 'tCO₂/TJ' },
  {
    id: 5,
    title: '차량별 주행거리(승용)',
    val: 13018.3333333333,
    unit: 'km/년',
    source: '온실가스 배출권거래제의 배출량 보고 및 인증에 관한 지침',
    rowSpan: 4,
  },
  {
    id: 6,
    title: '차량별 주행거리(승합)',
    val: 19916.8333333333,
    unit: 'km/년',
  },
  {
    id: 7,
    title: '차량별 km당 연료소비량(승용, 휘발유)',
    val: 0.0852272727272727,
    unit: 'L/km',
  },
  {
    id: 8,
    title: '차량별 km당 연료소비량(승합, 경유)',
    val: 0.102040816326531,
    unit: 'L/km',
  },
  {
    id: 9,
    title: '하이브리드 차량 km당 연료소비량',
    val: 0.0485044462409054,
    unit: 'L/km',
    source: '온실가스 배출권거래제의 배출량 보고 및 인증에 관한 지침',
    rowSpan: 1,
  },
];

function Sources4() {
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

export default Sources4;