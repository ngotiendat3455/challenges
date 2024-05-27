import axiosInstance from 'services/common/instance';

export const fetchMoviePopular = async ():Promise<APIPaginationResponse<IMovie[]>> => {
    const res = await axiosInstance.get('movie/popular');
    return res.data;
}

export const fetchMovie = async ({ page }: {page: number}):Promise<any> => {
    const res = await axiosInstance.get(`movie/now_playing?page=${page}`, {

    });

    // return await new Promise((ress) => {
    //     setTimeout(() => {
    //         ress(res.data)
    //     }, 50000);
    // }) 
    return res.data;
  };
  
export const fetchDetailMovie = async(movie_id: number):Promise<IMovie> => {
    const res = await axiosInstance.get(`movie/${movie_id}`);
    return res.data; 
}