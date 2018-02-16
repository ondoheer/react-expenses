export const RedirectToLogin = ({ children }) =>
  localStorage.getItem("access_token") ? (
    <Redirect to="/login" />
  ) : (
    { children }
  );

export const BlockIfLogedIn = ({ children }) =>
  localStorage.getItem("access_token") ? <Redirect to="/" /> : { children };
