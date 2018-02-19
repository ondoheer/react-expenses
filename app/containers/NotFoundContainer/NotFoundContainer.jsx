import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import HeaderNav from "../../components/partials/HeaderNav";
import AddExpenseButton from "../../components/partials/AddExpenseButton";
import { logoutRemoveTokens } from "../../redux/modules/auth";

const mapStateToProps = state => ({
  logoutRemoveTokens
});
const NotFoundContainer = props => (
  <div className="">
    <HeaderNav logoutRemoveTokens={props.logoutRemoveTokens} />
    <div className="c-main-container u-bkg-red">
      <h1>404</h1>
      <p className="c-info-box">Tne page you requested does not exist</p>
    </div>
    <AddExpenseButton />
  </div>
);

NotFoundContainer.propTypes = {
  logoutRemoveTokens: PropTypes.func.isRequired
};
export default connect(mapStateToProps)(NotFoundContainer);
