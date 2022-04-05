import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <div className="error_text">
        404 <br />
        Page Not Found <br />
        The Page you are looking for doesnt exist or any other error occured.
        <Link to="/" className="homepage_link">
          Go back to Homepage
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
