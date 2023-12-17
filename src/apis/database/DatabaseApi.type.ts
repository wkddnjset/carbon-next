export type DatabaseDTOType = {
  results: any;
};
export type DatabaseParamGetType = {
  id: string;
};
export type DatabaseParamPutType = {
  id: string;
  data: DatabaseDTOType;
};
export type DatabaseParamPostType = {
  id: string;
  sorts?: {
    property: string;
    direction: string;
  }[];
  filter?: any;
};
export type DatabaseParamPatchType = {
  id: string;
  data: Partial<DatabaseDTOType>;
};
