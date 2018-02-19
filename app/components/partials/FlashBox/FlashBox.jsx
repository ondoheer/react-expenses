import React from "react";
import PropTypes from "prop-types";

const FlashBox = props => (
  <div className="c-flashbox c-flashbox--error">
    <p>{props.error}</p>
  </div>
);

FlashBox.propTypes = {
  error: PropTypes.string.isRequired
};
export default FlashBox;
