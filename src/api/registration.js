import api from "./index";

const baseRegistrationPrefix = "/auth";

export const createUserAccount = (data) => {
  const url = `${baseRegistrationPrefix}/signup`;
  return api("post", url, data);
}

export const loginUser = (data) => {
  const url = `${baseRegistrationPrefix}/login`;
  return api("post", url, data);
}

export const forgotPassword = (data) => {
  const url = "/forgot-password";
  return api("post", url, data);
}
