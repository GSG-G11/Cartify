import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  handleSubmit = (e) => {
    const { navigate } = this.props;
    e.preventDefault();
    navigate('/product');
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className='body'>

        <form className="form-input" onSubmit={this.handleSubmit}>
          <h1 className='login-title'>LOG IN</h1>

          <input className="input"
            type="text" name="username" placeholder="username" value={username} onChange={this.handleChange} required />
          <input className="input" type="text" name="password" placeholder="password" value={password} onChange={this.handleChange} required />
          <button className="button-from-login">Login</button>

          <span>Do not have an account <a href="" className="attr_links">create account</a></span>
        </form>

      </div>
    );
  }
}
const LoginFunc = (props) => {
  const navigate = useNavigate();
  return (
    <Login {...props} navigate={navigate} />
  );
};
Login.propTypes = {
  navigate: PropTypes.func.isRequired,
};

export default LoginFunc;
