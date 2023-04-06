import axios from "axios";

export const instance = axios.create({
  baseURL: "https://frontend-test-assignment-api.abz.agency/api",
});
export function FetchToken() {
  return instance.get(`v1/token`);
}
export function FetchUsers(params) {
  return instance.get(`/v1/users`, { params });
}

export function FetchPositions(params) {
  return instance.get(`/v1/positions`, { params });
}

export function getToken() {
  return instance.get(`/v1/token`);
}

export const createUser = async (params) => {
  const { name, email, phone, position_id, photo } = params;
  const { data } = await getToken();

  let formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("phone", phone);
  formData.append("position_id", position_id);
  formData.append("photo", photo);
  const config = {
    headers: {
      "content-type": "multipart/form-data",
      Token: data.token,
    },
  };

  instance.post(`/v1/users`, params, config);
};
