import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

import LoginForm from "../../components/forms/LoginForm";
import Logo from "../../components/partials/Logo";
import { loginAction, setPassword, setEmail } from "../../redux/modules/auth";

const mapStateToProps = state => ({
  emailInput: state.auth.emailInput,
  passwordInput: state.auth.passwordInput,
  error: state.error.error
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setEmail: evt => {
      dispatch(setEmail(evt.target.value));
    },
    setPassword: evt => {
      dispatch(setPassword(evt.target.value));
    },

    loginHandler: evt => {
      evt.preventDefault();
      dispatch(loginAction(ownProps.history));
    }
  };
};

const LoginContainer = props => {
  // console.log("from container");
  // console.log(props.history);
  return (
    <div className="login-container u-bkg--main-color">
      <Logo />
      <LoginForm
        loginHandler={props.loginHandler}
        setEmail={props.setEmail}
        setPassword={props.setPassword}
        error={props.error}
      />
    </div>
  );
};

LoginContainer.propTypes = {
  loginHandler: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(LoginContainer);
