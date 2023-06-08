import React, { useState } from 'react';
import Header from "../componentes/Header/Header";
import Footer from '../componentes/Footer/Footer';
import Category from "../componentes/Category/Category";
import Register from '../componentes/Authentication/Register';
import LoginForm from '../componentes/Authentication/Login';

const AuthenticationPage = () => {
  const [showLogin, setShowLogin] = useState(true);

  const handleToggleForm = () => {
    setTimeout(() => {
      setShowLogin(!showLogin);
    }, 200); // Delay de 300ms para suavizar a transição
  };

  return (
    <div className='bg-gray-100'>
      <Header/>    
      <Category/>
      <div className="flex justify-center items-center h-screen">
        {showLogin ? (
          <LoginForm
            key="login" // Adicionando a propriedade "key" para manter o foco nos cards de login e registro
            handleToggleForm={handleToggleForm}
            style={{
              opacity: 1,
              transform: 'translateY(0)',
              transition: 'opacity 300ms ease-in-out, transform 300ms ease-in-out',
            }}
          />
        ) : (
          <Register
            key="register" // Adicionando a propriedade "key" para manter o foco nos cards de login e registro
            handleToggleForm={handleToggleForm}
            style={{
              opacity: 1,
              transform: 'translateY(0)',
              transition: 'opacity 300ms ease-in-out, transform 300ms ease-in-out',
            }}
          />
        )}
      </div>      
      <Footer/>
    </div>
  );
}

export default AuthenticationPage;
