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
} from '@chakra-ui/react';

import { useEvaluationDetailPageContext } from '@/contexts/pages/evaluationDetail/useEvaluationDetailPageContext';

function ModalComponent({ isOpen, onOpen, onClose }: any) {
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
            <Button
              colorScheme="gray"
              mr={3}
              onClick={onClose}
              size="lg"
              borderRadius="full"
            >
              계속하기
            </Button>
            <Button
              colorScheme="dark"
              size="lg"
              borderRadius="full"
              onClick={() => Router.push('/result')}
            >
              감축량 확인하기
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default ModalComponent;
