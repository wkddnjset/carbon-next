import { useQuery } from '@tanstack/react-query';

import { UseQueryParams } from '@/types/module/react-query/use-query-params';

import databaseApi from './DatabaseApi';
import { DatabaseParamGetType } from './DatabaseApi.type';

export const DATABASE_API_QUERY_KEY = {
  GET_BY_ID: (param: DatabaseParamGetType) => ['database-by-id', param],
};

export function useGetDatabaseByIdQuery(
  params: UseQueryParams<typeof databaseApi.getDatabaseById>,
) {
  const queryKey = DATABASE_API_QUERY_KEY.GET_BY_ID(params.variables);
  const query = useQuery(
    queryKey,
    () => databaseApi.getDatabaseById(params?.variables),
    params?.options,
  );

  return { ...query, queryKey };
}
