import history from "../index";

const BASE_URL = "http://localhost:5000";
/**
 *
 * @param {enpoint to call the ajax request} route
 * @param {params to add to the fetch request} params
 */

const logout = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  history.push("/login");
};

const fetchWithJWT = (route, queryArgs, params) => {
  const originalMethod = params.method;
  // get the token
  const access_token = localStorage.getItem("access_token");
  if (!access_token) {
    return history.push("/login"); // doesn't this break the promise?
  }

  // Set current Bearer token
  params.headers.set("Authorization", `Bearer ${access_token}`);

  // validate the token
  return fetch(`${BASE_URL}/${route}?${queryArgs}`, params)
    .then(res => {
      if (res.status == 401 || res.status == 422) {
        const refresh_token = localStorage.getItem("refresh_token");
        if (!refresh_token) {
          return logout();
        }
        params.headers.set("Authorization", `Bearer ${refresh_token}`);
        params.method = "POST";

        return fetch(`${BASE_URL}/refresh`, params)
          .then(res => {
            if (!res.ok) {
              return logout();
            }
            return res.json();
          })
          .then(json => {
            localStorage.setItem("access_token", json.access_token);
            params.headers.set("Authorization", `Bearer ${json.access_token}`);
            params.method = originalMethod;
            return fetch(`${BASE_URL}/${route}?${queryArgs}`, params);
          });
      }
      return res; // basic response
    })
    .catch(error => {
      console.error(error);
    });
};

export default fetchWithJWT;
