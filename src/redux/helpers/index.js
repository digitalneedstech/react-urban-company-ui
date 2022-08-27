import axios from "axios";
import { apiBase } from "../../config";

export const fetchData = async (url, method, data) => {
  try {
    const response = await axios({
      url: apiBase + url,
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    });
    return await response.data;
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};
