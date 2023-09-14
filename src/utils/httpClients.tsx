import axios from 'axios';
const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  responseType: 'json',
});
// checking header
const getHeaders = (isSecure: Boolean) => {
  let options: any = {
    'content-type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTU2ZTE4NDk3MTkzY2JiNjlmOTE0ZmE5YmNmZTcyYSIsInN1YiI6IjY1MDMyM2NkZmZjOWRlMGVlMjBhNjU2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KitSI361C4J4pkUnaRFRGbQo9vheklIEBLyvkg_oRpc',
  };
  return options;
};

// Http functions
function GET(url: string, isSecure: boolean) {
  return http.get(url, {
    headers: getHeaders(isSecure),
  });
}

function POST(url: string, data: any, isSecure: boolean) {
  return http.post(url, data, {
    headers: getHeaders(isSecure),
  });
}

function PUT(url: string, data: any, isSecure: boolean) {
  return http.put(url, data, {
    headers: getHeaders(isSecure),
  });
}

function DELETE(url: string, isSecure: boolean) {
  return http.delete(url, {
    headers: getHeaders(isSecure),
  });
}

export default {
  GET,
  POST,
  PUT,
  DELETE,
};
