import React from "react";
import { Button, Dialog, Card, CardHeader, CardBody, CardFooter, Typography, Input, Checkbox } from "@material-tailwind/react";
import { UserIcon } from "@heroicons/react/24/solid";
import InputMask from "react-input-mask";

export default function Login() {
  const [openLogin, setOpenLogin] = React.useState(false);
  const [openSignup, setOpenSignup] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [fullName, setFullName] = React.useState("");
  const [cpf, setCPF] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [termsAccepted, setTermsAccepted] = React.useState(false);
  const [invalidEmail, setInvalidEmail] = React.useState(false);
  const [invalidCPF, setInvalidCPF] = React.useState(false);
  const [invalidConfirmPassword, setInvalidConfirmPassword] = React.useState(false);

  const handleOpenLogin = () => {
    setOpenLogin(true);
    setOpenSignup(false);
  };

  const handleOpenSignup = () => {
    setOpenLogin(false);
    setOpenSignup(true);
  };

  const handleClose = () => {
    setOpenLogin(false);
    setOpenSignup(false);
  };

  const validateFields = () => {
    setInvalidEmail(email.trim() === "");
    setInvalidCPF(cpf.trim() === "");
    setInvalidConfirmPassword(password !== confirmPassword || password.trim() === "" || confirmPassword.trim() === "");

    if (fullName.trim() === "" || cpf.trim() === "" || email.trim() === "" || password.trim() === "" || password !== confirmPassword) {
      return false;
    }

    return true;
  };

  const handleRegister = () => {
    if (!validateFields()) {
      return;
    }

    handleOpenLogin();
    handleClose();
  };

  const handleSignIn = () => {
    if (email.trim() === "" || password.trim() === "") {
      return;
    }

    handleOpenSignup();
    handleClose();
  };

  return (
    <React.Fragment>
      <a href="#" className="flex items-center text-base ml-4 text-white" onClick={handleOpenLogin}>
        <UserIcon className="h-5 mr-2 mt-0" />
        Login
      </a>

      <Dialog size="xs" open={openLogin} handler={handleClose} className="bg-transparent shadow-none">
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardHeader variant="gradient" color="blue" className="mb-4 grid h-12 place-items-center">
            <Typography variant="h3" color="white">
              Login
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input
              label="Email"
              size="lg"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setInvalidEmail(false);
              }}
              className={invalidEmail ? "input-error" : ""}
            />
            <Input
              label="Password"
              size="lg"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="-ml-2.5">
              <Checkbox label="Lembre-me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleSignIn} fullWidth>
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

      <Dialog size="md" open={openSignup} handler={handleClose} className="bg-transparent shadow-none">
        <Card color="white" shadow={false} className="text-center">
          <Typography variant="h4" color="blue-gray" className="mt-2">
            Registre-se
          </Typography>
          <Typography color="gray" className="mt-1 font-normal text-center">
            Preencha suas informações
          </Typography>
          <form className="mt-2 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto text-center">
            <div className="mb-4 flex flex-col gap-6">
              <Input
                size="lg"
                label="Nome Completo"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <InputMask
                mask="999.999.999-99"
                value={cpf}
                onChange={(e) => {
                  setCPF(e.target.value);
                  setInvalidCPF(false);
                }}
              >
                {(inputProps) => (
                  <Input
                    size="lg"
                    label="CPF"
                    {...inputProps}
                    className={invalidCPF ? "input-error" : ""}
                  />
                )}
              </InputMask>
              <Input
                size="lg"
                label="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setInvalidEmail(false);
                }}
                className={invalidEmail ? "input-error" : ""}
              />
              <Input
                type="password"
                size="lg"
                label="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Input
                type="password"
                size="lg"
                label="Confirme a senha"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setInvalidConfirmPassword(false);
                }}
                className={invalidConfirmPassword ? "input-error" : ""}
              />
            </div>
            <Checkbox
              label={
                <Typography variant="small" color="gray" className="flex items-center font-normal">
                  Eu aceito os
                  <a href="#" className="font-medium transition-colors hover:text-blue-500">
                    &nbsp;Termos e condições
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
              checked={termsAccepted}
              onChange={() => setTermsAccepted(!termsAccepted)}
            />
            <Button className="mt-6" fullWidth onClick={handleRegister}>
              Registrar
            </Button>
            <Typography color="gray" className="mt-2 text-center font-normal">
              Já tem uma conta?{" "}
              <a
                href="#"
                className="font-medium text-blue-500 transition-colors hover:text-blue-700"
                onClick={handleOpenLogin}
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
