import { REQUEST_TYPE } from "../movie-db/constants";

export const requestConfig = (method: REQUEST_TYPE = "GET", body?: any) => ({
  method,
  headers: {
    Accept: "application/json",
  },
  body: method === ("POST" || "PUT") ? JSON.stringify(body) : undefined,
});
