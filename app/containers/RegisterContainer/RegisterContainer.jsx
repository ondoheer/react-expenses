import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Logo from "../../components/partials/Logo";
import RegisterForm from "../../components/forms/RegisterForm";
import {
  // RegisterAction,
  setPassword,
  setEmail,
  setFullName,
  setConfirm,
  registerAction
} from "../../redux/modules/auth";

const mapStateToProps = state => ({
  emailInput: state.auth.emailInput,
  passwordInput: state.auth.passwordInput,
  fullNameInput: state.auth.fullNameInput,
  confirmInput: state.auth.confirmInput,
  error: state.error.error
});

const mapDispatchToProps = dispatch => {
  return {
    setEmail: evt => {
      dispatch(setEmail(evt.target.value));
    },
    setPassword: evt => {
      dispatch(setPassword(evt.target.value));
    },
    setFullName: evt => {
      dispatch(setFullName(evt.target.value));
    },
    setConfirm: evt => {
      dispatch(setConfirm(evt.target.value));
    },
    registerHandler: evt => {
      dispatch(registerAction());
    }
  };
};
const RegisterContainer = props => (
  <div className="register-container u-bkg--main-color">
    <Logo />
    <RegisterForm
      setEmail={props.setEmail}
      setPassword={props.setPassword}
      setFullName={props.setFullName}
      setConfirm={props.setConfirm}
      registerHandler={props.registerHandler}
      fullNameInput={props.fullNameInput}
      confirmInput={props.confirmInput}
      passwordInput={props.passwordInput}
      error={props.error}
    />
  </div>
);

RegisterContainer.propTypes = {
  setEmail: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  setFullName: PropTypes.func.isRequired,
  setConfirm: PropTypes.func.isRequired,
  registerHandler: PropTypes.func.isRequired,
  fullNameInput: PropTypes.string,
  confirmInput: PropTypes.string,
  passwordInput: PropTypes.string,
  error: PropTypes.string
};
export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
