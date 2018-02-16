import React from "react";

const FlashBox = props => (
  <div className="c-flashbox c-flashbox--error">
    <p>{props.error}</p>
  </div>
);

export default FlashBox;
