import axios, { AxiosRequestConfig } from "axios";

export class Http {
  static async get<T>(url: string, config?: AxiosRequestConfig) {
    return axios.get<T>(url, config);
  }
}
