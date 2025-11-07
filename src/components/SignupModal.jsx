import React, { useState, useContext } from "react";
import { Api } from "../App";
import { AuthContext } from "../App";

export default function SignupModal({ onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);

  const submit = async () => {
    setLoading(true);
    try {
      await Api.post("/api/auth/signup", { name, email, password });
      const loginRes = await Api.post("/api/auth/login", { email, password });
      login(loginRes.data.user, loginRes.data.token);
      onClose();
    } catch (err) {
      alert(err?.response?.data?.msg || "Signup failed");
    } finally { setLoading(false); }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal glass" onClick={e => e.stopPropagation()}>
        <h3>Create account</h3>
        <input placeholder="Full name" value={name} onChange={e=>setName(e.target.value)} />
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <div style={{display:'flex',gap:8,marginTop:10}}>
          <button className="btn" onClick={submit} disabled={loading}>{loading ? "Creating..." : "Create account"}</button>
          <button className="btn ghost" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
