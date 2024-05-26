/* eslint-disable camelcase */
/* eslint-disable no-undef */
// import { IDataType } from 'hooks/useShowmore';
import axiosInstance from 'services/common/instance';

// export const fetchNewsHome = async (
//   limit: number | string,
//   is_popular?: string,
// ): Promise<IDataType<INewsType>> => {
//   const res = await axiosInstance.get(
//     `news?limit=${limit}${is_popular && '&is_popular=1'}`,
//   );
//   return res.data;
// };

export const fetchBusinessModalAreas = async (slug: string):Promise<BusinessModalAreaType[]> => {
  const res = await axiosInstance.get(`business-areas/list-by-business-models/${slug}`);
  return res.data.data;
};

export const fetchBusinessArea = async ():Promise<BusinessAreaType[]> => {
  const res = await axiosInstance.get('business-areas');
  return res.data.data;
};
