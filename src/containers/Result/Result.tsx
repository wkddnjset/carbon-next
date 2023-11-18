import React from 'react';

import { Box, Button, ChakraProps, Flex, Image, Text } from '@chakra-ui/react';

interface ResultProps extends ChakraProps {}

function Result({ ...basisProps }: ResultProps) {
  return (
    <Box {...basisProps}>
      <Text>Result</Text>
    </Box>
  );
}

export default Result;
