import { useState } from 'react';
import InputField from '../common/InputTemplate/InputField';
import Button from '../common/Button';
import './LoginForm.css';

import emailIcon from '../../assets/yellowEmailIcon.png'
import passwordIcon from '../../assets/yellowPasswordIcon.png';



function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('Dados do Login: ');
        console.log({
            email: email,
            password: password
        });
    }

        return (
            <form className = 'login-form' onSubmit = {handleSubmit}>
                <h2 className = 'login-form-title'>Bem Vindo de Volta!</h2>
                    <InputField
                        iconSrc = {emailIcon}
                        iconAlt = 'Ícone de email'
                        type = 'email'
                        placeholder= 'Email'
                        value = {email}
                        onChange = {(e) => setEmail(e.target.value)}
                        required = {true}
                    />
                    <InputField
                        iconSrc = {passwordIcon}
                        iconAlt = 'Ícone de senha'
                        type = 'password'
                        placeholder= 'Senha'
                        value = {password}
                        onChange = {(e) => setPassword(e.target.value)}
                        required = {true}
                    />
                <Button
                    type = 'submit'
                    className = 'btn-login'
                >
                    Login
                </Button>                    
            </form>
        );
}

export default LoginForm;