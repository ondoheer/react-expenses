const SomeHOC = (BaseComponent) => {
  return class WrappingClass extends React.Component {
    render() {
      returns <BaseComponent {...this.props} />
    }
  }
};

const SomeHOC2 = (BaseComponent) => {
  return (props) => (
    <BaseComponent {...props} />
  );
};

const EnhancedLoginForm = SomeHOC2(LoginForm);

const SomeHOC3 = (config) => (BaseComponent) => {
   return (props) => (
    <BaseComponent {...props} />
  );
};

const EnhancedLoginForm = SomeHOC3({...})(LoginForm);

const EnhancedLoginForm = compose(
  connect(mapState, mapDispatch),
  SomeHOC3({...})
)(LoginForm);


const fetchWithAuth = (
  url,
  params,
  config
) => {
  const authToken = localstorage.get('auth');

  if (!authToken) {
    return history.push('/login');
  }

  const refreshToken = genRefresh();
  const authHeader = 'abc';

  return fetch(url, { ...params, authToken })
    .then(res => {
      if (res.status === '403') {
        return fetch('/refresh', { ...params, refreshToken })
          .then(res => {
             if (!res.ok) {
                return logout();
             }
             return res.json();
          })
          .then(({ token }) => {
             localStorage.setItem('auth_token', token);
             return fetch(url, { ...params, authToken: token });
          });
      }

      return res;
    });
};

fetchWithAuth('/expenses', {a, b, c})
  .then(...)



  const RedirectToLogin = ({ children }) => (
  notLoggedIn() ?
    <Redirect path="/login" /> :
    {children}
);

const Router = () => {
    <switch>
      <ReirectToLogin>
        <Route exact path="/" component={HomeContainer} />
      </RedirectToLogin>
    </switch>
};