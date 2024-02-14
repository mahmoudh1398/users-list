import Axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export abstract class BaseService {
  constructor(alternativeBaseUrl?: string) {
    this.axiosRequestConfig = {
      baseURL: alternativeBaseUrl
        ? alternativeBaseUrl
        : (process.env.REACT_APP_BACKEND_URL as string),
    };
    this.axiosInstance = Axios.create(this.axiosRequestConfig);
  }

  baseUrl: string = "";

  protected axiosInstance: AxiosInstance;
  protected axiosRequestConfigDefault: AxiosRequestConfig = {
    baseURL: this.baseUrl,
    headers: { "Content-Type": "application/json" },
  };

  private _axiosRequestConfig: AxiosRequestConfig =
    this.axiosRequestConfigDefault;

  get axiosRequestConfig() {
    return this._axiosRequestConfig;
  }

  set axiosRequestConfig(config: AxiosRequestConfig) {
    if (config.headers) {
      config.headers = {
        ...this._axiosRequestConfig.headers,
        ...config.headers,
      };
    }
    this._axiosRequestConfig = { ...this._axiosRequestConfig, ...config };
  }

  get axiosInstanceWithoutToken(): AxiosInstance {
    let axiosInstanceWithoutToken: AxiosInstance = this.axiosInstance;

    axiosInstanceWithoutToken.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    return axiosInstanceWithoutToken;
  }
}
