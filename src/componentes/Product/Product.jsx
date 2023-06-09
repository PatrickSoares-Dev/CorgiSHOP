import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import roupinhaChucky1 from '../../assets/img/Products/Roupinhas/Roupinha-chucky/roupinha-chucky1.png';
import roupinhaChucky2 from '../../assets/img/Products/Roupinhas/Roupinha-chucky/roupinha-chucky2.png';
import roupinhaLaCasa1 from '../../assets/img/Products/Roupinhas/Roupinha-lacasa/roupinha-laCasa2.jpg';
import roupinhaLaCasa2 from '../../assets/img/Products/Roupinhas/Roupinha-lacasa/roupinha-laCasa3.jpg';
import brinquedoBola1 from '../../assets/img/Products/Brinquedo/Brinquedo-bola/bola-corda1.jpg';
import brinquedoBola2 from '../../assets/img/Products/Brinquedo/Brinquedo-bola/bola-corda2.jpg';
import acessoriosArranhador1 from '../../assets/img/Products/Acessorios/Acessorio-arranhador/acessorio-arranhador1.jpg';
import acessoriosArranhador2 from '../../assets/img/Products/Acessorios/Acessorio-arranhador/acessorio-arranhador2.jpg';


const Product = () => {
  const products = [
    {
      name_product: 'Roupinha de terror Chucky',
      value_product: 'R$ 79,99',
      value_off: 'R$ 99,99',
      img_product: roupinhaChucky1,
      hover_img_product: roupinhaChucky2,
    },

    {
      name_product: 'Roupa La Casa de Papel',
      value_product: 'R$ 169,99',
      value_off: 'R$ 209,99',
      img_product: roupinhaLaCasa1,
      hover_img_product: roupinhaLaCasa2,
    },

    {
      name_product: 'Brinqued Bola de Corda Azul',
      value_product: 'R$ 12,99',
      value_off: 'R$ 24,99',
      img_product: brinquedoBola1,
      hover_img_product: brinquedoBola2,
    },

    {
      name_product: 'Brinquedo Arranhador',
      value_product: 'R$ 39,99',
      value_off: 'R$ 49,99',
      img_product: acessoriosArranhador1,
      hover_img_product: acessoriosArranhador2,
    },
    {
      name_product: 'Roupinha Chucky',
      value_product: 'R$ 79,99',
      value_off: 'R$ 99,99',
      img_product: roupinhaChucky1,
      hover_img_product: roupinhaChucky2,
    },

    {
      name_product: 'Capa de Chuva Future Pet La Casa de Papel',
      value_product: 'R$ 169,99',
      value_off: 'R$ 209,99',
      img_product: roupinhaLaCasa1,
      hover_img_product: roupinhaLaCasa2,
    },

    {
      name_product: 'Brinquedo LCM Bola de Corda Verde',
      value_product: 'R$ 12,99',
      value_off: 'R$ 24,99',
      img_product: brinquedoBola1,
      hover_img_product: brinquedoBola2,
    },

    {
      name_product: 'Brinquedo Arranhador Furacão Pet Papelão',
      value_product: 'R$ 39,99',
      value_off: 'R$ 49,99',
      img_product: acessoriosArranhador1,
      hover_img_product: acessoriosArranhador2,
    },
    
    // Resto dos produtos
  ];

  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <button className={`${className} absolute top-4 left-4 z-10 bg-blue-500  rounded-full p-2 shadow-md`} onClick={onClick}>
        PREV
      </button>
    );
  };

  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <button className={`${className} absolute top-4  right-4 z-10 bg-blue-500  rounded-full p-2 shadow-md`} onClick={onClick}>
        NEXT
      </button>
    );
  };

  const settings = {
    className: 'overflow-hidden',
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-screen-2xl mx-auto">
      <div className="max-w-lg text-center sm:text-left ml-4 border-s-4 border-sky-400">
        <h2 className="ml-4 text-2xl text-black sm:text-2xl md:text-4xl mb-12">
          Novos produtos
        </h2>
      </div>

      <div className="relative">
        <Slider {...settings}>
          {products.map((product, index) => (
            <div
              key={index}
              className="group my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
            >
              <a 
                className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                href="/CorgiSHOP/productpages"
              >
                <span id="id"
                src={product.id}>

                </span>
                <img
                  className="peer absolute top-0 right-0 h-full w-full object-cover"
                  src={product.img_product}
                  alt="product image"
                />
                <img
                  className="peer absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0"
                  src={product.hover_img_product}
                  alt="product image"
                />
              </a>
              <div className="mt-4 px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl tracking-tight text-bold text-slate-900">
                    {product.name_product}
                  </h5>
                </a>
                <div className="mt-2 mb-5 flex items-center justify-between">
                  <p>
                    <span className="text-3xl font-bold text-teal-500">
                      {product.value_product}
                    </span>
                    <span className="text-sm text-slate-900 line-through ml-5">
                      {product.value_off}
                    </span>
                  </p>
                </div>
                <a
                  href="#"
                  className="flex items-center justify-center rounded-md bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Adicionar ao carrinho()
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      
    </div>
  );
};

export default Product;
