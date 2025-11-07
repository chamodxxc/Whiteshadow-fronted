import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>© {year} <strong>WhiteShadow</strong></div>
        <div className="footer-links">
          <a href="https://github.com/cnw-db/Whiteshadow-vx.git" target="_blank" rel="noreferrer" title="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://whatsapp.com/channel/0029Vb4bj5zI7BeFm6aM8O1p" target="_blank" rel="noreferrer" title="WhatsApp Channel">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
