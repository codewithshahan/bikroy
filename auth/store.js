import * as secureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

const key = "authToken";

const storeToken = async (authToken) => {
  try {
    await secureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log("error storing auth token", error);
  }
};

const getToken = async () => {
  try {
    return await secureStore.getItemAsync(key);
  } catch (error) {
    console.log("Error getting token", error);
  }
};

const getUser = async () => {
  getToken();
  const token = await getToken();

  return token ? jwtDecode(token) : null;
};

const removeToken = async () => {
  try {
    await secureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error removing token", error);
  }
};

export default { getUser, removeToken, storeToken, getToken };
