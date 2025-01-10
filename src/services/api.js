import axios from "axios";

const defaultOptions = {
  baseURL: "http://localhost:8000",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

const api = axios.create(defaultOptions);

export const signIn = async (email, password) => {
  const response = await api.post("/users/signin", {
    email: email,
    password: password,
  });
  return response;
};
