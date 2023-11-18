import { EvaluationDetailPageProvider } from '@/contexts/pages/evaluationDetail/useEvaluationDetailPageContext';

import { PropsOf } from '@/types/module/react/props-of';

function withEvaluationPageProvider<
  T extends (props?: any) => JSX.Element | null,
>(Component: T) {
  return function WrappedAppComponent(props: PropsOf<T>) {
    return (
      <EvaluationDetailPageProvider>
        <Component {...props} />
      </EvaluationDetailPageProvider>
    );
  };
}

export default withEvaluationPageProvider;
