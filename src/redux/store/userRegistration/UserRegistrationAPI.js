import { axiosInstance } from "../../../network/apis";

// Replace endpoint and change api name
const registerUserDetials = async (values) => {
  return await axiosInstance.post(
    `/aea15c6a-3fcc-4e75-ac6b-e948d722ba99`,
    values
  );
};

const api = {
  registerUserDetials,
};

export default api;
