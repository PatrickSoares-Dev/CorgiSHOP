import React, { useState } from 'react';
import {
  Card, Input, Checkbox, Button, Typography,
} from "@material-tailwind/react";
import corgiImage from '../../assets/img/dogregister.png';

const AuthenticationForm = ({ handleToggleForm }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'confirmPassword') {
      setConfirmPassword(value);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Nome é obrigatório.';
    }

    if (!email.trim()) {
      newErrors.email = 'E-mail é obrigatório.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'E-mail inválido.';
    }

    if (!password) {
      newErrors.password = 'Senha é obrigatória.';
    } else if (password.length < 6) {
      newErrors.password = 'A senha deve ter no mínimo 6 caracteres.';
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'As senhas não coincidem.';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Realize o registro ou ação desejada aqui

      // Após o registro bem-sucedido, exiba o formulário de login
      handleToggleForm();
    }
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <Card color="white" shadow="regular" className="p-4">
        <div className="flex">
          <div>
            <img src={corgiImage} alt="Corgi" className="w-96 h-full mr-16 rounded" />
          </div>
          <div>
            <Typography variant="h4" color="blue-gray">
              Registre-se
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Digite seus dados para se registrar.
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
              <div className="mb-4 flex flex-col gap-6">
                <Input
                  size="lg"
                  label={`Nome${errors.name ? ` - ${errors.name}` : ''}`}
                  name="name"
                  value={name}
                  onChange={handleInputChange}
                  error={errors.name}
                />
                <Input
                  size="lg"
                  label={`Email${errors.email ? ` - ${errors.email}` : ''}`}
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  error={errors.email}
                />
                <Input
                  type="password"
                  size="lg"
                  label={`Senha${errors.password ? ` - ${errors.password}` : ''}`}
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                  error={errors.password}
                />
                <Input
                  type="password"
                  size="lg"
                  label={`Confirmar senha${errors.confirmPassword ? ` - ${errors.confirmPassword}` : ''}`}
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleInputChange}
                  error={errors.confirmPassword}
                />
              </div>
              <Checkbox
                label={
                  (
                    <Typography
                      variant="small"
                      color="gray"
                      className="flex items-center font-normal"
                    >
                      Concordo com os
                      <a
                        href="#"
                        className="font-medium transition-colors hover:text-blue-500"
                      >
                        &nbsp;Termos e Condições
                      </a>
                    </Typography>
                  )
                }
                containerProps={{ className: "-ml-2.5" }}
                required
              />
              <Button type="submit" className="mt-6" fullWidth>
                Registrar
              </Button>
              <Typography color="gray" className="mt-4 text-center font-normal">
                Já tem uma conta?{' '}
                <a
                  href="#"
                  className="font-medium text-blue-500 transition-colors hover:text-blue-700"
                  onClick={handleToggleForm}
                >
                  Entrar
                </a>
              </Typography>
            </form>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default AuthenticationForm;
