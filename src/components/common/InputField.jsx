import React from "react";
import "./InputField.css"; 

function FormularioCriarConta() {
    return (
    <div className= "formulario_cadastro">  
        nome = prompt('Digite seu nome completo');
        email = prompt('Digite o seu e-mail');
        senha = prompt('Digite sua senha');
    </div>  
    )
}

export default FormularioCriarConta;

