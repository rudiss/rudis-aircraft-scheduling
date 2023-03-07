import axios from "axios";

export default function axiosBaseConfig() {
  axios.defaults.baseURL = process.env.REACT_APP_API_URL;
  axios.defaults.headers.post["Content-Type"] = "application/json";
}
