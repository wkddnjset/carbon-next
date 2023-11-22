export const FORMULA: any = [
  {
    id: 1,
    const: {
      default: 2318763.24,
    },
    params: [
      {
        id: 1,
        title: '공급하거나 판매한 바이오 CNG 양',
        unit: 'Nm³/년',
        default: 2318763.24,
      },
      {
        id: 2,
        title: '설비 운전 화석연료 사용량',
        unit: 'Nm³,L,ton/년',
        default: 0.0,
      },
      {
        id: 4,
        title: 'CNG 운송용 트럭 평균 용량',
        unit: 'km/Truck',
        default: 200.0,
      },
      { id: 5, title: 'CNG 운송거리', unit: 'Nm³/년', default: 20 },
    ],
    result: [
      {
        id: 1,
        title: '연평균 베이스라인 배출량',
        unit: 'tCO₂-eq/년',
        formula: (params: any) => {
          return params[0].value * 39.4 * 56.1 * Math.pow(10, -6);
        },
      },
      {
        id: 2,
        title: '연평균 사업 배출량',
        unit: 'tCO₂-eq/년',
        formula: (params: any) => {
          return (
            // 전략 사용에 따른 온실가스 배출량
            ((12516 * 365 * Math.pow(10, -3) * params[0].value) / 2318763.24) *
              0.4591 +
            // 화석연료 사용에 따른 온실가스 배출량
            params[1].value * 35.2 * 73.2 * Math.pow(10, -6) +
            // 수송에 따른 온실가스 배출량
            ((282 * 24 * 365 * params[0].value) /
              2318763.24 /
              params[2].value) *
              params[3].value *
              (35.2 * 73.2 * (1 / ((9.2 + 9.3 + 9.5) / 3)) * Math.pow(10, -3)) *
              Math.pow(10, -3) +
            params[3].value +
            // 물리적 누출에 의한 배출
            ((460 * 24 * 365 * params[0].value) / 2318763.24) *
              0.05 *
              0.61 *
              0.0007156 *
              21 +
            //
            ((282 * 24 * 365 * 96.5 * Math.pow(10, -2) * params[0].value) /
              2318763.24) *
              0.0000125 *
              21
          );
        },
      },
      {
        id: 3,
        title: '연평균 온실가스 배출 감축량',
        unit: 'tCO₂-eq/년',
        formula: (params: any) => {
          return (
            params[0].value * 39.4 * 56.1 * Math.pow(10, -6) - // 전략 사용에 따른 온실가스 배출량
            (((12516 * 365 * Math.pow(10, -3) * params[0].value) / 2318763.24) *
              0.4591 +
              // 화석연료 사용에 따른 온실가스 배출량
              params[1].value * 35.2 * 73.2 * Math.pow(10, -6) +
              // 수송에 따른 온실가스 배출량
              ((282 * 24 * 365 * params[0].value) /
                2318763.24 /
                params[2].value) *
                params[3].value *
                (35.2 *
                  73.2 *
                  (1 / ((9.2 + 9.3 + 9.5) / 3)) *
                  Math.pow(10, -3)) *
                Math.pow(10, -3) +
              params[3].value +
              // 물리적 누출에 의한 배출
              ((460 * 24 * 365 * params[0].value) / 2318763.24) *
                0.05 *
                0.61 *
                0.0007156 *
                21 +
              //
              ((282 * 24 * 365 * 96.5 * Math.pow(10, -2) * params[0].value) /
                2318763.24) *
                0.0000125 *
                21)
          );
        },
      },
    ],
  },
  {
    id: 2,
    params: [
      { id: 1, title: 'LPG 택시 차량 대수', unit: '대', default: 1 },
      { id: 2, title: '경유 트럭 차량 대수', unit: '대', default: 1 },
      { id: 3, title: '경유 버스 차량 대수', unit: '대', default: 1 },
      { id: 4, title: 'CNG 버스 차량 대수', unit: '대', default: 1 },
    ],
    result: [
      {
        id: 1,
        title: '연평균 베이스라인 배출량',
        unit: 'tCO₂-eq/년',
        formula: (params: any) => {
          return (
            // 택시 베이스라인 배출량
            0.000288 *
              0.5 *
              58.4 *
              64.0 *
              292000 *
              params[0].value *
              Math.pow(10, -6) +
            // 화물차량 베이스라인 배출량
            0.00026 *
              35.2 *
              73.2 *
              292000 *
              params[1].value *
              Math.pow(10, -6) +
            // 승합차량(경유) 베이스라인 배출량
            0.00041 *
              35.2 *
              73.2 *
              292000 *
              params[2].value *
              Math.pow(10, -6) +
            // 승합차량(CNG) 베이스라인 배출량
            0.00099 * 38.9 * 56.1 * 292000 * params[3].value * Math.pow(10, -6)
          );
        },
      },
      {
        id: 2,
        title: '연평균 사업 배출량',
        unit: 'tCO₂-eq/년',
        formula: (params: any) => {
          return (
            973.333333333333 *
            (0.000288 * 0.5 * 58.4 * 64.0 * 10 * params[0].value +
              0.00026 * 35.2 * 73.2 * 10 * params[1].value +
              0.00041 * 35.2 * 73.2 * 10 * params[2].value +
              0.00099 * 38.9 * 56.1 * 10 * params[3].value) *
            Math.pow(10, -6)
          );
        },
      },
      {
        id: 3,
        title: '연평균 온실가스 배출 감축량',
        unit: 'tCO₂-eq/년',
        formula: (params: any) => {
          return (
            // 택시 베이스라인 배출량
            0.000288 *
              0.5 *
              58.4 *
              64.0 *
              292000 *
              params[0].value *
              Math.pow(10, -6) +
            // 화물차량 베이스라인 배출량
            0.00026 *
              35.2 *
              73.2 *
              292000 *
              params[1].value *
              Math.pow(10, -6) +
            // 승합차량(경유) 베이스라인 배출량
            0.00041 *
              35.2 *
              73.2 *
              292000 *
              params[2].value *
              Math.pow(10, -6) +
            // 승합차량(CNG) 베이스라인 배출량
            0.00099 *
              38.9 *
              56.1 *
              292000 *
              params[3].value *
              Math.pow(10, -6) -
            973.333333333333 *
              (0.000288 * 0.5 * 58.4 * 64.0 * 10 * params[0].value +
                0.00026 * 35.2 * 73.2 * 10 * params[1].value +
                0.00041 * 35.2 * 73.2 * 10 * params[2].value +
                0.00099 * 38.9 * 56.1 * 10 * params[3].value) *
              Math.pow(10, -6)
          );
        },
      },
    ],
  },
  {
    id: 3,
    params: [
      { id: 1, title: '승용 차량 대수', unit: '대', default: 2318763.24 },
      { id: 2, title: '승합 차량 대수', unit: '대', default: 0.0 },
      { id: 4, title: '화물 차량 대수', unit: '대', default: 200.0 },
      { id: 5, title: '전기 버스 대체 대수', unit: '대', default: 20 },
    ],
    result: [
      {
        id: 1,
        title: '연평균 베이스라인 배출량',
        unit: 'Nm³',
        formula: (params: any) => {
          console.log(params);
          return 0;
        },
      },
      {
        id: 2,
        title: '설비운전',
        unit: 'Nm³',
        formula: (params: any) => {
          console.log(params);
          return 0;
        },
      },
      {
        id: 4,
        title: 'CNG운송용',
        unit: 'km',
        formula: (params: any) => {
          console.log(params);
          return 0;
        },
      },
      {
        id: 5,
        title: 'CNG',
        unit: 'Nm³',
        formula: (params: any) => {
          console.log(params);
          return 0;
        },
      },
    ],
  },
  {
    id: 4,
    params: [
      { id: 1, title: '승용 차량 대수', unit: '대', default: 2318763.24 },
      { id: 2, title: '승합 차량 대수', unit: '대', default: 0.0 },
    ],
    result: [
      {
        id: 1,
        title: '공급하거나',
        unit: 'Nm³',
        formula: (params: any) => {
          console.log(params);
          return 0;
        },
      },
      {
        id: 2,
        title: '설비운전',
        unit: 'Nm³',
        formula: (params: any) => {
          console.log(params);
          return 0;
        },
      },
      {
        id: 4,
        title: 'CNG운송용',
        unit: 'km',
        formula: (params: any) => {
          console.log(params);
          return 0;
        },
      },
      {
        id: 5,
        title: 'CNG',
        unit: 'Nm³',
        formula: (params: any) => {
          console.log(params);
          return 0;
        },
      },
    ],
  },
  {
    id: 5,
    params: [
      {
        id: 1,
        title: '수소전기차량(승용) 대수',
        unit: '대',
        default: 2318763.24,
      },
      { id: 2, title: '수소전기차량(화물) 대수', unit: '대', default: 0.0 },
    ],
    result: [
      {
        id: 1,
        title: '공급하거나',
        unit: 'Nm³',
        formula: (params: any) => {
          console.log(params);
          return 0;
        },
      },
      {
        id: 2,
        title: '설비운전',
        unit: 'Nm³',
        formula: (params: any) => {
          console.log(params);
          return 0;
        },
      },
      {
        id: 4,
        title: 'CNG운송용',
        unit: 'km',
        formula: (params: any) => {
          console.log(params);
          return 0;
        },
      },
      {
        id: 5,
        title: 'CNG',
        unit: 'Nm³',
        formula: (params: any) => {
          console.log(params);
          return 0;
        },
      },
    ],
  },
  {
    id: 6,
    params: [
      { id: 1, title: '경유 승용 차량 대수', unit: '대', default: 2318763.24 },
      { id: 2, title: '휘발유 승용 차량 대수', unit: '대', default: 0.0 },
    ],
    result: [
      {
        id: 1,
        title: '공급하거나',
        unit: 'Nm³',
        formula: (params: any) => {
          console.log(params);
          return 0;
        },
      },
      {
        id: 2,
        title: '설비운전',
        unit: 'Nm³',
        formula: (params: any) => {
          console.log(params);
          return 0;
        },
      },
      {
        id: 4,
        title: 'CNG운송용',
        unit: 'km',
        formula: (params: any) => {
          console.log(params);
          return 0;
        },
      },
      {
        id: 5,
        title: 'CNG',
        unit: 'Nm³',
        formula: (params: any) => {
          console.log(params);
          return 0;
        },
      },
    ],
  },
  {
    id: 7,
    params: [
      {
        id: 1,
        title: '공유자전거 총 이용자 수',
        unit: '명',
        default: 2318763.24,
      },
      { id: 2, title: '전기 자전거 총 이동거리', unit: 'km', default: 0.0 },
    ],
    result: [
      {
        id: 1,
        title: '공급하거나',
        unit: 'Nm³',
        formula: (params: any) => {
          console.log(params);
          return 0;
        },
      },
      {
        id: 2,
        title: '설비운전',
        unit: 'Nm³',
        formula: (params: any) => {
          console.log(params);
          return 0;
        },
      },
      {
        id: 4,
        title: 'CNG운송용',
        unit: 'km',
        formula: (params: any) => {
          console.log(params);
          return 0;
        },
      },
      {
        id: 5,
        title: 'CNG',
        unit: 'Nm³',
        formula: (params: any) => {
          console.log(params);
          return 0;
        },
      },
    ],
  },
  {
    id: 8,
    params: [
      {
        id: 1,
        title: '공항특수차량 화석연료 연간 사용량',
        unit: 'Nm³',
        default: 2318763.24,
      },
      {
        id: 2,
        title: '공항 특수차량 연간 가동시간',
        unit: 'Nm³',
        default: 0.0,
      },
      { id: 4, title: '공항특수차량 물동량', unit: 'km', default: 200.0 },
      {
        id: 5,
        title: '전기 공항특수차량 전력 사용량',
        unit: 'Nm³',
        default: 20,
      },
    ],
    result: [
      {
        id: 1,
        title: '공급하거나',
        unit: 'Nm³',
        formula: (params: any) => {
          console.log(params);
          return 0;
        },
      },
      {
        id: 2,
        title: '설비운전',
        unit: 'Nm³',
        formula: (params: any) => {
          console.log(params);
          return 0;
        },
      },
      {
        id: 4,
        title: 'CNG운송용',
        unit: 'km',
        formula: (params: any) => {
          console.log(params);
          return 0;
        },
      },
      {
        id: 5,
        title: 'CNG',
        unit: 'Nm³',
        formula: (params: any) => {
          console.log(params);
          return 0;
        },
      },
    ],
  },
  {
    id: 9,
    params: [
      {
        id: 1,
        title: '선박으로 운송된 화물의 양',
        unit: 'Nm³',
        default: 2318763.24,
      },
      {
        id: 2,
        title: '화물 운송 기본배출계수(화물유형 선택)',
        unit: 'Nm³',
        default: 0.0,
      },
      { id: 4, title: '화물 반송량', unit: 'km', default: 200.0 },
    ],
    result: [
      {
        id: 1,
        title: '공급하거나',
        unit: 'Nm³',
        formula: (params: any) => {
          console.log(params);
          return 0;
        },
      },
      {
        id: 2,
        title: '설비운전',
        unit: 'Nm³',
        formula: (params: any) => {
          console.log(params);
          return 0;
        },
      },
      {
        id: 4,
        title: 'CNG운송용',
        unit: 'km',
        formula: (params: any) => {
          console.log(params);
          return 0;
        },
      },
      {
        id: 5,
        title: 'CNG',
        unit: 'Nm³',
        formula: (params: any) => {
          console.log(params);
          return 0;
        },
      },
    ],
  },
  {
    id: 10,
    params: [
      {
        id: 1,
        title: '운송되는 화석연료의 양',
        unit: 'Nm³',
        default: 2318763.24,
      },
      {
        id: 2,
        title: '파이프라인 시스템 전력 사용량',
        unit: 'Nm³',
        default: 0.0,
      },
      {
        id: 4,
        title: '파이프라인 시스템 화석연료 사용량',
        unit: 'km',
        default: 200.0,
      },
    ],
    result: [
      {
        id: 1,
        title: '공급하거나',
        unit: 'Nm³',
        formula: (params: any) => {
          console.log(params);
          return 0;
        },
      },
      {
        id: 2,
        title: '설비운전',
        unit: 'Nm³',
        formula: (params: any) => {
          console.log(params);
          return 0;
        },
      },
      {
        id: 4,
        title: 'CNG운송용',
        unit: 'km',
        formula: (params: any) => {
          console.log(params);
          return 0;
        },
      },
      {
        id: 5,
        title: 'CNG',
        unit: 'Nm³',
        formula: (params: any) => {
          console.log(params);
          return 0;
        },
      },
    ],
  },
  {
    id: 11,
    params: [
      { id: 1, title: '경유 승용 차량 대수', unit: 'Nm³', default: 2318763.24 },
      { id: 2, title: '휘발유 승용 차량 대수', unit: 'Nm³', default: 0.0 },
      { id: 4, title: '승합 차량 대수', unit: 'km', default: 200.0 },
    ],
    result: [
      {
        id: 1,
        title: '공급하거나',
        unit: 'Nm³',
        formula: (params: any) => {
          console.log(params);
          return 0;
        },
      },
      {
        id: 2,
        title: '설비운전',
        unit: 'Nm³',
        formula: (params: any) => {
          console.log(params);
          return 0;
        },
      },
      {
        id: 4,
        title: 'CNG운송용',
        unit: 'km',
        formula: (params: any) => {
          console.log(params);
          return 0;
        },
      },
      {
        id: 5,
        title: 'CNG',
        unit: 'Nm³',
        formula: (params: any) => {
          console.log(params);
          return 0;
        },
      },
    ],
  },
  {
    id: 12,
    params: [
      {
        id: 1,
        title: '바이오 CNG 방법론과 동일',
        unit: 'Nm³',
        default: 2318763.24,
      },
    ],
    result: [
      {
        id: 1,
        title: '공급하거나',
        unit: 'Nm³',
        formula: (params: any) => {
          console.log(params);
          return 0;
        },
      },
      {
        id: 2,
        title: '설비운전',
        unit: 'Nm³',
        formula: (params: any) => {
          console.log(params);
          return 0;
        },
      },
      {
        id: 4,
        title: 'CNG운송용',
        unit: 'km',
        formula: (params: any) => {
          console.log(params);
          return 0;
        },
      },
      {
        id: 5,
        title: 'CNG',
        unit: 'Nm³',
        formula: (params: any) => {
          console.log(params);
          return 0;
        },
      },
    ],
  },
  {
    id: 13,
    params: [
      { id: 1, title: '경유 승용 차량 대수 ', unit: '대', default: 2318763.24 },
      { id: 2, title: '휘발유 승용 차량 대수', unit: '대', default: 0.0 },
      { id: 4, title: '승합 차량 대수', unit: '대', default: 200.0 },
      { id: 5, title: '화물 차량 대수', unit: '대', default: 20 },
      { id: 5, title: '기술 선택', unit: 'Nm³', default: 20 },
    ],
    result: [
      {
        id: 1,
        title: '공급하거나',
        unit: 'Nm³',
        formula: (params: any) => {
          console.log(params);
          return 0;
        },
      },
      {
        id: 2,
        title: '설비운전',
        unit: 'Nm³',
        formula: (params: any) => {
          console.log(params);
          return 0;
        },
      },
      {
        id: 4,
        title: 'CNG운송용',
        unit: 'km',
        formula: (params: any) => {
          console.log(params);
          return 0;
        },
      },
      {
        id: 5,
        title: 'CNG',
        unit: 'Nm³',
        formula: (params: any) => {
          console.log(params);
          return 0;
        },
      },
    ],
  },
  {
    id: 14,
    params: [
      {
        id: 1,
        title: '승용 차량 충전량 합계',
        unit: 'Nm³',
        default: 2318763.24,
      },
      { id: 2, title: '승합 차량 충전량 합계', unit: 'Nm³', default: 0.0 },
      { id: 4, title: '화물 차량 충전량 합계', unit: 'km', default: 200.0 },
    ],
    result: [
      {
        id: 1,
        title: '공급하거나',
        unit: 'Nm³',
        formula: (params: any) => {
          console.log(params);
          return 0;
        },
      },
      {
        id: 2,
        title: '설비운전',
        unit: 'Nm³',
        formula: (params: any) => {
          console.log(params);
          return 0;
        },
      },
      {
        id: 4,
        title: 'CNG운송용',
        unit: 'km',
        formula: (params: any) => {
          console.log(params);
          return 0;
        },
      },
      {
        id: 5,
        title: 'CNG',
        unit: 'Nm³',
        formula: (params: any) => {
          console.log(params);
          return 0;
        },
      },
    ],
  },
  {
    id: 15,
    params: [
      { id: 1, title: '승합 차량 대수', unit: '대', default: 2318763.24 },
      { id: 2, title: '화물 차량 대수', unit: '대', default: 0.0 },
      {
        id: 4,
        title: '승합 차량 화석연료 소비량(주유량 또는 구매량)',
        unit: 'km',
        default: 200.0,
      },
      {
        id: 5,
        title: '화물 차량 화석연료 소비량(주유량 또는 구매량)',
        unit: 'Nm³',
        default: 20,
      },
    ],
    result: [
      {
        id: 1,
        title: '공급하거나',
        unit: 'Nm³',
        formula: (params: any) => {
          console.log(params);
          return 0;
        },
      },
      {
        id: 2,
        title: '설비운전',
        unit: 'Nm³',
        formula: (params: any) => {
          console.log(params);
          return 0;
        },
      },
      {
        id: 4,
        title: 'CNG운송용',
        unit: 'km',
        formula: (params: any) => {
          console.log(params);
          return 0;
        },
      },
      {
        id: 5,
        title: 'CNG',
        unit: 'Nm³',
        formula: (params: any) => {
          console.log(params);
          return 0;
        },
      },
    ],
  },
];
