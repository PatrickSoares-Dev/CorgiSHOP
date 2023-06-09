import React, { useState, useEffect } from 'react';
import { Card, Input, Checkbox, Button, Typography } from "@material-tailwind/react";
import { useHistory } from 'react-router-dom';
import corgiImage from '../../assets/img/catlogin.png';
import axios from 'axios';

const LoginForm = ({ handleToggleForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const history = useHistory();

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    if (storedIsLoggedIn === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/login', {
        email,
        password,
      });
      setError('');
      setSuccessMessage(response.data.message);
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true');
      setTimeout(() => {
        history.push('/CorgiSHOP');
      }, 3000);
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  
  return (
    <div className="flex justify-center items-center h-screen">
      <Card color="white" shadow="regular" className="p-4">
        <div className="flex">
          <div>
            <Typography variant="h4" color="blue-gray">
              {isLoggedIn ? 'Minha conta' : 'Login'}
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Digite seus dados para fazer login.
            </Typography>
            <form
              className="mt-4 mb-2 w-80 max-w-screen-lg sm:w-96"
              onSubmit={handleSubmit}
            >
              {error && (
                <div className="text-red-500 text-sm mb-4 p-2 rounded bg-yellow-700">
                  {error}
                </div>
              )}
              {successMessage && (
                <div className="text-black text-sm mb-4 p-2 rounded bg-green-200">
                  {successMessage}
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
              <Button type="submit" className="mt-6" fullWidth>
                Entrar
              </Button>
              <Typography
                color="gray"
                className="mt-4 text-center font-normal"
              >
                Não tem uma conta?{' '}
                <a
                  href="#"
                  className="font-medium text-blue-500 transition-colors hover:text-blue-700"
                  onClick={handleToggleForm}
                >
                  Cadastre-se
                </a>
              </Typography>
            </form>
          </div>
          <img
            src={corgiImage}
            alt="Corgi Cat"
            className="hidden sm:block ml-8 w-96 h-auto"
          />
        </div>
      </Card>
    </div>
  );
};

export default LoginForm;
