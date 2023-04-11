import axios from "axios";
import { BASE_URL } from "../constant/url";
import { store } from "../redux/store";
import { logout } from "../redux/slices/userSlice";

class HttpService {
  constructor() {
    const token = window.localStorage.getItem("token");
    console.log("My Token", token);
    const service = axios.create({
      baseURL: BASE_URL,
      headers: token
        ? {
            Authorization: `Bearer ${token}`,
          }
        : {},
    });

    service.interceptors.response.use(this.handleSuccess, this.handleError);
    // service.interceptors.response.use(this.handleSuccess);

    this.service = service;
  }

  handleSuccess(response) {
    return response;
  }

  handleError(error) {
    switch (error.response.status) {
      case 401:
        // Token expired
        // delete this.service.defaults.headers["Authorization"];
        window.localStorage.removeItem("token");
        store.dispatch(logout());
        break;
      // this.redirectTo("/login");
      // break;
      case 404:
        // Not found
        this.redirectTo("/404");
        break;
      default:
        // Internal server error
        this.redirectTo("/500");
        break;
    }
    return Promise.reject(error);
  }

  redirectTo(url) {
    window.location.href = url;
  }

  get(...args) {
    return this.service.get(...args);
  }

  post(...args) {
    return this.service.post(...args);
  }

  put(...args) {
    return this.service.put(...args);
  }

  patch(...args) {
    return this.service.patch(...args);
  }

  delete(...args) {
    return this.service.delete(...args);
  }
}

export default HttpService;
