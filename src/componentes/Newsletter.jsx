import React from 'react';

import Caramelopng from '../assets/img/Products/Caramelo.png'

const Newsletter = () => {

    return (
    <div class="container my-12 px-6 mx-auto">
        <section class="mb-32 text-gray-800 text-center lg:text-left border rounded-md">
            <div class="block rounded-lg shadow-lg bg-white">
            <div class="flex flex-wrap items-center">
                <div class="grow-0 shrink-0 basis-auto hidden lg:flex lg:w-10/12 xl:w-4/12">
                <img
                    src={Caramelopng}
                    alt="Trendy Pants and Shoes"
                    class="w-full h-full"
                />
                </div>
                <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                <div class="px-6 py-12 md:px-12">
                    <h2 class="text-3xl font-bold mb-6">
                    Não perca nenhuma promoção
                    <br />
                    <span class="text-sky-500">Se inscreva para novidades</span>
                    </h2>
                    <p class="text-gray-500 mb-12">
                    Receba as promoções em primeira mão
                    </p>
                    <div class="md:flex flex-row">
                    <input
                        type="text"
                        class="form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Insira o seu e-mail"
                    />
                    <button
                        type="submit"
                        class="inline-block px-7 py-3 bg-sky-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-sky-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
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
    )
}

export default Newsletter;