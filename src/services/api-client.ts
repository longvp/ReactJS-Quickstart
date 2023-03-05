/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, AxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

const handleRefreshToken = async () => {
  // handle refresh token, return new access-token
  // if refresh token is invalid => logout
  return 'new access_token';
};

const requestHandler = (config: AxiosRequestConfig) => {
  const atk = localStorage.getItem('access_token');
  config.headers = {
    Authorization: `Bearer ${atk}`,
  };

  return config;
};

let isRefreshing = false;
let isRefreshed = false;
let newestAtk = '';
let failedQueue: any = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom: any) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

const responseErrorHandler = async (error: AxiosError) => {
  const originalRequest = { ...error.config };

  if (error?.response?.status === 401) {
    if (isRefreshed) {
      if (originalRequest?.headers) originalRequest.headers['Authorization'] = `Bearer ${newestAtk}`;
      return axiosInstance(originalRequest);
    }

    if (isRefreshing) {
      return new Promise(function (resolve, reject) {
        failedQueue.push({ resolve, reject });
      })
        .then((token) => {
          if (originalRequest?.headers) originalRequest.headers['Authorization'] = 'Bearer ' + token;
          return axiosInstance(originalRequest);
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    }

    isRefreshing = true;

    const response = await handleRefreshToken();
    // update access-token to localStorage, continue processQueue
    if (response) {
      isRefreshing = false;
      isRefreshed = true;
      newestAtk = response;
      axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + response;
      if (originalRequest?.headers) originalRequest.headers['Authorization'] = 'Bearer ' + response;
      processQueue(null, response);

      return axios(originalRequest);
    } else {
      // if refresh-token is invalid, log out
      isRefreshing = false;
      isRefreshed = true;
      processQueue(response, null);
    }
  }

  return Promise.reject(error);
};

axiosInstance.interceptors.request.use(requestHandler, (err: any) => Promise.reject(err));
axiosInstance.interceptors.response.use((response: any) => response, responseErrorHandler);

export { axiosInstance as ApiClient };
