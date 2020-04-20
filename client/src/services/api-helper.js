const axios = require("axios");

const api = axios.create({
  baseURL: "http://localhost:3000"
});

// ====================================
// ============= Auth =================
// ====================================

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', { auth: loginData });
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/users/', { user: registerData })
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user
}

export const verifyUser = async () => {
  const token = localStorage.getItem("authToken");
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const resp = await api.get("/auth/verify");
    return resp.data;
  }
  return false;
}

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
}

export const putUser = async (user_id, userData) => {
  const response = await api.put(`/users/${user_id}`, userData);
  return response.data;
};

// ============== Recipes ================
export const getAllProducts = async () => {
  const response = await api.get("/products");
  return response.data;
};

export const getOneProduct = async (product_id) => {
  const response = await api.get(`/products/${product_id}`);
  return response.data;
};

export const getAllUserProducts = async (user_id) => {
  const response = await api.get(`/users/${user_id}/products`);
  return response.data;
};

export const postProduct = async (user_id, productData) => {
  const response = await api.post(`/users/${user_id}/products`, productData);
  return response.data;
};

export const putProduct = async (user_id, productData) => {
  const response = await api.put(`/products/${user_id}`, productData);
  return response.data;
};

export const deleteProduct = async (user_id) => {
  const response = await api.delete(`/products/${user_id}`);
  return response.data;
};