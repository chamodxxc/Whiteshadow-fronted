import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Pair from "./components/Pair";
import About from "./components/About";
import LoginModal from "./components/LoginModal";
import SignupModal from "./components/SignupModal";
import axios from "axios";

export const Api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "",
  withCredentials: false
});

export const AuthContext = React.createContext();

function App() {
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem("ws_user")) || null; } catch { return null }
  });
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add("loaded");
  }, []);

  const login = (userObj, token) => {
    localStorage.setItem("ws_token", token);
    localStorage.setItem("ws_user", JSON.stringify(userObj));
    setUser(userObj);
    setShowLogin(false);
  };

  const logout = () => {
    localStorage.removeItem("ws_token");
    localStorage.removeItem("ws_user");
    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <div className="app-root">
        <canvas id="matrix-canvas"></canvas>
        <Navbar onLogin={() => setShowLogin(true)} onSignup={() => setShowSignup(true)} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home onSignup={() => setShowSignup(true)} />} />
            <Route path="/pair" element={<Pair />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
        {showSignup && <SignupModal onClose={() => setShowSignup(false)} />}
      </div>
    </AuthContext.Provider>
  );
}

export default App;
