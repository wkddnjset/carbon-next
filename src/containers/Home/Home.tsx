import React, { useRef } from 'react';

import Router from 'next/router';

import Slider from 'react-slick';

import { Box, Button, Center, Flex, Image, Text } from '@chakra-ui/react';

import { DATA } from '@/constants/data';

import Card from './_fragments/Card';

function Home() {
  const sliderRef = useRef<any>(null);
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

  const nextSlick = () => {
    sliderRef.current.slickNext();
  };
  const prevSlick = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <Box>
      <Flex h="80vh" direction="column" justifyContent="center">
        <Image src="/images/main/bg.png" pos="absolute" top="0px" right="0px" />
        <Box px="24px" zIndex={9}>
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
          <Button w="200px" h="50px" onClick={() => Router.push('/more')}>
            <Text fontSize="18px">자세히보기</Text>
          </Button>
        </Box>
      </Flex>
      {/* 슬라이더 */}
      <Box pb="100px" px="24px">
        <Text as="h2" textAlign="center" fontSize="45px" fontWeight="bold">
          외부사업 방법론
        </Text>
        <Text
          textAlign="center"
          fontSize="20px"
          mt="24px"
          mb="60px"
          wordBreak="keep-all"
          maxW="800px"
          mx="auto"
        >
          본 방법론별 사업 적용은 사용자의 편의를 위해 외부사업 방법론의
          산정식을 간소화하여 개발된 것으로 산정 결과값은 실제 사업계획서 결과
          값과 다를 수 있습니다.
        </Text>

        <Box
          pos="relative"
          w={{ base: '270px', sm: '560px', md: '850px', lg: '1140px' }}
          mx="auto"
        >
          <Center
            boxShadow="0px 0px 10px 0px #00000044"
            borderRadius="full"
            w="50px"
            h="50px"
            pos="absolute"
            right="-15px"
            top="calc(50% - 25px)"
            zIndex={99}
            onClick={nextSlick}
            cursor="pointer"
          >
            <Image src="/images/arrow_right.png" />
          </Center>
          <Center
            boxShadow="0px 0px 10px 0px #00000044"
            borderRadius="full"
            w="50px"
            h="50px"
            pos="absolute"
            left="-15px"
            top="calc(50% - 25px)"
            zIndex={99}
            onClick={prevSlick}
            cursor="pointer"
          >
            <Image src="/images/arrow_left.png" />
          </Center>

          <Slider {...settings} ref={sliderRef}>
            {DATA.map((item, idx) => {
              return <Card key={idx} item={item} />;
            })}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
