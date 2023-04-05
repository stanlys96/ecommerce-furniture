import axios from "axios";
import Cookie from "js-cookie";
import { apiClient } from "@/utils/axios";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const login = async (data: any) => {
  const login = await apiClient.post(`/account/login`, data);
  console.log(login, "<<< WALAO");
  return login;
};

export const verify = async (data: any) => {
  const verify = await apiClient.post(`/account/verify`, data);
  return verify;
};
