import React, { useState } from 'react';

import Router from 'next/router';

import { AspectRatio, Box, Button, Flex, Image, Text } from '@chakra-ui/react';

function Card({ item, p = '10px' }: any) {
  const [hover, setHover] = useState(false);

  const onMouseEnter = () => {
    setHover(true);
  };
  const onMouseLeave = () => {
    setHover(false);
  };
  return (
    <Box
      p={p}
      cursor="pointer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={() => Router.push(`/evaluation/${item.id}`)}
    >
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
            bottom={hover ? '-30px' : '0px'}
            transition="0.4s"
            w="100%"
            src={item.icon}
          />
          <Text
            color="white"
            pos="absolute"
            top={hover ? '30px' : '20px'}
            opacity={hover ? 0 : 1}
            transition="0.4s"
          >
            {item.subTitle}
          </Text>
          <Text
            color="white"
            pos="absolute"
            fontSize="20px"
            fontWeight="bold"
            top={hover ? '20px' : '30px'}
            opacity={hover ? 1 : 0}
            transition="0.4s"
          >
            {item.shortTitle}
          </Text>
          <Text
            pos="absolute"
            top={hover ? '95px' : '75px'}
            opacity={hover ? 0 : 1}
            transition="0.4s"
            color="white"
            fontSize="24px"
            fontWeight="bold"
            textAlign="center"
            whiteSpace="pre-line"
          >
            {item.title}
          </Text>
          <Text
            pos="absolute"
            top={hover ? '75px' : '95px'}
            opacity={hover ? 1 : 0}
            px="16px"
            transition="0.4s"
            color="white"
            fontSize="18px"
            textAlign="center"
            whiteSpace="pre-line"
            wordBreak="keep-all"
          >
            {item.description}
          </Text>
          <Button colorScheme="light" mt="auto" borderRadius="10px" w="100%">
            <Text color="black">시작하기</Text>
          </Button>
        </Flex>
      </AspectRatio>
    </Box>
  );
}

export default Card;
