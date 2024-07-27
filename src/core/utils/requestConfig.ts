import { REQUEST_TYPE } from "../movie-db/constants";

export const requestConfig = (
  method: REQUEST_TYPE = "GET",
  body?: any
): RequestInit => ({
  method,
  cache: "no-store",
  headers: {
    Accept: "application/json",
  },
  body: method === ("POST" || "PUT") ? JSON.stringify(body) : undefined,
});
