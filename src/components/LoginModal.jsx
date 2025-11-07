import React, { useState, useContext } from "react";
import { Api } from "../App";
import { AuthContext } from "../App";

export default function LoginModal({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true);
    try {
      const res = await Api.post("/api/auth/login", { email, password });
      login(res.data.user, res.data.token);
      onClose();
    } catch (err) {
      alert(err?.response?.data?.msg || "Login failed");
    } finally { setLoading(false); }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal glass" onClick={e => e.stopPropagation()}>
        <h3>Login</h3>
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <div style={{display:'flex',gap:8,marginTop:10}}>
          <button className="btn" onClick={submit} disabled={loading}>{loading ? "Logging..." : "Login"}</button>
          <button className="btn ghost" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
