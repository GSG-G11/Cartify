import React from 'react';
import PropTypes from 'prop-types';
import './Confirm.css';

function Confirm({
  isOpen, msg, action, toggle,
}) {
  return isOpen ? (
    <div className="modal">
      <div className="confirm-container">
          <div className="confirm-msg"><span>{msg}</span></div>
          <div className="btns-container">
              <button type="button" onClick={() => { action(); toggle(); }}>Confirm</button>
              <button type="button" onClick={toggle}>Cancel</button>
          </div>
      </div>
      <div className="overlay" onClick={toggle}></div>
    </div>
  ) : null;
}

Confirm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  msg: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Confirm;
