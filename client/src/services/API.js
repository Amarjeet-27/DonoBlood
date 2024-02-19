import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3001/api/v1/" });
// alert(process.env.REACT_APP_BASEURL);

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")} `;
  }
  return req;
});

export default API;
