import React from 'react';
import Caramelopng from '../../assets/img/Products/Caramelo.png';

const Newsletter = () => {
  return (
    <div className="container xl:mx-auto 2xl:mx-auto 4xl:mx-auto lg:max-w-screen-2xl">
      <section className="mb-32 text-gray-800 text-center lg:text-left border rounded-md mx-8">
        <div className="block rounded-lg shadow-lg bg-white">
          <div className="flex flex-wrap items-center">
            <div className="hidden lg:flex lg:w-8/12 xl:w-4/12">
              <img
                src={Caramelopng}
                alt="Trendy Pants and Shoes"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="w-full lg:w-4/12 xl:w-8/12">
              <div className="px-6 py-12 md:px-12">
                <h2 className="text-4xl font-bold mb-4">
                  Não perca nenhuma promoção
                  <br />
                  <span className="text-light-blue-500 text-2xl">Inscreva-se para receber novidades</span>
                </h2>
                <p className="text-gray-500 mb-4 text-lg">
                  Receba as promoções em primeira mão
                </p>
                <div className="flex flex-row">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Insira o seu e-mail"
                  />
                  <button
                    type="submit"
                    className="inline-block px-7 py-3 bg-blue-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-sky-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    ENVIAR
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
