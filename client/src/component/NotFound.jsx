import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div>
      <nav>
        <Link to="/">
          <h1 className="logo">Cartify</h1>
        </Link>
        <Link to="/">
          <h1>Return to Homepage</h1>
        </Link>
        <Link to="/login" className="login_link">
          <button className="button">Log in</button>
        </Link>
      </nav>

      <div className="error_text">
        404 <br />
        Page Not Found <br />
          The Page you are looking for doesnt exist or any other error occured.
          <Link to='/' className="homepage_link">Go back to Homepage</Link>
      </div>
    </div>
  );
}

export default NotFound;
