import { apiPost } from "../AxiosConfiguration";

export const login = async (data) => {
  const res = await apiPost("front/auth/login", data);
  return res;
};
