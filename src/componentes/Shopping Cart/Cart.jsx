import { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
// import roupinhaChucky1 from '../../assets/img/Products/Roupinhas/Roupinha-chucky/roupinha-chucky1';
// import roupinhaChucky2 from '../../assets/img/Products/Roupinhas/Roupinha-chucky/roupinha-chucky2';
// import brinquedoBola1 from '../../assets/img/Products/Brinquedo/Brinquedo-porquinho/brinquedo-porquinho-chalesco1';
// import brinquedoBola2 from '../../assets/img/Products/Brinquedo/Brinquedo-porquinho/brinquedo-porquinho-chalesco2';


import roupinhaChucky1 from '../../assets/img/Products/Roupinhas/Roupinha-chucky/roupinha-chucky1.png';
import roupinhaChucky2 from '../../assets/img/Products/Roupinhas/Roupinha-chucky/roupinha-chucky2.png';
import roupinhaLaCasa1 from '../../assets/img/Products/Roupinhas/Roupinha-lacasa/roupinha-laCasa1.jpg';
import roupinhaLaCasa2 from '../../assets/img/Products/Roupinhas/Roupinha-lacasa/roupinha-laCasa2.jpg';

const products = [
  {
    id: 1,
    name: 'Roupinha Chucky',
    href: '#',
    color: 'Unica',
    price: 'R$ 79,99',
    quantity: 1,
    imageSrc: roupinhaChucky1,
    imageAlt: roupinhaChucky2,
  },
  {
    id: 2,
    name: 'Capa de Chuva Future Pet La Casa de Papel',
    href: '#',
    color: 'Unica',
    price: 'R$ 169,99',
    quantity: 1,
    imageSrc: roupinhaLaCasa1,
    imageAlt: roupinhaLaCasa2,
  },

];


export default function Cart() {
  const [open, setOpen] = useState(true);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const prices = products.map((product) => parseFloat(product.price.replace('R$', '')));
    const total = prices.reduce((accumulator, currentPrice) => accumulator + currentPrice, 0);
    setSubtotal(total);
  }, [products]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">Carrinho</Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Fechar</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {products.map((product) => (
                              <li key={product.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href={product.href}>{product.name}</a>
                                      </h3>
                                      <p className="ml-4">{product.price}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">Quantidade {product.quantity}</p>

                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                      >
                                        Remover
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Total</p>
                        <p>{`R$ ${subtotal.toFixed(2)}`}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Frete e outras taxas calculadas no checkout.</p>
                      <div className="mt-6">
                        <a
                          href="/CorgiSHOP/checkout"
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Comprar
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          Ou 
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => setOpen(false)}
                          >
                               Continuar comprando
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
