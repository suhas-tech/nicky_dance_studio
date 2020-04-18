import axios from "axios";

export const postData = payload => {
  return axios
    .post(payload.url, payload.data)
    .then(response => response)
    .catch(err => console.log(err));
};

export const getData = payload => {
  return axios.get(payload.url)
    .then(response => response)
    .catch(err => console.log(err));
};
