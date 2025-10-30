import React from 'react';
import RegisterForm from '../components/Register/RegisterForm.jsx';
import AuthAside from '../components/common/AuthAside.jsx';
import './RegisterPage.css';

function RegisterPage() {
  return (
    <div className="register-page-container">
    
        <AuthAside 
            title="Bem vindo de volta!"
            subtitle="Para se manter conectado Faça login na sua conta"
            buttonText="Login"
            navigateTo="/login"
            backGroundVariant="green"
            textVariant="light"
            buttonVariant="secondary"
            >
        </AuthAside>

      <div className="form-section">
        <RegisterForm />
      </div>
    </div>
  );
}

export default RegisterPage;