import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Notification.css';

class Notification extends Component {
  componentDidMount() {
    const {
      isOpen, off, duration,
    } = this.props;
    if (isOpen) setTimeout(off, duration * 1000);
  }

  render() {
    const {
      isOpen, msg,
    } = this.props;
    return isOpen ? (
      <div className="modal">
        <div className="notification-container">
            <div className="Notification-msg"><span>{msg}</span></div>
        </div>
      </div>
    ) : null;
  }
}

Notification.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  msg: PropTypes.string.isRequired,
  off: PropTypes.func.isRequired,
  duration: PropTypes.number.isRequired,
};

export default Notification;
