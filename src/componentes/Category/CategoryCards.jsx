import React from 'react';

import Product01 from '../../assets/img/Products/1.png';
import Product02 from '../../assets/img/Products/2.png';
import Product03 from '../../assets/img/Products/3.png';

const CategoryCards = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-lg text-center sm:text-left ml-4 border-s-4 border-blue-400">
        <h2 className="ml-4 text-2xl text-black sm:text-2xl md:text-4xl mb-12 font-roboto font-semibold" id='fonte-personalizada'>
          Categorias
        </h2>
      </div>
      <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-3 sm:row-gap-6 ">
        <a href="/" aria-label="View Item">
        <div className="relative overflow-hidden transition duration-200 transform rounded-lg shadow-lg hover:-translate-y-2 hover:shadow-2xl" style={{ backgroundColor: "#eccbb0" }}>

            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={Product01}
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-blue-500 bg-opacity-75">
              <p className="text-xl font-bold tracking-wide text-white text-center">
                Roupinhas
              </p>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
        <div className="relative overflow-hidden transition duration-200 transform rounded-lg shadow-lg hover:-translate-y-2 hover:shadow-2xl" style={{ backgroundColor: "#eccbb0" }}>

            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={Product02}
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-blue-500 bg-opacity-75">
              <p className="text-xl font-bold tracking-wide text-white text-center">
                Brinquedos
              </p>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
        <div className="relative overflow-hidden transition duration-200 transform rounded-lg shadow-lg hover:-translate-y-2 hover:shadow-2xl" style={{ backgroundColor: "#eccbb0" }}>

            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={Product03}
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-blue-500 bg-opacity-75">
              <p className="text-xl font-bold tracking-wide text-white text-center">
                Acessórios
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default CategoryCards;
