import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

import { formatNumberKR } from '@/utils/format/format-number-kr';

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
    val: 13018.3,
    unit: 'km/년',
    source: '2021 국가교통통계, 국토교통부',
    rowSpan: 4,
  },
  {
    id: 6,
    title: '차량별 주행거리(승합)',
    val: 19916.8,
    unit: 'km/년',
  },
  {
    id: 7,
    title: '차량별 km당 연료소비량(승용, 휘발유)',
    val: 0.085,
    unit: 'L/km',
  },
  {
    id: 8,
    title: '차량별 km당 연료소비량(승합, 경유)',
    val: 0.102,
    unit: 'L/km',
  },
  {
    id: 9,
    title: '하이브리드 차량 km당 연료소비량',
    val: 0.049,
    unit: 'L/km',
    source: '2022 자동차에너지소비효율분석집, 한국에너지공단',
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
                <Td isNumeric>{formatNumberKR(item.val)}</Td>
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

export default Sources4;
