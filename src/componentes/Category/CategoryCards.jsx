import React from 'react';

import Product01 from '../../assets/img/Products/1.png'
import Product02 from '../../assets/img/Products/2.png'
import Product03 from '../../assets/img/Products/3.png'

const CategoryCards = () => {

    return (   
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-6 sm:mx-auto sm:text-center md:mb-10 lg:max-w-2xl">
          <p className="mb-1 text-2xl font-semibold tracking-wide uppercase md:mb-2 text-sky-500">
            Categorias
          </p>
          <p className="text-base text-gray-700 md:text-lg">
            Filtre pelas nossas categorias de produtos
          </p>
        </div>
        <div className="grid gap-4 row-gap-4 lg:grid-cols-3">
          <div>
            <img
              className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
              src={Product01}
              alt=""
            />
          </div>
          <div>
            <img
              className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
              src={Product02}
              alt=""
            />
          </div>
          <div>
            <img
              className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
              src={Product03}
              alt=""
            />
          </div>
        </div>
      </div>
    );
};

export default CategoryCards;