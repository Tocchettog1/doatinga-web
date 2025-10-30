import React from "react";
import "./LogoDoatinga.css"; 

function LogoDoatinga() {
  return (
    <div className="logo">
      <div className="imagem">
        <img
          src="logo_doatinga.png"
          alt="logo Doatinga"
          class="container_imagem_logo_Doatinga"
        />
      </div>
      <div className="texto">
        <h1>DOATINGA</h1>
        <p>Conectando corações<br />
        Transformando vidas</p>
      </div>
    </div>
  );
}

export default LogoDoatinga;
