import client from "./client";

const register = (user) => {
  return client.post("/users", user);
};

export default { register };
