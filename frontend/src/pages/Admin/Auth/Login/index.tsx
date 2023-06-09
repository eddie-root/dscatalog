import './styles.css';

import { Link } from 'react-router-dom';
import ButtonIcon from 'components/ButtonIcon';
import { useForm } from "react-hook-form";
import { requestBackendLogin } from 'util/requests';
import { useState } from 'react';


type FormData = {
    username: string;
    password: string;
}

const Login = () => {

    const [hasError, setHasError] = useState(false);

    const { register, handleSubmit } = useForm<FormData>();

    const onSubmit = (formData: FormData) => {
        requestBackendLogin(formData)
            .then(response => {
                setHasError(false)
                console.log('SUCESSO ', formData);
            })
            .catch(error => {
                setHasError(true)
                console.log('ERRO', error);
            });
    };

    return (
        <div className='base-card login-card'>
            <h1>Login</h1>
            {hasError && (
                <div className='alert alert-danger'>
                    Error ao tentar efetua o login!
                </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-4'>
                    <input
                        {...register("username")}
                        type="text"
                        className="form-control base-input"
                        placeholder="Email"
                        name="username"
                    />
                </div>
                <div className='mb-2'>
                    <input
                        {...register("password")}
                        type="password"
                        className="form-control base-input "
                        placeholder="Password"
                        name="password"
                    />
                </div>
                <Link to="/admin/auth/recover" className="login-link-recover">
                    Esquerci minha senha
                </Link>
                <div className='login-submit'>
                    <ButtonIcon text='Fazer login' />
                </div>
                <div className='signup-container'>
                    <span className='not-registered'>Não tem cadastro?</span>
                    <Link to="/admin/auth/signup" className="login-link-register">
                        CADASTRAR
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default Login;