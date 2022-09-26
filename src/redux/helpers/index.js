import axios from "axios";
import { apiBase } from "../../config";

export const fetchData = async (url, method, data) => {
  try {
    var finalUrl=apiBase+url;
    const response = await axios({
      url: finalUrl,
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    });
    return await response.data;
  } catch (error) {
    console.log(error);
    //alert(error.message);
  }
};
