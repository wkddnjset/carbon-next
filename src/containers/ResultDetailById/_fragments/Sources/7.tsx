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
    title: 'LPG 순발열량',
    val: 58.4,
    unit: 'MJ/N㎥',
    source: '온실가스 배출권거래제의 배출량 보고 및 인증에 관한 지침',
    rowSpan: 7,
  },
  { id: 2, title: 'LPG 이산화탄소 배출계수', val: 64, unit: 'tCO₂/TJ' },
  { id: 3, title: '경유 순발열량', val: 35.2, unit: 'MJ/L' },
  { id: 4, title: '경유 이산화탄소배출계수', val: 73.2, unit: 'tCO₂/TJ' },
  { id: 5, title: '휘발유 순발열량', val: 30.4, unit: 'MJ/L' },
  { id: 6, title: '휘발유 이산화탄소배출계수', val: 71.6, unit: 'tCO₂/TJ' },
  { id: 7, title: '전력배출계수', val: 0.45941, unit: 'tCO₂-eq/MWh' },
  {
    id: 8,
    title: '재배치 차량 km당 연료사용량(경유)',
    val: 0.113636363636364,
    unit: 'L/km',
    source: '2021 국가교통통계, 국토교통부',
    rowSpan: 2,
  },
  {
    id: 9,
    title: '재배치 차량 km당 연료사용량(LPG)',
    val: 0.15625,
    unit: 'L/km',
  },
  {
    id: 10,
    title: '자가용으로부터 대체된 이용자의 평균 이동거리',
    val: '',
    unit: '',
    source: '따릉이 도입을 통한 온실가스 감축사업, 티머니, 2023',
    rowSpan: 3,
  },
  { id: 11, title: '대체된 이용자의 점유율', val: '', unit: '' },
  { id: 12, title: '재배치 차량의 주행거리', val: '', unit: '' },
  {
    id: 13,
    title: '전기자전거 충전 기본배출계수',
    val: 0.015,
    unit: 'kWh/km',
    source: '방법론',
    rowSpan: 1,
  },
];

function Sources7() {
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

export default Sources7;
