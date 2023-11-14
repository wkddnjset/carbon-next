export const DATA = [
  {
    id: 1,
    title: '바이오 CNG 생산 및\n자동차 연료 이용\n사업의 방법론',
    shortTitle: '바이오 CNG',
    description:
      '유기성 폐기물 바이오매스로부터 발생된 바이오가스를 이용하여 바이오CNG를 생산하고 자동차의 연료로 사용하여 기존 화석연료 기반의 CNG를 대체함으로써 온실가스를 감축',
    subTitle: '07A-001-Ver01',
    icon: '/images/main/icon_1.png',
    methodology: {
      possible: [
        {
          id: 1,
          title: '바이오 CNG가 유기성폐기물 바이오매스에 의해 생산되어졌는가?',
          comment:
            '유기성 폐기물 바이오매스에 의해 생산된 Bio-CNG에 한하여 본 방법론 적용이 가능하다.',
          answer: true,
        },
        {
          id: 2,
          title:
            '본 사업을 통해 생산된 바이오 CNG가 차량의 연료로서 사용되어졌는가?',
          comment:
            '본 방법론은 바이오 CNG 생산 및 자동차 연료 이용 사업의 방법론으로 생산된 Bio-CNG가 차량의 연료로 이용되어야 한다.',
          answer: true,
        },
        {
          id: 3,
          title:
            '바이오 CNG가 일반 CNG 차량 및 개조된 CNG 차량에 사용되어졌는가?',
          comment:
            '생산된 Bio-CNG가 해당 연료를 이용하는 차량에 사용되어야 한다.',
          answer: true,
        },
        {
          id: 4,
          title:
            '바이오 CNG 생산을 위해 생산 및/또는 공급된 바이오가스는 유기성 폐기물의 혐기적 소화작용에 의해 생성된 것이며, 기존에 에너지화되지 않는것인가?',
          comment:
            '본 방법론의 산정과정에서 혐기성 처리과정으로부터의 CH4 누출량이 존재하며 이를 만족하기 위해 바이오 CNG는 유기성 폐기물의 혐기적 소화작용에 의해 생성되어야 하고, 에너지로써 사용되고 있지 않아야 한다.',
          answer: true,
        },
        {
          id: 5,
          title: '생산된 바이오가스의 메탄 함량이 국가기준에 부합된 것인가?',
          comment:
            '참고 방법론 AMS..AQ\n"Bio-CNG의 메탄 함량이 국가 규정으로 따라야 하며, 국가 규정이 부재한 경우 부피 기준 메탄 함량이 96% 이상이어야 한다."',
          answer: true,
        },
        {
          id: 6,
          title:
            '반응기에 남은 소화된 잔류물 폐기물 처리 과정에서 메탄이 발생되지 않음을 입증할 수 있는가?',
          comment:
            '본 방법론 산정과정에서 소화된 잔류물 폐기물 처리 과정에 대한 산정식이 존재하지 않으므로, 해당 과정에서 메탄이 발생하지 않음을 입증해야 한다. (공정 프로세스 문서 등)',
          answer: true,
        },
      ],
      impossible: [
        {
          id: 1,
          title: '생산된 바이오 CNG를 도시가스 공급망으로 전송하는 사업인가?',
          comment:
            '바이오 CNG를 도시가스로 이용하는 것이 아닌 차량의 연료로 이용하는 사업에 적용 가능하다.',
          answer: false,
        },
        {
          id: 2,
          title:
            '최종 사용자 및 소매상이 바이오 CNG를 사용하여 온실가스를 감축하는 사업인가?',
          comment:
            '최종 사용자가 바이오 CNG를 통해 온실가스를 감축한다면 이중산정이 되므로 해당 방법론을 적용할 수 없다.',
          answer: false,
        },
        {
          id: 3,
          title: '생산된 바이오 CNG를 수출하는 사업인가?',
          comment: '바이오 CNG를 수출하는 사업은 본 방법론을 적용할 수 없다.',
          answer: false,
        },
      ],
    },
    additional: [
      {
        id: 1,
        title:
          '본 사업은 【온실가스ᆞ에너지 목표관리 운영 등에 관한 지침】의 관리업체 지정 및 변경사항에 포함되었습니까?',
        comment: '',
        answer: false,
      },
      {
        id: 2,
        title:
          '본 사업은 【온실가스 배출권의 할당 및 거래에 관한 법률】의 할당대상업체 지정 및 변경사항에 포함되었습니까?',
        comment: '',
        answer: false,
      },
      {
        id: 3,
        title:
          '본 사업은 【공공부문 온실가스ᆞ에너지 목표관리 운영 등에 관한 지침】 별표2에 대상에 포함되었습니까?',
        comment: '',
        answer: false,
      },
      {
        id: 4,
        title: '그 외 본 사업에 관한 의무적 규제에 의해 시행된 사업입니까?',
        comment: '',
        answer: false,
      },
    ],
  },
  {
    id: 2,
    title: '무시동난방기 장착을 통한\n수송에너지효율향상\n사업에 대한 방법론',
    shortTitle: '무시동난방기',
    description:
      '대중교통 수단에서 사용되는 승객운송용 차량 또는 화물운송용 차량에 있어 난방장치를 가동 유지하기 위해 불필요하게 발생하는 차량 공회전을 방지하는 무시동난방기를 새로 설치',
    subTitle: '07A-003-Ver02',
    icon: '/images/main/icon_2.png',
    methodology: {
      possible: [
        {
          id: 1,
          title:
            '사업 활동기간 동안 온실가스 감축에 영향을 주는 설비가 변하지 않는 사업인가?',
          comment:
            '무시동난방기를 장착을 포함하여 그 외 온실가스 감축에 영향을 주는 설비가 변하지 않아야 한다.',
          answer: true,
        },
        {
          id: 2,
          title:
            '휘발유, 경유, LPG, CNG를 연료료 사용하는 대중교통 수단에서 사용되는 승객 운송용 차량 또는 화물 운송용 차량에만 적용되는 사업인가?',
          comment:
            '해당 적용조건에서 설명하는 교통 수단만을 사용하여 감축사업을 수행해야 한다.',
          answer: true,
        },
        {
          id: 3,
          title:
            '무시동난방기를 장착하는 차량에 공회전 제한 횟수 및 시간을 지속적·전자적으로 측정·기록하는 장치가 설치되어 있는가?',
          comment:
            '무시동난방기의 작동 시간 및 횟수를 기반으로 감축량을 산정하므로 해당 데이터가 측정 및 기록되어야 한다.',
          answer: true,
        },
      ],
      impossible: [
        {
          id: 1,
          title:
            '휘발유, 경유를 연료로 사용하는 공공 교통수단 목적으로 출고된 차량을 LPG, CNG 차량으로 개조한 차량을 사용하는 사업인가?',
          comment: '개조된 차량을 사용하는 사업은 본 방법론을 적용할 수 없다.',
          answer: false,
        },
        {
          id: 2,
          title:
            '무시동난방기 설치로 인한 온실가스 감축효과 외 저감효과가 포함되는 사업인가?',
          comment:
            '무시동난방기 설치를 제외한 온실가스 감축효과가 포함되면 본 방법론을 적용할 수 없다.',
          answer: false,
        },
        {
          id: 3,
          title:
            '사업대상의 중복참여에 의한 온실가스 감축실적이 중복 산정되는 사업인가? (온실가스 감축실적의 소유권 명확히 명시 필요)',
          comment:
            '감축량의 이중 산정을 방지하기 위해 계약서 등을 통해 명시해야 한다.',
          answer: false,
        },
      ],
    },
    additional: [
      {
        id: 1,
        title:
          '본 사업은 【온실가스ᆞ에너지 목표관리 운영 등에 관한 지침】의 관리업체 지정 및 변경사항에 포함되었습니까?',
        comment: 'asdasdasd',
        answer: false,
      },
      {
        id: 2,
        title:
          '본 사업은 【온실가스 배출권의 할당 및 거래에 관한 법률】의 할당대상업체 지정 및 변경사항에 포함되었습니까?',
        comment: 'asdasdasd',
        answer: false,
      },
      {
        id: 3,
        title:
          '본 사업은 【공공부문 온실가스ᆞ에너지 목표관리 운영 등에 관한 지침】 별표2에 대상에 포함되었습니까?',
        comment: 'asdasdasd',
        answer: false,
      },
      {
        id: 4,
        title: '그 외 본 사업에 관한 의무적 규제에 의해 시행된 사업입니까? ',
        comment: 'asdasdasd',
        answer: false,
      },
      {
        id: 5,
        title:
          '해당 지방 자치단체의 자동차 공회전 제한 조례에 따른 시간 미만으로 공회전을 수행하는 사업입니까?',
        comment: 'asdasdasd',
        answer: true,
      },
    ],
  },
  {
    id: 3,
    title: '전기 차량 도입에 따른\n화석연료\n절감 사업의 방법론',
    shortTitle: '전기 차량',
    description:
      '운송서비스(여객, 화물운송, 개인소유 등)를 제공/이용하기 위하여 사용된 화석연료 기반의 차량을 전기 차량으로 대체하거나 신규로 차량을 도입하여 화석연료를 절감',
    subTitle: '07A-004-Ver02',
    icon: '/images/main/icon_3.png',
    methodology: {
      possible: [
        {
          id: 1,
          title:
            '사업 활동 차량의 온실가스 감축량 이중 산정을 방지하기 위한 방안을 제시하였는가?',
          comment:
            '사업 활동 차량의 최종 사용자 식별, 사업활동 차량 인벤토리의 구축 또는 기타 사업활동 차량임을 식별할 수 있는 고유번호를 명시해야 함',
          answer: true,
        },
        {
          id: 2,
          title: '사업 활동 차량에 관한 배터리 성능사양을 제시하였는가?',
          comment:
            '사업계획서 내 배터리의 성능사양(방전률, 충전당 주행거리, 내구연수, 배터리 사이클 등)을 포함하여야 함',
          answer: true,
        },
      ],
      impossible: [
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
      ],
    },
    additional: [
      { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
      { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
      { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
    ],
  },
  {
    id: 4,
    title: '저공해자동차 대체에\n따른 온실가스 감축\n사업의 방법론',
    shortTitle: '저공해자동차',
    description:
      '사업 전과 동일한 운송서비스(여객, 화물운송 등)를 제공 또는 이용하기 위하여 사용된 화석연료 기반의 자동차를 저공해자동차로 대체',
    subTitle: '07A-006-Ver01',
    icon: '/images/main/icon_4.png',
    methodology: {
      possible: [
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
      ],
      impossible: [
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
      ],
    },
    additional: [
      { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
      { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
      { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
    ],
  },
  {
    id: 5,
    title: '수소전기자동차 도입에\n따른 화석연료 절감\n사업의 방법론',
    shortTitle: '수소전기자동차',
    description:
      '수소를 활용하여 수소전기자동차를 도입함으로써 기존 화석연료 기반의 차량을 대체하거나 신규로 도입하여 화석연료를 절감',
    subTitle: '07A-007-Ver01',
    icon: '/images/main/icon_5.png',
    methodology: {
      possible: [
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
      ],
      impossible: [
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
      ],
    },
    additional: [
      { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
      { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
      { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
    ],
  },
  {
    id: 6,
    title: '저점도 엔진오일 사용을\n통한 차량 연료이용효율\n향상 사업의 방법론',
    shortTitle: '저점도 엔진오일',
    description:
      '저점도 엔진오일 사용을 통하여 차량의 연료이용효율을 향상함에 따라 화석연료 기반 차량의 연료 사용량을 감소시킴으로써 온실가스가 감축',
    subTitle: '07A-008-Ver01',
    icon: '/images/main/icon_6.png',
    methodology: {
      possible: [
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
      ],
      impossible: [
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
      ],
    },
    additional: [
      { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
      { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
      { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
    ],
  },
  {
    id: 7,
    title: '공유 자전거 도입을\n통한 교통수단\n대체사업의 방법론',
    shortTitle: '공유 자전거',
    description:
      '공유 자전거 이와 관련된 부대시설과 같은 도시의 인프라 건설을 통하여 자가용을 공유 자전거 등으로 대체함으로써 화석연료 사용을 절감',
    subTitle: '07A-009-Ver01',
    icon: '/images/main/icon_7.png',
    methodology: {
      possible: [
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
      ],
      impossible: [
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
      ],
    },
    additional: [
      { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
      { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
      { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
    ],
  },
  {
    id: 8,
    title: '공항특수차량의 전기차량\n대체에 따른 화석연료\n절감사업의 방법론',
    shortTitle: '공항특수차량',
    description:
      '공항에서 화석연료를 사용하여 화물 또는 여객을 운송하던 공항특수차량을 전기로 동력을 교체함으로써 온실가스를 저감',
    subTitle: '07A-012-Ver01',
    icon: '/images/main/icon_8.png',
    methodology: {
      possible: [
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
      ],
      impossible: [
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
      ],
    },
    additional: [
      { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
      { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
      { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
    ],
  },
  {
    id: 9,
    title: '수상, 선로 및\n도로운송에서\n화물 운송의 수단 전환',
    shortTitle: 'AM0090',
    description:
      '특정 화물(승객 제외)의 운송에서 도로 운송에서 바지선이나 선박을 이용한 수상 운송 또는 철도 운송으로의 전환 교통',
    subTitle: '07A-AM0090',
    icon: '/images/main/icon_9.png',
    methodology: {
      possible: [
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
      ],
      impossible: [
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
      ],
    },
    additional: [
      { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
      { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
      { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
    ],
  },
  {
    id: 10,
    title: '수상, 선로 및\n도로운송에서\n화물 운송의 수단 전환',
    shortTitle: 'AM0110',
    description:
      '트럭 등을 통해 운송되던 액체연료가 파이프라인 시스템을 통해 운송됨에 따라 온실가스 배출이 감축',
    subTitle: '07A-AM0110',
    icon: '/images/main/icon_9.png',
    methodology: {
      possible: [
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
      ],
      impossible: [
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
      ],
    },
    additional: [
      { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
      { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
      { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
    ],
  },
  {
    id: 11,
    title: '개조기술을 이용한\n수송 에너지효율 활동',
    shortTitle: 'AMS.Ⅲ.AA',
    description:
      '승객 운송을 상업적으로 하는 기존/신규 차량에 대하여 차량 엔진에 대한 개조를 통해 차량 연료 이용 효율을 증가시켜 온실가스 배출을 감축',
    subTitle: '07A-AMS-lll.AA',
    icon: '/images/main/icon_10.png',
    methodology: {
      possible: [
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
      ],
      impossible: [
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
      ],
    },
    additional: [
      { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
      { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
      { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
    ],
  },
  {
    id: 12,
    title: '교통 수단에\n바이오-CNG 도입',
    shortTitle: 'AMS.Ⅲ.AQ',
    description:
      '재생가능한 바이오매스로부터 Bio-CNG를 생산하고 운송 분야에 이용해 온실가스를 감축',
    subTitle: '07A-AMS-lll.AQ',
    icon: '/images/main/icon_11.png',
    methodology: {
      possible: [
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
      ],
      impossible: [
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
      ],
    },
    additional: [
      { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
      { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
      { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
    ],
  },
  {
    id: 13,
    title: '차량의 효율성 증대를\n통한 배출 감소',
    shortTitle: 'AMS.Ⅲ.BC',
    description:
      '차량의 효율성을 향상시켜 연료 사용량과 온실가스 배출을 감소시키는 사업의 방법론',
    subTitle: '07A-AMS-lll.BC',
    icon: '/images/main/icon_12.png',
    methodology: {
      possible: [
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
      ],
      impossible: [
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
      ],
    },
    additional: [
      { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
      { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
      { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
    ],
  },
  {
    id: 14,
    title: '전기와 하이브리드\n차량에 의한 배출 감소',
    shortTitle: 'AMS.Ⅲ.C',
    description:
      '승객 및 화물 운송 서비스 제공을 위한 저공해 차량(전기/하이브리드)을 도입 및 대체를 통해 운영하여 온실가스 배출을 감축',
    subTitle: '07A-AMS-lll.C',
    icon: '/images/main/icon_13.png',
    methodology: {
      possible: [
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
      ],
      impossible: [
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
      ],
    },
    additional: [
      { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
      { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
      { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
    ],
  },
  {
    id: 15,
    title: '상업적 단체차량에\n저-배출 차량/기술 도입',
    shortTitle: 'AMS.Ⅲ.S',
    description:
      '유사한 교통 조건 및 지형에서 운영되는 대중교통을 포함한 상업적 승객 운송, 물자 및 화물운송용으로 저공해 차량을 도입(기존 차량의 개조 포함)하여 온실가스 배출을 감축',
    subTitle: '07A-AMS-lll.S',
    icon: '/images/main/icon_14.png',
    methodology: {
      possible: [
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
      ],
      impossible: [
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
        { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
      ],
    },
    additional: [
      { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
      { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
      { id: 1, title: 'asdasd', comment: 'asdasdasd', answer: false },
    ],
  },
];
