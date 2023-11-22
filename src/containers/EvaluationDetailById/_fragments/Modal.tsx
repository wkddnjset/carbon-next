import { useMemo } from 'react';

import Router from 'next/router';

import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from '@chakra-ui/react';

import { useEvaluationDetailPageContext } from '@/contexts/pages/evaluationDetail/useEvaluationDetailPageContext';

function ModalComponent({
  id,
  isOpen,
  onClose,
  selectedTab,
  setSelectedTab,
}: any) {
  const additionIsCorrect = useEvaluationDetailPageContext(
    (ctx) => ctx.state.additionIsCorrect,
  );
  const methodIsCorrect = useEvaluationDetailPageContext(
    (ctx) => ctx.state.methodIsCorrect,
  );
  const done = useMemo(() => {
    return additionIsCorrect && methodIsCorrect;
  }, [additionIsCorrect, methodIsCorrect]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">평가결과</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text textAlign="center" my="20px">
              {done
                ? '모든 평가 조건을 만족합니다.'
                : '일부 평가 조건에 대해 확인이 필요합니다.'}
            </Text>
          </ModalBody>

          <ModalFooter>
            <VStack spacing="10px" w="100%" mb="10px">
              <Button
                w="100%"
                colorScheme="gray"
                onClick={() => {
                  setSelectedTab(selectedTab === 1 ? 2 : 1);
                  onClose();
                }}
                size="lg"
                borderRadius="full"
              >
                {selectedTab === 1
                  ? '추가성 평가로 넘어가기'
                  : '적용 평가로 돌아가기'}
              </Button>
              <Button
                w="100%"
                colorScheme="dark"
                size="lg"
                borderRadius="full"
                onClick={() => Router.push(`/result/${id}`)}
              >
                감축량 확인하기
              </Button>
            </VStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default ModalComponent;
