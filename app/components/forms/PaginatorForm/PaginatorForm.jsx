import React from "react";
import PropTypes from "prop-types";

const PaginatorForm = props => (
  <div className="c-pagination">
    <form onSubmit={props.getExpenses} className="c-pagination__form">
      <button className="c-pagination__form__label">Go to page</button>
      <input
        type="number"
        id="paginator"
        className="c-pagination__form__input"
        value={props.page}
        onChange={props.setPageInput}
        max={props.pages}
        min="0"
      />
      <span className="c-pagination__form__label">of {props.pages}</span>
    </form>
    <div className="c-pagination__arrows-container">
      <button
        className="c-pagination__arrow c-pagination__arrow--left"
        disabled={!props.hasPrev}
        onClick={props.decreasePage}
      >
        &#9664;
      </button>
      <button
        className="c-pagination__arrow c-pagination__arrow--right"
        disabled={!props.hasNext}
        onClick={props.increasePage}
      >
        &#9654;
      </button>
    </div>
  </div>
);

PaginatorForm.propTypes = {
  getExpenses: PropTypes.func.isRequired,
  page: PropTypes.number,
  setPageInput: PropTypes.func.isRequired,
  pages: PropTypes.number,
  hasNext: PropTypes.bool,
  hasPrev: PropTypes.bool,
  decreasePage: PropTypes.func.isRequired,
  increasePage: PropTypes.func.isRequired
};
export default PaginatorForm;
