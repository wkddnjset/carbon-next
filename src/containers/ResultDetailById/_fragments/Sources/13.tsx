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
    source: '2021 국가교통통계, 국토교통부',
    rowSpan: 6,
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
    title: '차량별 km당 연료소비량(승용, 경유)',
    val: 0.079155672823219,
    unit: 'L/km',
  },
  {
    id: 9,
    title: '차량별 km당 연료소비량(승합, 경유)',
    val: 0.102040816326531,
    unit: 'L/km',
  },
  {
    id: 10,
    title: '차량별 km당 연료소비량(화물, 경유)',
    val: 0.107142857142857,
    unit: 'L/km',
  },
  {
    id: 11,
    title: '화물차량 총 중량',
    val: 52,
    unit: 'ton',
    source: '25톤 윙바디 최대적재량 적용',
    rowSpan: 1,
  },
  {
    id: 12,
    title: '화물차량 톤키로',
    val: 1352160,
    unit: 'tkm',
    source: '화물운송시작 동향 연간 보고서, 한국교통연구원',
    rowSpan: 1,
  },
  {
    id: 13,
    title: '타이어 저항 감소 연비 개선율',
    val: 0.011,
    unit: '-',
    source:
      '타이어 회전저항 계수가 차량의 연비 및 CO2 배출량에 미치는 영향에 관한 연구, 2018',
    rowSpan: 1,
  },
  {
    id: 14,
    title: '에어컨 시스템 개선 연비개선율',
    val: 0.21,
    unit: '-',
    source:
      'Design and Implementation of a Low-Energy-Consumption Air-Conditioning Control System for Smart Vehicle, 2019',
    rowSpan: 1,
  },
  {
    id: 15,
    title: '저점도 엔진오일 적용 연비개선율(승용)',
    val: 0.02,
    unit: '-',
    source:
      'Improved fleet operation and maintanance through the use of low viscosity engine oils: Fuel economy and Oil performance, 2020',
    rowSpan: 1,
  },
  {
    id: 16,
    title: '저점도 엔진오일 적용 연비개선율(승합)',
    val: 0.0165,
    unit: '-',
    source:
      '엔진오일의 저점도화가 차량 연비에 미치는 영향에 관한 실험적 연구, 2006',
    rowSpan: 1,
  },
  {
    id: 17,
    title: '저점도 엔진오일 적용 연비개선율(화물)',
    val: 0.005,
    unit: '-',
    source: '국내 저점도 엔진오일 방법론 기본값 적용',
    rowSpan: 1,
  },
  {
    id: 18,
    title: '공기역학적 저항 감소(승용)',
    val: 0.05,
    unit: '-',
    source:
      'Review of Research on Vehicles Aerodynamic Drag Reduction Methods, 2014',
    rowSpan: 1,
  },
  {
    id: 19,
    title: '공기역학적 저항 감소(승합)',
    val: 0.0177,
    unit: '-',
    source:
      'CFD Analysis of aerodynamic drag reduction and improve fuel economy, 2014',
    rowSpan: 1,
  },
  {
    id: 20,
    title: '공기역학적 저항 감소(화물)',
    val: 0.0394,
    unit: '-',
    source:
      'Improving Fuel Efficiency of Tractor Trailer Trucks with Deturbulator Aero-Drag Reduction, 2008',
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
