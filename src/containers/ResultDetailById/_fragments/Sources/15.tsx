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
    val: 42284,
    unit: 'km/년',
    source: '2021 국가교통통계, 국토교통부',
    rowSpan: 12,
  },
  { id: 6, title: '차량별 주행거리(승합)', val: 100531.2, unit: 'km/년' },
  {
    id: 7,
    title: '차량별 km당 연료소비량(승합, 경유)',
    val: 0.102,
    unit: 'L/km',
  },
  {
    id: 8,
    title: '차량별 km당 연료소비량(화물, 경유)',
    val: 0.107,
    unit: 'L/km',
  },
  {
    id: 9,
    title: '사업 활동에 의해 운송된 총 연간 평균 승객수(2020)',
    val: 4104430000,
    unit: '인',
  },
  {
    id: 10,
    title: '사업 활동에 의해 운행된 인당 연간 평균거리(2020)',
    val: 3665.5,
    unit: 'km',
  },
  {
    id: 11,
    title: '베이스라인 차량에 의해 운행된 총 연간 평균 승객수(2019)',
    val: 5794026000,
    unit: '인',
  },
  {
    id: 12,
    title: '베이스라인 차량에 의해 운행된 인당 연간평균거리(2019)',
    val: 5264.2,
    unit: 'km',
  },
  {
    id: 13,
    title: '사업 활동에 의해 운송된 총 연간 평균 화물의 양(2020)',
    val: 974107000,
    unit: 'ton',
  },
  {
    id: 14,
    title: '사업 활동에 의해 운행된 톤당 연간 평균거리(2020)',
    val: 27929.975,
    unit: 'km',
  },
  {
    id: 15,
    title: '베이스라인 차량에 의해 운행된 총 연간 평균 화물의 양(2019)',
    val: 1005866000,
    unit: 'ton',
  },
  {
    id: 16,
    title: '베이스라인 차량에 의해 운행된 톤당 연간평균거리(2019)',
    val: 27929.987,
    unit: 'km',
  },
];

function Sources15() {
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

export default Sources15;
