
import { HeartIcon, ShoppingCartIcon, EnvelopeIcon, PhoneIcon, UserIcon, FlagIcon } from "@heroicons/react/24/solid";
import React, { useEffect } from 'react';
import '../index.css';

import Brasil from '../assets/img/brasil.png'
import Logo from '../assets/img/logo3.png'

const Header = () => {
  useEffect(() => {
    // Obtém uma referência para o botão e para a dropdown
    const dropdownButton = document.getElementById('dropdown-button');
    const dropdown = document.getElementById('dropdown');

    // Adiciona um evento de clique ao botão
    const handleClick = () => {
      // Verifica se a dropdown está oculta
      const isDropdownHidden = dropdown.classList.contains('hidden');

      // Se estiver oculta, exibe a dropdown; caso contrário, oculta-a
      if (isDropdownHidden) {
        dropdown.classList.remove('hidden');
      } else {
        dropdown.classList.add('hidden');
      }
    };

    dropdownButton.addEventListener('click', handleClick);

    // Remove o evento de clique quando o componente for desmontado
    return () => {
      dropdownButton.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    // Header secundário
        <div className="w-auto">
           <nav className="bg-sky-700 border-gray-200 dark:bg-gray-900 justify-end w-full">
                <div className="flex flex-wrap items-center max-w-screen-4xl p-1">
                    {/* Esquerda */}
                    <div className="flex items-center justify-self-start">
                        <a href="" className="flex items-center mr-6 text-white">
                        <EnvelopeIcon className="h-4 mr-2 mt-0" />
                        <span className="text-sm font-semibold whitespace-nowrap">CORGISHOP@GMAIL.COM</span>
                        </a>
                        <a href="" className="flex items-center text-white">
                        <PhoneIcon className="h-4 mr-2 mt-0" />
                        <span className="text-sm font-semibold whitespace-nowrap">(21) 3434-3434</span>
                        </a>
                    </div>

                    {/* Direita */}
                    <div className="flex items-center ml-auto justify-self-end mr-6">
                        <button
                        type="button"
                        data-dropdown-toggle="language-dropdown-menu"
                        className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-white rounded-lg cursor-pointer hover:bg-sky-800 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                        <img src={Brasil} alt="Bandeira do Brasil" className="w-7 h-5 mr-2" />
                        Português (BR)
                        </button>
                        <a href="#" className="flex items-center text-base ml-4 text-white">
                        <UserIcon className="h-5 mr-2 mt-0" />
                        Login
                        </a>
                    </div>
                 </div>
            </nav>

            {/* Header principal */}
            <div className="flex h-24 bg-sky-500 justify-between items-center px-5 mt-1 border-b-4 border-grey-200 ">
                
                <a href="/">
                    <div style={{ clipPath: 'polygon(0 1%, 45% 0, 100% 100%, 0% 100%)', marginLeft: '-20px' }} className="bg-white w-48">
                        <img className="w-auto w-15 h-24" src={Logo} />
                    </div>
                </a>

                <div class="flex">
                    <div class="relative w-72 ml-10">
                        <button id="dropdown-button" data-dropdown-toggle="dropdown" class="z-10 inline-flex items-center py-2.5 px-3 text-sm sm:text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">Todas as categorias<svg aria-hidden="true" class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                        <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700 absolute left-0 mt-1">
                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                            <li>
                            <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Roupas e vestuário</button>
                            </li>
                            <li>
                            <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Brinquedos</button>
                            </li>
                            <li>
                            <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Acessórios</button>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div class="relative w-full">
                        <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300   dark:bg-gray-700 dark:border-l-gray-400  dark:border-gray-400 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Procure por Roupas, Acessórios ..." />
                        <button type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium text-black-500 bg-orange-200 rounded-r-lg border border-gray-300 hover:bg-orange-300  focus:outline-none  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            <span class="sr-only">Search</span>
                        </button>
                    </div>
                </div>

                <div className="flex justify-between relative">
                    <div className="relative">
                        <HeartIcon className="h-8 text-white m-2 hidden sm:block cursor-pointer" />
                        <span className="absolute top-0 right-0 h-5 w-5 flex items-center justify-center bg-red-500 rounded-full text-white text-xs" id="favoriteNumber">3</span>
                    </div>
                    <div className="relative">
                        <ShoppingCartIcon className="h-8 text-white m-2 hidden sm:block cursor-pointer" />
                        <span className="absolute top-0 right-0 h-5 w-5 flex items-center justify-center bg-red-500 rounded-full text-white text-xs" id="cartNumber">5</span>
                    </div>
                </div>

            </div>
        </div>  
        
    )     
    
}

export default Header;
 
