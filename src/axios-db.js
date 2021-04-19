import axios from "axios";

const instance = axios.create({
  baseURL: "https://web70-d9a6c-default-rtdb.firebaseio.com/",
});

export default instance;
