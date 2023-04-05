import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export const apiClient = axios.create({
  baseURL: API_URL,
});

export const fetcher = (url: string, params?: any) =>
  apiClient.get(url, params).then((res) => res);
