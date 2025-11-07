import React, { useState, useContext } from "react";
import { Api } from "../App";
import { AuthContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function Pair() {
  const { user } = useContext(AuthContext);
  const [number, setNumber] = useState("");
  const [code, setCode] = useState(null);
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const getPair = async () => {
    if (!user) {
      alert("Please login to use Pair feature.");
      nav("/");
      return;
    }
    const clean = number.replace(/\D/g, "");
    if (!clean) { alert("Enter phone number"); return; }
    setLoading(true); setCode(null);

    try {
      const res = await Api.get(`/api/pair?number=${clean}`);
      setCode(res.data.code || JSON.stringify(res.data));
    } catch (err) {
      alert(err?.response?.data?.msg || "Pair API error");
    } finally { setLoading(false); }
  };

  return (
    <section className="pair glass">
      <h2>Request Pair Code</h2>
      <p className="muted">Enter the target WhatsApp number (with country code) and request the pairing code from backend.</p>

      <div style={{display:'flex',gap:8,marginTop:12}}>
        <input placeholder="+94704896880" value={number} onChange={e=>setNumber(e.target.value)} />
        <button className="btn" onClick={getPair} disabled={loading}>{loading ? "Requesting..." : "Get Code"}</button>
      </div>

      {code && (
        <div className="result">
          <h3>Pair Code</h3>
          <div className="code">{code}</div>
        </div>
      )}
    </section>
  );
}
