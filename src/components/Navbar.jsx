import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../App";

export default function Navbar({ onLogin, onSignup }) {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="nav">
      <div className="nav-left">
        <div className="logo">White<span>Shadow</span></div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/pair">Get Pair</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>

      <div className="nav-right">
        {!user ? (
          <>
            <button className="btn ghost" onClick={onLogin}>Login</button>
            <button className="btn" onClick={onSignup}>Sign up</button>
          </>
        ) : (
          <>
            <div className="user-badge">👤 {user.name?.split(" ")[0]}</div>
            <button className="btn ghost" onClick={logout}>Logout</button>
          </>
        )}
      </div>
    </header>
  );
}
