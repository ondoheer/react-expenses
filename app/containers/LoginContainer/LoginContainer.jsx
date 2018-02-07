import React from 'react';
import { connect } from 'react-redux';

import LoginForm from '../../components/forms/LoginForm';
import { loginAction, setPassword, setEmail } from '../../redux/modules/auth';

const mapStateToProps = state => ({
  emailInput: state.auth.emailInput,
  passwordInput: state.auth.passwordInput
});

const mapDispatchToProps = dispatch => {
  return {
    setEmail: evt => {
      dispatch(setEmail(evt.target.value));
    },
    setPassword: evt => {
      dispatch(setPassword(evt.target.value));
    },
    loginHandler: evt => {
      console.log(evt);
      evt.preventDefault();
      dispatch(loginAction());
    }
  };
};

const LoginContainer = props => {
  return (
    <div className="login-container">
      <LoginForm
        loginHandler={props.loginHandler}
        setEmail={props.setEmail}
        setPassword={props.setPassword}
      />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
