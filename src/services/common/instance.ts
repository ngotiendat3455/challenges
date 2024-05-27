import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';

// import { getAccessToken } from './storage';

// import { LOCAL_STORAGE } from 'utils/constants';

export const API = process.env.REACT_APP_API_BASE_URL;
export const TOKEN = process.env.REACT_API_KEY;
export const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

axiosInstance.interceptors.request.use(
  ($config: AxiosRequestConfig): AxiosRequestConfig => {
    const token = TOKEN;
    if (token) {
      $config!.headers!.Authorization = `Bearer ${token}`;
    }

    // if ($config.method === 'get') {
    //   $config.params = { ...$config.params, locale: window.localStorage.getItem(LOCAL_STORAGE.LANGUAGE) || 'vi' };
    // }

    $config!.headers!['Content-Type'] = 'application/json';
    $config!.headers!.Accept = 'application/json';
    return $config;
  },
  async (error: AxiosError): Promise<AxiosError> => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => response,
  async (error: AxiosError): Promise<AxiosError> => Promise.reject(
    error.response && error.response.status === 422 ? (error.response?.data as any).errors : error,
  ),
);
export default axiosInstance;
