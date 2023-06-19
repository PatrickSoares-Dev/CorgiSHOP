import React, { useState } from 'react';
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import corgiImage from '../../assets/img/catlogin.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../config';

const Login = ({ handleToggleForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${baseUrl}/login`, {
        email,
        password,
      });

      const { error, message } = response.data;

      if (error) {
        setError(message);
      } else if (message === 'Usuário logado com sucesso.') {
        setError('');
        localStorage.setItem('email', email);
        setEmail('');
        navigate('/CorgiSHOP');
      } else {
        setError('Email ou senha inválidos.');
      }
    } catch (error) {
      console.log(localStorage.email);
      setError('Email ou senha inválidos.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    localStorage.removeItem('email'); // Limpa o email do local storage antes do login

    // Adiciona um atraso de 2 segundos para simular o tempo de resposta da API
    setTimeout(() => {
      handleLogin();
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card color="white" shadow="regular" className="p-4">
        <div className="flex">
          <div>
            <Typography variant="h4" color="blue-gray">
              Login
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Digite seus dados para fazer login.
            </Typography>
            <form
              className="mt-4 mb-2 w-80 max-w-screen-lg sm:w-96"
              onSubmit={handleSubmit}
            >
              {error && (
                <div className="text-black text-sm mb-6 p-2 rounded bg-red-300">
                  {error}
                </div>
              )}
              <div className="mb-4 flex flex-col gap-6">
                <Input
                  size="lg"
                  label="Email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                />
                <Input
                  type="password"
                  size="lg"
                  label="Senha"
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                />
              </div>
              <Checkbox
                label={
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal"
                  >
                    Lembrar-me
                  </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
              />
              <Button type="submit" className="mt-6" fullWidth disabled={isLoading}>
                {isLoading ? 'Logando...' : 'Entrar'}
              </Button>
              <Typography
                color="gray"
                className="mt-4 text-center font-normal"
              >
                Não tem uma conta?{' '}
                <a
                  href="#"
                  className="text-blue-500"
                  onClick={handleToggleForm}
                >
                  Cadastre-se
                </a>
              </Typography>
            </form>
          </div>
          <img
            className="ml-8 w-96"
            src={corgiImage}
            alt="Corgi"
            width="200"
          />
        </div>
      </Card>
    </div>
  );
};

export default Login;
