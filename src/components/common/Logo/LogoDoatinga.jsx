import React from "react";
import "./LogoDoatinga.css"; 
import logoImagem from "../../../assets/logo_doatinga.png.svg";



function LogoDoatinga() {
  return (
    <div className="logo">
      <div className="imagem">
        <img
          src={logoImagem}
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
