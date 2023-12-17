import { useMutation } from '@tanstack/react-query';

import { UseMutationParams } from '@/types/module/react-query/use-mutation-params';

import databaseApi from './DatabaseApi';
import {
  DatabaseDTOType,
  DatabaseParamPatchType,
  DatabaseParamPutType,
} from './DatabaseApi.type';

export const DATABASE_API_MUTATION_KEY = {
  POST: (param?: DatabaseDTOType) => ['database-post', param],
  PUT: (req?: DatabaseParamPutType) => ['database-put', req],
  PATCH: (req?: DatabaseParamPatchType) => ['database-patch', req],
  DELETE: (id?: string) => ['database-delete', id],
};

export const usePostDatabaseMutation = (
  params?: UseMutationParams<typeof databaseApi.postDatabase>,
) => {
  return useMutation(databaseApi.postDatabase, {
    ...params?.options,
  });
};

export const usePutDatabaseMutation = (
  params?: UseMutationParams<typeof databaseApi.putDatabase>,
) => {
  return useMutation(databaseApi.putDatabase, {
    ...params?.options,
  });
};
export const usePatchDatabaseMutation = (
  params?: UseMutationParams<typeof databaseApi.patchDatabase>,
) => {
  return useMutation(databaseApi.patchDatabase, {
    ...params?.options,
  });
};
export const useDeleteDatabaseMutation = (
  params?: UseMutationParams<typeof databaseApi.deleteDatabase>,
) => {
  return useMutation(databaseApi.deleteDatabase, {
    ...params?.options,
  });
};
