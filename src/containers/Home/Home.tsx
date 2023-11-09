import React from 'react';

import Slider from 'react-slick';

import { AspectRatio, Box, Button, Flex, Image, Text } from '@chakra-ui/react';

const DATA = [
  {
    id: 1,
    title: '바이오 CNG 생산 및\n자동차 연료 이용\n사업의 방법론',
    subTitle: '07A-001-Ver01',
    icon: '/images/main/icon_1.png',
  },
  {
    id: 2,
    title: '무시동난방기 장착을 통한\n수송에너지효율향상\n사업에 대한 방법론',
    subTitle: '07A-003-Ver02',
    icon: '/images/main/icon_2.png',
  },
  {
    id: 3,
    title: '전기 차량 도입에 따른\n화석연료\n절감 사업의 방법론',
    subTitle: '07A-004-Ver02',
    icon: '/images/main/icon_3.png',
  },
  {
    id: 4,
    title: '저공해자동차 대체에\n따른 온실가스 감축\n사업의 방법론',
    subTitle: '07A-006-Ver01',
    icon: '/images/main/icon_4.png',
  },
  {
    id: 5,
    title: '수소전기자동차 도입에\n따른 화석연료 절감\n사업의 방법론',
    subTitle: '07A-007-Ver01',
    icon: '/images/main/icon_5.png',
  },
  {
    id: 6,
    title: '저점도 엔진오일 사용을\n통한 차량 연료이용효율\n향상 사업의 방법론',
    subTitle: '07A-008-Ver01',
    icon: '/images/main/icon_6.png',
  },
  {
    id: 7,
    title: '공유 자전거 도입을\n통한 교통수단\n대체사업의 방법론',
    subTitle: '07A-009-Ver01',
    icon: '/images/main/icon_7.png',
  },
  {
    id: 8,
    title: '공항특수차량의 전기차량\n대체에 따른 화석연료\n절감사업의 방법론',
    subTitle: '07A-012-Ver01',
    icon: '/images/main/icon_8.png',
  },
  {
    id: 9,
    title: '수상, 선로 및\n도로운송에서\n화물 운송의 수단 전환',
    subTitle: '07A-AM0090',
    icon: '/images/main/icon_9.png',
  },
  {
    id: 10,
    title: '개조기술을 이용한\n수송 에너지효율 활동',
    subTitle: '07A-AMS-lll.AA',
    icon: '/images/main/icon_10.png',
  },
  {
    id: 11,
    title: '교통 수단에\n바이오-CNG 도입',
    subTitle: '07A-AMS-lll.AQ',
    icon: '/images/main/icon_11.png',
  },
  {
    id: 12,
    title: '차량의 효율성 증대를\n통한 배출 감소',
    subTitle: '07A-AMS-lll.BC',
    icon: '/images/main/icon_12.png',
  },
  {
    id: 13,
    title: '전기와 하이브리드\n차량에 의한 배출 감소',
    subTitle: '07A-AMS-lll.C',
    icon: '/images/main/icon_13.png',
  },
  {
    id: 14,
    title: '상업적 단체차량에\n저-배출 차량/기술 도입',
    subTitle: '07A-AMS-lll.S',
    icon: '/images/main/icon_14.png',
  },
];
function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 979,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box>
      <Flex h="80vh" direction="column" justifyContent="center">
        <Box>
          <Text as="h1" fontSize="56px" fontWeight="bold">
            온실가스 감축
            <br />
            모니터링 플랫폼
          </Text>
          <Text fontSize="20px" mt="30px" mb="80px">
            실시간 모니터링과 스마트 분석으로 데이터를 행동으로 변환합니다.
            <br />
            지속 가능한 미래를 위한 강력한 도구로 당신의 친환경 여정을
            지원합니다.
          </Text>
          <Button w="200px" h="50px">
            <Text fontSize="18px">자세히보기</Text>
          </Button>
        </Box>
      </Flex>
      {/* 슬라이더 */}
      <Box pb="100px">
        <Text as="h2" textAlign="center" fontSize="45px" fontWeight="bold">
          외부사업 방법론
        </Text>
        <Text textAlign="center" fontSize="20px" mt="24px" mb="60px">
          본 방법론별 사업 적용은 사용자의 편의를 위해 외부사업 방법론의
          산정식을 간소화하여 개발된 것으로
          <br />
          산정 결과값은 실제 사업계획서 결과 값과 다를 수 있습니다.
        </Text>
        <Slider {...settings}>
          {DATA.map((item, idx) => {
            return (
              <Box key={idx} p="15px">
                <AspectRatio ratio={270 / 390} maxW="270px" mx="auto">
                  <Flex
                    direction="column"
                    bgColor="#2A2C2D"
                    position="relative"
                    px="15px"
                    py="16px"
                    borderRadius="20px"
                    maxW="270px"
                    mx="auto"
                  >
                    <Image
                      zIndex={0}
                      pos="absolute"
                      bottom="0px"
                      w="100%"
                      src={item.icon}
                    />
                    <Text color="white" mb="20px" mt="10px">
                      {item.subTitle}
                    </Text>
                    <Text
                      color="white"
                      fontSize="24px"
                      fontWeight="bold"
                      textAlign="center"
                      whiteSpace="pre-line"
                    >
                      {item.title}
                    </Text>
                    <Button
                      colorScheme="light"
                      mt="auto"
                      borderRadius="10px"
                      w="100%"
                    >
                      <Text color="black">시작하기</Text>
                    </Button>
                  </Flex>
                </AspectRatio>
              </Box>
            );
          })}
        </Slider>
      </Box>
    </Box>
  );
}

export default Home;
