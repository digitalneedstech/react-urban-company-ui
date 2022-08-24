import CryptoJS from "crypto-js";
import Cookies from "universal-cookie";
import axios from "axios";
import { config } from "~/config";

export const fetchJson = async (params) => {
  var CryptoJSAesJson = {
    stringify: function (cipherParams) {
      var j = {
        ct: cipherParams.ciphertext.toString(CryptoJS.enc.Base64),
      };
      if (cipherParams.iv) j.iv = cipherParams.iv.toString();
      if (cipherParams.salt) j.s = cipherParams.salt.toString();
      return JSON.stringify(j);
    },
    parse: function (jsonStr) {
      var j = JSON.parse(jsonStr);
      var cipherParams = CryptoJS.lib.CipherParams.create({
        ciphertext: CryptoJS.enc.Base64.parse(j.ct),
      });
      if (j.iv) cipherParams.iv = CryptoJS.enc.Hex.parse(j.iv);
      if (j.s) cipherParams.salt = CryptoJS.enc.Hex.parse(j.s);
      return cipherParams;
    },
  };

  var encrypted = CryptoJS.AES.encrypt(JSON.stringify(params), "secret", {
    format: CryptoJSAesJson,
  }).toString();

  try {
    const response = await axios({
      url: config.apiBase,
      method: "POST",
      params: {
        param: encrypted,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.data;
  } catch (error) {
    return {
      error,
    };
  }
};

export const fetchBagDataJSON = async (data, byUser = true) => {
  try {
    let cookies = new Cookies(window.document.cookie);
    let userData = cookies.get("userData") || cookies.get("guestId");
    if (userData) {
      let userId = userData.id ? userData.id : userData;
      let param = `${data}&by_user=${userId}`;

      if (!byUser) {
        param = `${data}`;
      }

      let response = await fetchJson(param).then((response) => {
        return response;
      });
      console.log(response);
      return response;
    }
  } catch (error) {
    return false;
  }
};
