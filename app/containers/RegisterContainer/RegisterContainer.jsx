import React from 'react';
import { connect } from 'react-redux';

import RegisterForm from '../../components/forms/RegisterForm';
import {
  // RegisterAction,
  setPassword,
  setEmail,
  setFullName,
  setConfirm,
  registerAction
} from '../../redux/modules/auth';

const mapStateToProps = state => ({
  emailInput: state.auth.emailInput,
  passwordInput: state.auth.passwordInput,
  fullNameInput: state.auth.fullNameInput,
  confirmInput: state.auth.confirmInput
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
      console.log(evt);
      evt.preventDefault;
      dispatch(registerAction());
    }
  };
};
const RegisterContainer = props => (
  <div className="home-container">
    <RegisterForm
      setEmail={props.setEmail}
      setPassword={props.setPassword}
      setFullName={props.setFullName}
      setConfirm={props.setConfirm}
      registerHandler={props.registerHandler}
    />
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
