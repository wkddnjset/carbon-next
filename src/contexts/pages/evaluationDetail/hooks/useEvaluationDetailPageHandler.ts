import { useCallback } from 'react';

import { useEvaluationDetailPageState } from './useEvaluationDetailPageState';

interface useEvaluationDetailPageHandlerParams
  extends ReturnType<typeof useEvaluationDetailPageState> {}

export const useEvaluationDetailPageHandlers = ({
  state,
  dispatch,
}: useEvaluationDetailPageHandlerParams) => {
  const logExample = useCallback(() => {
    console.log('example', { dispatch, state });
  }, [dispatch, state]);

  return { logExample };
};
