import { create } from "apisauce";
import cache from "../utils/cache";

const apiClient = create({
  baseURL: "http://192.168.43.55:9000/api",
});

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
  const result = await get(url, params, axiosConfig);

  if (result.ok) {
    cache.store(url, result.data);
    return result;
  }

  const data = await cache.get(url);
  return data ? { ok: true, data } : result;
};

export default apiClient;
