import axiosInstance from 'services/common/instance';

export const fetchMoviePopular = async ():Promise<APIPaginationResponse<IMovie[]>> => {
    const res = await axiosInstance.get('movie/popular');
    return res.data;
}

export const fetchMovie = async ():Promise<any> => {
    const res = await axiosInstance.get('movie/now_playing');

    // return await new Promise((ress) => {
    //     setTimeout(() => {
    //         ress(res.data)
    //     }, 50000);
    // }) 
    return res.data;
  };
  