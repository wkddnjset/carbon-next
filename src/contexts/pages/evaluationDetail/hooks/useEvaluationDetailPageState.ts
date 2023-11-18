import { useReducer } from 'react';

import { createSlice } from '@/utils/react/create-slice';

type GlobalStateType = {
  value: number;
  additionIsCorrect: boolean;
  methodIsCorrect: boolean;
};

const initialState: GlobalStateType = {
  value: 0,
  additionIsCorrect: false,
  methodIsCorrect: false,
};

const { reducer } = createSlice({
  initialState,
  reducers: {
    RESET: () => initialState,
    SET_VALUE: (state, payload: number) => {
      state.value = payload;
    },
    SET_METHOD_IS_CORRECT: (state, payload: boolean) => {
      state.methodIsCorrect = payload;
    },
    SET_ADDITION_IS_CORRECT: (state, payload: boolean) => {
      state.additionIsCorrect = payload;
    },
  },
});

export const useEvaluationDetailPageState = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return { state, dispatch };
};
