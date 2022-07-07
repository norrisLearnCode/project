import axios from "axios";

export const client = axios.create({
  baseURL: "http://localhost:9001/",
  timeout: 1000,
});
