import jwtDecode from "jwt-decode";
import http from "./httpService";
import { url } from "../slices/api";

const apiEndpoint = url + "/auth";
const tokenKey = "token";

http.setJwt(getJwt());

export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndpoint, { email, password });
  // const { token: jwt } = await http.post(apiEndpoint, { email, password });
  localStorage.setItem(tokenKey, jwt.token);
  localStorage.setItem("userInfo", JSON.stringify(jwt));
}

export function loginWithJwt(jwt) {
  // for the register form
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
  localStorage.removeItem("userInfo");
  localStorage.removeItem('orderItems')
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt,
};
