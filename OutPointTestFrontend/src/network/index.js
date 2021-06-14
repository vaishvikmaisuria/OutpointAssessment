import axios from "axios";
export const BACKEND_ENDPOINT = "http://localhost:5000";

// Adds trailing slash if they do not exist 
const enforceTrailingSlash = (url) => {
  return url.endsWith("/") ? url : url + "/";
};

// Definition of Get request with axios and specific port 5000
export function getRequest(uri, searchParams) {
    const params = searchParams ? searchParams : "";
    return axios.get(enforceTrailingSlash(`${BACKEND_ENDPOINT}${uri}`) + params);
}

// Definition of Post request with axios and specific port 5000 
export function postRequest(uri, data) {
    return axios.post(enforceTrailingSlash(`${BACKEND_ENDPOINT}${uri}`), data);
}
  