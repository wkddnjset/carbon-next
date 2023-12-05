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
    title: '경유 순발열량',
    val: 35.2,
    unit: 'MJ/L',
    source: '온실가스 배출권거래제의 배출량 보고 및 인증에 관한 지침',
    rowSpan: 2,
  },
  { id: 2, title: '경유 이산화탄소배출계수', val: 73.2, unit: 'tCO₂/TJ' },
  {
    id: 3,
    title: '셀토스디젤 km당 연료소비량',
    val: 0.057,
    unit: 'L/km',
    source: '전기차량 베이스라인 차량 선정 프로그램, 한국교통안전공단',
    rowSpan: 1,
  },
  {
    id: 4,
    title: '현대 엑시언트 km당 연료소비량',
    val: 0.27,
    unit: 'L/km',
    source: '국토교통부',
    rowSpan: 1,
  },
  {
    id: 5,
    title: '차량별 주행거리(승용)',
    val: 13018.3,
    unit: 'km/년',
    source: '2021 국가교통통계, 국토교통부',
    rowSpan: 1,
  },
  {
    id: 6,
    title: '화물차량 톤키로',
    val: 1511481.6,
    unit: 'tkm',
    source: '화물운송시장 동향 연간보고서',
    rowSpan: 1,
  },
  {
    id: 7,
    title: '넥쏘 수소 1kg당 주행거리',
    val: 88,
    unit: 'km/kg',
    source: '넥쏘 카탈로그',
    rowSpan: 1,
  },
  {
    id: 8,
    title: '현대 엑시언트FCEV 수소 소비량',
    val: 18.39,
    unit: 'km/kg',
    source: '항속거리/수소충전량',
    rowSpan: 1,
  },
  {
    id: 9,
    title: '수소 순발열량',
    val: 119.93,
    unit: 'MJ/kg',
    source: 'EG-TIPS 에너지온실가스 종합정보 플랫폼',
    rowSpan: 1,
  },
  {
    id: 10,
    title: '수소 생산 배출계수',
    val: 0.0033,
    unit: 'tCO₂/kgH₂',
    source:
      '2019 Refinement to the 2006 IPCC Guideline for National Greenhouse Gas Inventories',
    rowSpan: 1,
  },
];

function Sources5() {
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

export default Sources5;
