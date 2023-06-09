import React from 'react';

import roupinhaChucky1 from '../../assets/img/Products/Roupinhas/Roupinha-chucky/roupinha-chucky1.png';
import brinquedoBola2 from '../../assets/img/Products/Brinquedo/Brinquedo-porquinho/brinquedo-porquinho-chalesco1.jpg';
import sedex from '../../assets/img/sedex.jpg';
import jadlog from '../../assets/img/jadlog.jpg';


const CheckoutForm = () => {

    return (
    <div className='mb-16'>
        <div class="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">                    
            <div class="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
                <div class="relative">
                <ul class="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
                    <li class="flex items-center space-x-3 text-left sm:space-x-4">
                    <a class="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700" href="#"
                        ><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg
                    ></a>
                    <span class="font-semibold text-gray-900">Carrinho</span>
                    </li>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    <li class="flex items-center space-x-3 text-left sm:space-x-4">
                    <a class="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white ring ring-gray-300 ring-offset-2" href="#">2</a>
                    <span class="font-semibold text-gray-900">Detalhes de pagamento</span>
                    </li>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    <li class="flex items-center space-x-3 text-left sm:space-x-4">
                    <a class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white" href="#">3</a>
                    <span class="font-semibold text-gray-500">Confirmação de pagamento</span>
                    </li>
                </ul>
                </div>
            </div>
            </div>
            <div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
            <div class="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
                <p class="text-xl font-medium">Detalhes de pagamento.</p>
                <p class="text-gray-400">Complete seu pedido fornecendo seus detalhes de pagamento.</p>
                <div class="">
                <label for="email" class="mt-4 mb-2 block text-sm font-medium">Email</label>
                <div class="relative">
                    <input type="text" id="email" name="email" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="email@gmail.com" />
                    <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                    </div>
                </div>
                <label for="card-holder" class="mt-4 mb-2 block text-sm font-medium">Titular do cartão</label>
                <div class="relative">
                    <input type="text" id="card-holder" name="card-holder" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Nome impresso no cartao" />
                    <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                    </svg>
                    </div>
                </div>
                <label for="card-no" class="mt-4 mb-2 block text-sm font-medium">Detalhes do cartão</label>
                <div class="flex">
                    <div class="relative w-7/12 flex-shrink-0">
                    <input type="text" id="card-no" name="card-no" class="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="xxxx-xxxx-xxxx-xxxx" />
                    <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                        <svg class="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                        <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                        </svg>
                    </div>
                    </div>
                    <input type="text" name="credit-expiry" class="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="MM/YY" />
                    <input type="text" name="credit-cvc" class="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="CVC" />
                </div>
                <label for="billing-address" class="mt-4 mb-2 block text-sm font-medium">Endereço de entrega</label>

                <div class="flex flex-col sm:flex-row">
                    <div class="relative flex-shrink-0 sm:w-7/12">
                        <input type="text" id="billing-address" name="billing-address" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Rua, número, complemento" />
                        <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                            <img class="h-4 w-4 object-contain" src="https://flagpack.xyz/_nuxt/07526ac1d7faf6537ceae0c33d4ac53c.svg" alt="" />
                        </div>
                    </div>
                    <select type="text" name="billing-state" class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
                        <option value="State">Estado</option>
                    </select>
                    <input type="text" name="billing-zip" class="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="CEP" />
                </div>
                <div class="relative">
                    <p class="mt-4 mb-4 text-lg font-medium">Frete</p>

                    <input class="peer hidden" id="radio_1" type="radio" name="radio" checked />
                    <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                    <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_1">
                    <img class="w-14 object-contain" src={sedex} alt="" />
                    <div class="ml-5">
                        <span class="mt-2 font-semibold">SEDEX</span>
                        <p class="text-slate-500 text-sm leading-6">Entrega: 2-4 Days</p>
                    </div>
                    </label>
                </div>
                <div class="relative">
                    <input class="peer hidden" id="radio_2" type="radio" name="radio" checked />
                    <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                    <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_2">
                    <img class="w-14 object-contain" src={jadlog} alt="" />
                    <div class="ml-5">
                        <span class="mt-2 font-semibold">JadLog Transportadora</span>
                        <p class="text-slate-500 text-sm leading-6">Delivery: 3-7 Days</p>
                    </div>
                    </label>
                </div>
                </div>               
            </div>
            <div class="px-4 pt-8">
                <p class="text-xl font-medium">Resumo do pedido</p>
                <p class="text-gray-400">Verifique seus itens. E selecione um método de envio adequado.</p>
                <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                <div class="flex flex-col rounded-lg bg-white sm:flex-row">
                    <img class="m-2 h-24 w-28 rounded-md border object-cover object-center" src={roupinhaChucky1} alt="" />
                    <div class="flex w-full flex-col px-4 py-4">
                    <span class="font-semibold">Roupinha chucky</span>
                    <span class="float-right text-gray-400">TAM 01</span>
                    <p class="text-lg font-bold">R$79.99</p>
                    </div>
                </div>
                <div class="flex flex-col rounded-lg bg-white sm:flex-row">
                    <img class="m-2 h-24 w-28 rounded-md border object-cover object-center" src={brinquedoBola2} alt="" />
                    <div class="flex w-full flex-col px-4 py-4">
                    <span class="font-semibold">Brinquedo de bola azul</span>
                    <span class="float-right text-gray-400">TAM ÚNICO</span>
                    <p class="mt-auto text-lg font-bold">R$49.99</p>
                    </div>
                </div>
                </div>
                <form class="mt-5 grid gap-6">
                <div class="mt-6 border-t border-b py-2">
                    <div class="flex items-center justify-between">
                    <p class="text-sm font-medium text-gray-900">Subtotal</p>
                    <p class="font-semibold text-gray-900">R$ 129,99</p>
                    </div>
                    <div class="flex items-center justify-between">
                    <p class="text-sm font-medium text-gray-900">Frete</p>
                    <p class="font-semibold text-gray-900">R$ 15,00</p>
                    </div>
                </div>
                <div class="mt-6 flex items-center justify-between">
                    <p class="text-sm font-medium text-gray-900">Total</p>
                    <p class="text-2xl font-semibold text-gray-900">R$ 144,99</p>
                </div>   
                <button class="mt-4 mb-8 w-full rounded-md bg-blue-500 px-6 py-3 font-medium text-white">Confirmar pedido</button>                        
                </form>
            </div>
        </div>
    </div>       
    )
}   


export default CheckoutForm;