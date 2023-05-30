import React from 'react';

const Category = () => {
  return (
    <nav className="border-b-2 border-gray-200 mt-1">
      <div className="max-w-screen-4xl px-2 md:px-4 lg:px-6 py-2 mx-auto">
        <div className="flex items-center">
          <ul className="flex flex-row font-medium mt-0 mr-6 space-x-4 md:space-x-8 text-sm">
            <li>
              <a
                href="#"
                className="text-gray-900 dark:text-white hover:underline"
                aria-current="page"
              >
                Página inicial
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-900 dark:text-white hover:underline"
              >
                Roupas e vestuário
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-900 dark:text-white hover:underline"
              >
                Brinquedos
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-900 dark:text-white hover:underline"
              >
                Acessórios
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Category;
