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
    unit: 'MJ/Nm³',
    source: '온실가스 배출권거래제의 배출량 보고 및 인증에 관한 지침',
    rowSpan: 6,
  },
  { id: 2, title: 'LPG 이산화탄소 배출계수', val: 64, unit: 'gCO₂/MJ' },
  { id: 3, title: '경유 순발열량', val: 35.2, unit: 'MJ/L' },
  { id: 4, title: '경유 이산화탄소배출계수', val: 73.2, unit: 'gCO₂/MJ' },
  { id: 5, title: 'LNG 순발열량', val: 38.9, unit: 'MJ/Nm³' },
  { id: 6, title: 'LNG 이산화탄소 배출계수', val: 56.1, unit: 'gCO₂/MJ' },
  {
    id: 7,
    title: '무시동난방기 연간 누적가동시간',
    val: 292000,
    unit: '초/년',
    source:
      '자동차 무시동 난방장치 부착운영 시범사업, 서울특별시, 2015.4\n경기도 택시의 무시동난방기를 통한 온실가스 감축사업, 주식회사 에코비즈, 2021',
    rowSpan: 2,
  },
  { id: 8, title: '무시동난방기 가동 총 횟수', val: 973, unit: '회/년' },
  {
    id: 9,
    title:
      '무시동난방기 사용 이후에 엔진을 재가동하는데 소모된 연료를 감안하기 위한 시간',
    val: 10,
    unit: '초/회',
    source: '해당 방법론 기본계수',
    rowSpan: 5,
  },
  {
    id: 10,
    title: '차량별 사업 배출계수(택시,LPG)',
    val: 5.382,
    unit: 'gCO₂/회',
  },
  {
    id: 11,
    title: '차량별 사업 배출계수(트럭,경유)',
    val: 6.699,
    unit: 'gCO₂/회',
  },
  {
    id: 12,
    title: '차량별 사업 배출계수(버스,경유)',
    val: 10.564,
    unit: 'gCO₂/회',
  },
  {
    id: 13,
    title: '차량별 사업 배출계수(버스,CNG)',
    val: 21.605,
    unit: 'gCO₂/회',
  },
];

function Sources2() {
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

export default Sources2;
