import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


// start matrix animation
(function startMatrix(){
  const c = document.getElementById('matrix-canvas');
  if(!c) return;
  const ctx = c.getContext('2d');
  function resize(){ c.width = innerWidth; c.height = innerHeight; }
  resize(); window.addEventListener('resize', resize);
  const cols = Math.floor(c.width/14);
  const ypos = new Array(cols).fill(0);
  function matrix(){
    ctx.fillStyle = 'rgba(0,0,0,0.05)'; ctx.fillRect(0,0,c.width,c.height);
    ctx.fillStyle = 'rgba(0,255,180,0.09)'; ctx.font = '12pt monospace';
    for(let i=0;i<ypos.length;i++){
      const text = String.fromCharCode(48 + Math.random()*40);
      const x = i*14;
      ctx.fillText(text, x, ypos[i]*14);
      if(ypos[i]*14 > c.height && Math.random() > 0.975) ypos[i]=0;
      ypos[i]++;
    }
  }
  setInterval(matrix, 60);
})();
