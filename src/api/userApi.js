import axios from "axios";

const API_BASE = "http://localhost:12345/api";

export const loginUser = (data) => axios.post(`${API_BASE}/login`, data);