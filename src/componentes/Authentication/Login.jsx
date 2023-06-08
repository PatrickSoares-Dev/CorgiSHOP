import React from 'react';
import {
  Card, Input, Checkbox, Button, Typography,
} from "@material-tailwind/react";
import corgiImage from '../../assets/img/catlogin.png';

const LoginForm = ({ handleToggleForm }) => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Card color="white" shadow="regular" className="p-4">
        <div className="flex">
          <div>
            <Typography variant="h4" color="blue-gray">
              Login
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Digite seus dados para fazer login.
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-4 flex flex-col gap-6">
                <Input size="lg" label="Email" />
                <Input type="password" size="lg" label="Senha" />
              </div>
              <Checkbox
                label={
                  (
                    <Typography
                      variant="small"
                      color="gray"
                      className="flex items-center font-normal"
                    >
                      Lembrar-me
                    </Typography>
                  )
                }
                containerProps={{ className: "-ml-2.5" }}
              />
              <Button className="mt-6" fullWidth>
                Entrar
              </Button>
              <Typography color="gray" className="mt-4 text-center font-normal">
                Não tem uma conta?{' '}
                <a
                  href="#"
                  className="font-medium text-blue-500 transition-colors hover:text-blue-700"
                  onClick={handleToggleForm}
                >
                  Registre-se
                </a>
              </Typography>
            </form>
          </div>
          <div>
            <img src={corgiImage} alt="Corgi" className="w-96 h-auto ml-16 rounded" />
          </div>
        </div>
      </Card>
    </div>
  );
}

export default LoginForm;
