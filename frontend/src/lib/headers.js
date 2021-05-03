import Cookies from "js-cookie";
import Auth from "../util/Auth";

const csrftoken = Cookies.get("csrftoken");

// when you send a request that does not need to be authenticated with the jwt token, only send the headers.common object, otherwise send the full headers object

export const headers = {
  common: {
    "X-CSRF-TOKEN": csrftoken,
  },
};

export const headersToken = {
  headers: { Authorization: `Bearer ${Auth.getToken()}` },
};
