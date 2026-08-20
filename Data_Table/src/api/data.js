import api from "./apiFetch";

export async function getUsers() {
  const res = await api.get("/users");
  return res.data;
}

export async function addUser(credentials) {
  const res = await api.post("/users", credentials);
  return res.data;
}
export async function updateUser(id, credentials) {
  const res = await api.put(`/users/${id}`, credentials);
  return res.data;
}
export async function deleteUser(id) {
  const res = await api.delete(`/users/${id}`);
  return res.data;
}
