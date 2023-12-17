import { NextApiRequest, NextApiResponse } from 'next';

/* eslint-disable */
const axios = require('axios');

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { path, ...params },
    method,
    body,
  } = _req;
  console.log('api path');
  const instance = axios.create({
    baseURL: 'https://api.notion.com/v1',
    timeout: 5000,
    headers: {
      Authorization: `Bearer secret_uhCU2ADN80fxJT4DNjhbRjJXMVNaEkGtedy9J1LtHCY`,
      'Notion-Version': '2022-06-28',
    },
  });

  // TODO body 암호화
  const url = path
    ? typeof path === 'string'
      ? `/${path}`
      : `/${path.join('/')}`
    : null;

  let req = body;
  console.log('url : ', url);

  try {
    const response = await instance({
      method,
      url: url,
      params: params
        ? {
            ...params,
          }
        : null,
      data: req,
    });

    // TODO response 복호화
    // console.log('e: ', response);
    // console.log('e.response : ', response?.status);
    // console.log('e.response.data : ', response?.data);
    // console.log(
    //   'e.response.data : ',
    //   JSON.stringify(response?.data?.data?.list),
    // );
    res.status(response?.status).json(response?.data);
  } catch (e: any) {
    // console.log('e: ', e);
    // console.log('e.response : ', e?.response);
    // console.log('e.response.data : ', e?.response?.data);
    res.status(e?.response?.status ?? 500).json(e?.response?.data ?? {});
  }
};
