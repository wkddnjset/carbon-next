import { createContextSelector } from '@/utils/react/create-context-selector';

import { useEvaluationDetailPageHandlers } from './hooks/useEvaluationDetailPageHandler';
import { useEvaluationDetailPageState } from './hooks/useEvaluationDetailPageState';

const useEvaluationDetailPage = () => {
  const { state, dispatch } = useEvaluationDetailPageState();
  const handler = useEvaluationDetailPageHandlers({ state, dispatch });

  return { dispatch, state, handler };
};

export const {
  Provider: EvaluationDetailPageProvider, //
  useContext: useEvaluationDetailPageContext,
} = createContextSelector(useEvaluationDetailPage);
