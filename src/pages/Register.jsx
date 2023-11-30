import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input
          required
          type="text"
          placeholder="username"
          name="username"
          // onChange={handleChange}
        />
        <input
          required
          type="email"
          placeholder="email"
          name="email"
          // onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          // onChange={handleChange}
        />
        <button>Register</button>
        {/* {err && <p>{err}</p>} */}
        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
}

export default Register