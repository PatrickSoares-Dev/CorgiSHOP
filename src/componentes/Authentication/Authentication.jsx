import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
 
import { UserIcon } from "@heroicons/react/24/solid";

export default function Login() {
    const [openLogin, setOpenLogin] = React.useState(false);
    const [openSignup, setOpenSignup] = React.useState(false);
  
    const handleOpenLogin = () => setOpenLogin(true);
    const handleOpenSignup = () => {
      setOpenLogin(false); // Fechar o formulário de login
      setOpenSignup(true); // Abrir o formulário de registro
    };
    const handleClose = () => {
      setOpenLogin(false);
      setOpenSignup(false);
    };
  
    const handleRegister = () => {
      handleOpenSignup(); // Abrir o formulário de registro
      handleClose(); // Fechar o formulário de login
    };
  
    const handleSignIn = () => {
      handleOpenLogin(); // Abrir o formulário de login
      handleClose(); // Fechar o formulário de registro
    };
 
  return (
    <React.Fragment>
      <a href="#" className="flex items-center text-base ml-4 text-white" onClick={handleOpenLogin}>
        <UserIcon className="h-5 mr-2 mt-0" />
        Login
      </a>

      <Dialog
        size="xs"
        open={openLogin}
        handler={handleClose}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Login
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input label="Email" size="lg" />
            <Input label="Password" size="lg" />
            <div className="-ml-2.5">
              <Checkbox label="Lembre-me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleClose} fullWidth>
              Login
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Não tem uma conta?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue"
                className="ml-1 font-bold"
                onClick={handleOpenSignup}
              >
                Registre-se
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>

      
      <Dialog
        size="md"
        open={openSignup}
        handler={handleClose}
        className="bg-transparent shadow-none"        
      >
        
        <Card color="white" shadow={false} className="text-center">
            <Typography variant="h4" color="blue-gray" className="mt-4">
                Registre-se
            </Typography>
            <Typography color="gray" className="mt-1 font-normal text-center">
                Preencha suas informações
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto text-center"> {/* Adicionado "mx-auto text-center" */}
                <div className="mb-4 flex flex-col gap-6">
                <Input size="lg" label="Nome Completo" />
                <Input size="lg" label="CPF" />
                <Input size="lg" label="Email" />
                <Input type="password" size="lg" label="Senha" />
                </div>
                <Checkbox
                label={
                    <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal"
                    >
                    Eu aceito os
                    <a
                        href="#"
                        className="font-medium transition-colors hover:text-blue-500"
                    >
                        &nbsp;Termos e condições
                    </a>
                    </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
                />
                <Button className="mt-6" fullWidth>
                Registrar
                </Button>
                <Typography color="gray" className="mt-4 text-center font-normal">
                Já tem uma conta?{" "}
                <a
                    href="#"
                    className="font-medium text-blue-500 transition-colors hover:text-blue-700"
                    onClick={handleOpenLogin} // Abrir o formulário de login
                >
                    Login
                </a>
                </Typography>
            </form>
            </Card>
      </Dialog>
    </React.Fragment>
  );
}
