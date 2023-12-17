import { AxiosInstance } from 'axios';

import instance from '@/configs/axios/instance';

import {
  DatabaseDTOType,
  DatabaseParamGetType,
  DatabaseParamPatchType,
  DatabaseParamPostType,
  DatabaseParamPutType,
} from './DatabaseApi.type';

export class DatabaseApi {
  axios: AxiosInstance = instance;
  constructor(axios?: AxiosInstance) {
    if (axios) this.axios = axios;
  }

  getDatabaseById = async (
    params: DatabaseParamGetType,
  ): Promise<DatabaseDTOType> => {
    const { data } = await this.axios({
      method: 'GET',
      url: `/databases/${params.id}`,
    });
    return data;
  };

  postDatabase = async (
    body: DatabaseParamPostType,
  ): Promise<DatabaseDTOType> => {
    const { id, ...req } = body;
    const { data } = await this.axios({
      method: 'POST',
      url: `/databases/${id}/query`,
      data: { ...req },
    });
    return data;
  };

  putDatabase = async (req: DatabaseParamPutType): Promise<DatabaseDTOType> => {
    const { data } = await this.axios({
      method: 'PUT',
      url: `/v1/databases/${req.id}`,
      data: req.data,
    });
    return data;
  };
  patchDatabase = async (
    req: DatabaseParamPatchType,
  ): Promise<DatabaseDTOType> => {
    const { data } = await this.axios({
      method: 'PATCH',
      url: `/v1/databases/${req.id}`,
      data: req.data,
    });
    return data;
  };

  deleteDatabase = async (id: string): Promise<boolean> => {
    const { data } = await this.axios({
      method: 'DELETE',
      url: `/v1/databases/${id}`,
    });
    return data;
  };
}

const databaseApi = new DatabaseApi();

export default databaseApi;
