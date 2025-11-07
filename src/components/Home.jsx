import React from "react";

export default function Home({ onSignup }) {
  return (
    <section className="home">
      <div className="hero-card glass">
        <h1>WhiteShadow Pair System</h1>
        <p className="muted">Securely generate bot pairing codes — sign up & manage usage.</p>
        <div style={{display:'flex',gap:12,marginTop:18}}>
          <button className="btn" onClick={onSignup}>Create account</button>
          <a className="btn ghost" href="/pair">Get Pair</a>
        </div>
      </div>

      <div className="features">
        <div className="card glass">
          <h3>Safe Auth</h3>
          <p>Signup with email & secure password hashing (backend).</p>
        </div>
        <div className="card glass">
          <h3>Pair API</h3>
          <p>Call your pairing backend securely and show codes.</p>
        </div>
        <div className="card glass">
          <h3>Pro UI</h3>
          <p>Animated background, neon highlights, responsive layout.</p>
        </div>
      </div>
    </section>
  );
}
