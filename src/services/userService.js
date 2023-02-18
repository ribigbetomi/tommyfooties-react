import http from "./httpService";
import { url } from "../slices/api";

const apiEndpoint = url + "/users";

export function register(user) {
  return http.post(apiEndpoint, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}

export function getUsers() {
  return http.get(apiEndpoint);
}
