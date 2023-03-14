import axios, { AxiosRequestConfig } from "axios";

const getRequest: AxiosRequestConfig = {
  method: "GET",
};

const fetcher = (url: string) =>
  axios({
    ...getRequest,
    url,
  }).then((res) => res.data);

export default fetcher;
