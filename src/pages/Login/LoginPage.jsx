import React from 'react';
import LoginForm from '../../components/Login/LoginForm';
import AuthAside from '../../components/common/SideColumn/AuthAside';
import './LoginPage.css';

function LoginPage() {
  return (
    <div className="login-page-container">
      <div className="login-form-section">
        <LoginForm />
      </div>    
        <AuthAside 
            title="Faça parte!"
            subtitle="Ainda não tem uma conta? cadastre-se"
            buttonText="Cadastrar"
            navigateTo="/cadastro"
            backGroundVariant="orange"
            textVariant="light"
            buttonVariant="primary"
            >
        </AuthAside>
    </div>
  );
}

export default LoginPage;