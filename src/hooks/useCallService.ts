// https://usehooks-typescript.com/react-hook/use-fetch

import { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';



// type APIPaginationResponse<T> = {
//   results: T;
//   page: number;
//   total_pages: number;
//   total_results: number;
//   dates?: {
//     maximum: string;
//     minimum: string;
//   }
// }
  interface IParamPagination{
    page?:number,
  }

function usePaginate<T>(
  service: (...arg: any) => Promise<APIPaginationResponse<T[]>>,
  dep?: any[],
) {
  const [loading, setLoading] = useState<boolean>(false);
  const [pagination, setPagination] = useState({
    page: 1,
    total: 0,
    totalPages: 1,
  });
  const navigate = useNavigate();
  const [index, setIndex] = useState<number>(0);
  const [data, setData] = useState<T[]>([]);
  const [initData, setInitData] = useState<boolean>(false);
  const handleChangePage = async (pageParam?: IParamPagination) => {
    if (loading) return;
    setLoading(true);
    try {
      const showMoreIndex = index + 1;
      const dataResponse = await service({
        ...pageParam,
        page: showMoreIndex,
      });
      setIndex(dataResponse?.page ?? showMoreIndex);
      setPagination({
        page: dataResponse?.page,
        totalPages: dataResponse?.total_pages,
        total: dataResponse?.total_results,
      });
      if (!initData) {
        setData(dataResponse.results);
      } else {
        const currentPageArray = (dataResponse?.results as any[]) ?? [];
        const beforePageArray = data;
        setData([...beforePageArray, ...currentPageArray]);
      }

      setInitData(true);
    } catch(error: any) {
      const {message , ...rest} = error;
      const errorCode = (error as AxiosError).response?.status || 0;
      switch (errorCode) {
        case 503:
          // return <Errors statusCode={503} />;
          navigate('/error/500');
          break;
        case 500:
          navigate('/error/500');
          break;
        case 404:
          navigate('/error/500');
          break;
        case 403:
          navigate('/error/500');
          break;
        default:
          break;
      }
    }
    finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    handleChangePage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dep);
  return {
    data, loading, pagination, handleChangePage, hidden: pagination.totalPages <= pagination.page,
  };
}

export default usePaginate;
