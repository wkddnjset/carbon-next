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
    title: 'LNG 순발열량',
    val: 39.4,
    unit: 'MJ/N㎥',
    source: '온실가스 배출권거래제의 배출량 보고 및 인증에 관한 지침',
    rowSpan: 5,
  },
  { id: 2, title: 'LNG 이산화탄소 배출계수', val: 56.1, unit: 'tCO₂/TJ' },
  { id: 3, title: '전력배출계수', val: 0.45941, unit: 'tCO₂-eq/MWh' },
  { id: 4, title: '경유 순발열량', val: 35.2, unit: 'MJ/L' },
  { id: 5, title: '경유 이산화탄소배출계수', val: 73.2, unit: 'tCO₂/TJ' },
  {
    id: 6,
    title: '혐기성 처리과정으로부터 CH₄ 누출량',
    val: 1846.93,
    unit: 'tCO₂-eq/년',
    source:
      '강원바이오에너지 바이오 CNG 생산 및 자동차 연료 이용을 통한 온실가스 감축 사업',
    rowSpan: 8,
  },
  { id: 7, title: '설비운전에 따른 전력사용량', val: 4568, unit: 'MWh/년' },
  { id: 8, title: '바이오 CNG 생산량', val: 2470320, unit: 'N㎥/년' },
  {
    id: 9,
    title: '바이오가스의 물리적 누출 기본배출계수',
    val: 0.05,
    unit: 'tCO₂/TJ',
  },
  { id: 10, title: '바이오가스 중 메탄함유율', val: 61, unit: '%' },
  {
    id: 11,
    title:
      '바이오가스 및 바이오 CNG 제조·정제·압축·저장 및 수송과정에서의 CH₄ 누출량',
    val: 0,
    unit: 'tCO₂-eq/년',
  },
  { id: 12, title: '메탄 생산량', val: 2383858.8, unit: 'Nm³/년' },
  { id: 13, title: '물리적 누출계수', val: 0.0000125, unit: 'tCH₄/m³' },
];

function Sources12() {
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

export default Sources12;
