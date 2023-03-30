import axios from "axios";
const baseUri = "http://localhost:8080";

export const addReader = async () => {
    const { data } = await axios.post(`${baseUri}/addReader`);
    return data;
  };
  

export const openPort = async (id, params) => {
  const { data } = await axios.post(`${baseUri}/openTCP?id=${id}&ip=${params.ip}&port=${params.port}`);
  return data;
};

export const closePort = async (id, params) => {
  const { data } = await axios.post(`${baseUri}/closeTCP?id=${id}`);
  return data;
};

export const startTCP = async (id, params) => {
  const { data } = await axios.post(`${baseUri}/startTCP?id=${id}`);
  return data;
};

export const stopTCP = async (id, params) => {
  const { data } = await axios.post(`${baseUri}/stopTCP?id=${id}`);
  return data;
};
