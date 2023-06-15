import React, { useState, useEffect } from 'react';
import axios from 'axios';
import sedex from '../../assets/img/sedex.jpg';
import jadlog from '../../assets/img/jadlog.jpg';

const OrderDetails = () => {
  const [userEmail, setUserEmail] = useState('');
  const [subtotal, setSubtotal] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const email = localStorage.getItem('email');
    setUserEmail(email);

    axios
      .get('http://localhost:8080/cart/get-cart', {
        params: {
          email: email,
        },
      })
      .then((response) => {
        const products = response.data.products;
        setProducts(products);
        createCart(products);
      })
      .catch((error) => {
        console.error('Ocorreu um erro:', error);
      });
  }, []);

  const createCart = (products) => {
    const cartItems = [];

    products.forEach((product) => {
      const existingItem = cartItems.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cartItems.push({
          id: product.id,
          nome: product.nome,
          imagem1: product.imagem1,
          valorProduto: product.valorProduto,
          color: 'unica',
          quantity: 1,
        });
      }
    });

    setProducts(cartItems);
  };

  useEffect(() => {
    const count = products.length;
    let totalQuantity = 0;

    products.forEach((product) => {
      totalQuantity += product.quantity;
    });

    console.log('Quantidade de produtos:', count);
    console.log('Quantidade total:', totalQuantity);
  }, [products]);

  useEffect(() => {
    const total = products.reduce(
      (accumulator, product) =>
        accumulator + product.valorProduto * product.quantity,
      0
    );
    setSubtotal(total);
  }, [products]);

  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto ">
      <div className="flex justify-start item-start space-y-2 flex-col">
        <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
          Pedido <span className="text-blue-500">#13432</span>
        </h1>
        <p className="text-base font-medium leading-6 text-gray-600">Data do pedido {currentDate}</p>
      </div>
      <div className="mt-10 flex flex-col xl:flex-row justify-center items-stretch w-full md:space-y-6 ">
        <div className="flex flex-col justify-start items-start w-full  md:space-y-6 xl:space-y-8">
          <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">Carrinho</p>
          <div className="w-full rounded-md bg-white drop-shadow-lg">
            {products.map((product) => (
              <div key={product.id} className="flex flex-col justify-start items-start w-full space-y-2 md:space-y-6 xl:space-y-8 ">
                <div className="flex flex-col justify-start items-start px-8 w-full">
                  <div className="md:mt-2 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-2 xl:space-x-4 w-full border-b-2 border-gray-200 mb-2">
                    <img src={product.imagem1} alt={product.nome} className="w-24 h-24 md:w-16 md:h-24 xl:w-40 xl:h-24 object-contain" />
                    <div className="flex flex-col justify-start items-start">
                      <p className="text-base md:text-lg font-semibold leading-6 text-gray-800">{product.nome}</p>
                      <p className="text-sm md:text-base font-medium leading-5 text-gray-600">Quantidade: {product.quantity}</p>
                      <p className="text-sm md:text-base font-medium leading-5 text-gray-600">Valor unitário: R${product.valorProduto}</p>
                      <p className="text-base md:text-lg font-semibold leading-8 text-gray-800 mt-2">Subtotal: R${(product.valorProduto * product.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>          
        </div>
        <div className="bg-gray-50 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
          <h3 className="text-xl font-semibold leading-5 text-gray-800">Cliente</h3>
          <div className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0 ">
            <div className="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
              <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
                
                <div className="flex flex-col justify-start items-start flex-shrink-0">
                  <div className="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                    <img src="https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_1280.png" className="h-16" alt="avatar" />
                    <div className="flex justify-start items-start flex-col space-y-2">
                      <p className="text-base font-semibold leading-4 text-left text-gray-800">{userEmail}</p>
                      <p className="text-sm leading-5 text-gray-600">5 Pedidos recentes</p>
                    </div>
                  </div>
                  <div className="flex justify-center md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M3 7L12 13L21 7" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="cursor-pointer text-sm leading-5 text-gray-800">{userEmail}</p>
                  </div>
                </div>
                <div className="flex justify-center md:justify-start items-center flex-col space-y-4 xl:mt-8">
                  <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-base leading-5 text-gray-800">Endereço de entrega</p>
                  <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">Avenida das Américas, 3434 - Barra da Tijuca</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8 mt-4 drop-shadow-lg">
        <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full  bg-white rounded-md space-y-6">
          <h3 className="text-xl font-semibold leading-5 text-gray-800">Resumo</h3>
          <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
            <div className="flex justify-between w-full">
              <p className="text-base leading-4 text-gray-800">Subtotal</p>
              <p className="text-base leading-4 text-gray-600">R${subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="text-base leading-4 text-gray-800">Frete</p>
              <p className="text-base leading-4 text-gray-600">R$15.00</p>
            </div>
          </div>
          <div className="flex justify-between items-center w-full">
            <p className="text-base font-semibold leading-4 text-gray-800">Total</p>
            <p className="text-base font-semibold leading-4 text-gray-600">
              R${(subtotal + 15).toFixed(2)}
            </p>
          </div>
        </div>
  
        <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full  bg-white rounded-md space-y-6">
          <h3 className="text-xl font-semibold leading-5 text-gray-800">Frete</h3>
          <div className="flex justify-between items-start w-full">
            <div className="flex justify-center items-center space-x-4">
              <div class="w-8 h-8">
                <img class="w-full h-full" alt="logo" src={jadlog} />
              </div>
              <div className="flex flex-col justify-start items-center">
                <p className="text-lg leading-6 font-semibold text-gray-800">
                  Jadlog Transportadora
                  <br />
                  <span className="font-normal">Entrega de 2-4 dias úteis</span>
                </p>
              </div>
            </div>
            <p className="text-lg font-semibold leading-6 text-gray-800">R$15.00</p>
          </div>
          <div className="w-full flex justify-center items-center">
            <code className="text-blue-500 font-medium text-lg">Código de rastreio: CG143426645BR</code>
         </div>

        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
