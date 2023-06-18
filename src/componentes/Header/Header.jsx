import React, { useEffect, useState } from 'react';
import Cart from '../Shopping Cart/Cart';
import { HeartIcon, ShoppingCartIcon, EnvelopeIcon, PhoneIcon, UserIcon, FlagIcon } from "@heroicons/react/24/solid";
import Brasil from '../../assets/img/brasil.png';
import Logo from '../../assets/img/logo3.png';

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const getEmailFromLocalStorage = () => {
    return localStorage.getItem('email');
  };

  const handleLogout = () => {
    localStorage.removeItem('email');
  };

  useEffect(() => {
    const dropdownButton = document.getElementById('dropdown-button');
    const dropdown = document.getElementById('dropdown');

    const handleClick = () => {
      const isDropdownHidden = dropdown.classList.contains('hidden');

      if (isDropdownHidden) {
        dropdown.classList.remove('hidden');
      } else {
        dropdown.classList.add('hidden');
      }
    };

    dropdownButton.addEventListener('click', handleClick);

    return () => {
      dropdownButton.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    if (isCartOpen) {
      // Lógica para abrir o carrinho aqui
    }
  }, [isCartOpen]);

  useEffect(() => {
    const email = getEmailFromLocalStorage();
    console.log('Email armazenado no localStorage:', email);
  }, []);

  const email = getEmailFromLocalStorage();
  const loginText = email ? 'Minha conta' : 'Login';

  return (
    <div className="w-auto">
      <nav className="bg-light-blue-900 border-gray-200 dark: justify-end w-full">
        <div className="flex flex-wrap items-center max-w-screen-4xl p-1">
          <div className="flex items-center justify-self-start">
            <a href="#" className="flex items-center mr-6 text-white">
              <EnvelopeIcon className="h-4 mr-2 mt-0 ml-2" />
              <span className="text-sm font-semibold whitespace-nowrap">CORGISHOP@GMAIL.COM</span>
            </a>
            <a href="#" className="flex items-center text-white">
              <PhoneIcon className="h-4 mr-2 mt-0" />
              <span className="text-sm font-semibold whitespace-nowrap">(21) 3434-3434</span>
            </a>
          </div>

          <div className="flex items-center ml-auto justify-self-end mr-6">
            <button
              type="button"
              data-dropdown-toggle="language-dropdown-menu"
              className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-white rounded-lg cursor-pointer hover:bg-sky-800 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <img src={Brasil} alt="Bandeira do Brasil" className="w-7 h-5 mr-2" />
              Português (BR)
            </button>
            {email ? (
              <a href="/CorgiSHOP/authentication" onClick={handleLogout} className="flex items-center text-base ml-4 text-white">
                <UserIcon className="h-4 mr-2 mt-0" />
                Logout
              </a>
            ) : (
              <a href="/CorgiSHOP/authentication" className="flex items-center text-base ml-4 text-white">
                <UserIcon className="h-4 mr-2 mt-0" />
                Login
              </a>
            )}
          </div>
        </div>
      </nav>

      <div className="flex h-24 bg-light-blue-600 justify-between items-center px-5 mt-1 border-b-4 border-grey-200 ">
        <a href="/">
          <div style={{ clipPath: 'polygon(0 1%, 45% 0, 100% 100%, 0% 100%)', marginLeft: '-20px' }} className="bg-white w-48">
            <img className="w-auto w-15 h-24" src={Logo} alt="Logo" />
          </div>
        </a>

        <div className="flex">
          <div className="relative w-72">
            <button
              id="dropdown-button"
              data-dropdown-toggle="dropdown"
              className="z-10 inline-flex items-center py-2.5 px-3 text-xs sm:text-sm font-medium text-center text-gray-900 bg-gray-50 border border-gray-300 rounded-l-lg hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
              type="button"
            >
              Todas as categorias
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              id="dropdown"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700 absolute"
            >
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                <li>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Roupas e vestuário
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Brinquedos
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Acessórios
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative w-full mr-12">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 dark:bg-gray-700 dark:border-l-gray-400 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder="Procure por Roupas, Acessórios ..."
            />
           <button
              type="submit"
              className="absolute top-0 right-0 p-2.5 text-sm font-medium text-black-500 bg-orange-100 rounded-r-lg border border-gray-300 hover:bg-orange-200 focus:outline-none dark:bg-orange-200 dark:hover:bg-orange-200 dark:focus:ring-blue-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative">
          <ShoppingCartIcon
            className="h-8 text-white m-2 hidden sm:block cursor-pointer"
            onClick={toggleCart}
          />
          <span className="absolute top-0 right-0 h-5 w-5 flex items-center justify-center bg-red-500 rounded-full text-white text-xs" id="cartNumber">
            +
          </span>

          {isCartOpen && <Cart />}
        </div>
      </div>
    </div>
  );
};

export default Header;
