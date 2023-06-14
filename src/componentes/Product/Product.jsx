import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [cartProductId, setCartProductId] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/product');
        const data = response.data;

        if (data.products && Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          console.error('Products not found or not an array');
        }
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <button
        className={`${className} prev-arrow absolute top-4 left-4 z-10 bg-blue-500 rounded-full p-2 shadow-md`}
        onClick={onClick}
        style={{
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        PREV
      </button>
    );
  };

  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <button
        className={`${className} next-arrow absolute top-4 right-4 z-2 bg-blue-500 rounded-full p-2 shadow-md`}
        onClick={onClick}
        style={{
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
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
          slidesToShow: 4,
        },
      },
    ],
  };

  const getEmailFromLocalStorage = () => {
    const email = localStorage.getItem('email');
    return email;
  };

  const handleAddToCart = async (productId) => {
    try {
      const email = getEmailFromLocalStorage(); // Obtenha o email do localStorage

      // Envie a requisição POST para a API
      const response = await axios.post('http://localhost:8080/cart/add-cart', {
        email,
        productId,
      });

      console.log(response.data); // Exiba a resposta da API no console
      setCartProductId(productId);
      setIsSuccess(true); // Defina o estado de sucesso como verdadeiro

      setTimeout(() => {
        setIsSuccess(false); // Após 3 segundos, defina o estado de sucesso como falso
      }, 3000);
    } catch (error) {
      console.error(error);
      setIsError(true); // Defina o estado de erro como verdadeiro

      setTimeout(() => {
        setIsError(false); // Após 3 segundos, defina o estado de erro como falso
      }, 3000);
    }
  };

  useEffect(() => {
    if (cartProductId) {
      const timer = setTimeout(() => {
        setCartProductId(null);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [cartProductId]);

  return (
    <div className="w-full max-w-screen-2xl mx-auto">
      <div className="max-w-lg text-center sm:text-left ml-4 border-s-4 border-blue-400">
        <h2 className="ml-4 text-2xl text-black sm:text-2xl md:text-4xl mb-12">
          Novos produtos
        </h2>
      </div>

      <div className="relative mr-8 ml-8">
        <Slider {...settings}>
          {Array.isArray(products) ? (
            products.map((product) => (
              <div
                key={product.id}
                className="group my-12 mb-6 flex w-fullflex-col overflow-hidden rounded-lg border border-gray-100 bg-gray-100 shadow-md"
              >
                <a
                  className="relative mx-4 mt-3 flex h-60 overflow-hidden rounded-xl"
                  href={`/CorgiSHOP/productpages?id=${product.id}`}
                >
                  <span id="id">{product.id}</span>
                  <img
                    className="peer absolute top-0 right-0 h-full w-full object-cover"
                    src={product.imagem1}
                    alt="product image"
                  />
                  <img
                    className="peer absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0"
                    src={product.imagem2}
                    alt="product image"
                  />
                </a>
                <div className="mt-4 px-5 pb-5">
                  <a href="#">
                    <h5 className="text-xl tracking-tight text-bold text-slate-900">
                      {product.nome}
                    </h5>
                  </a>
                  <div className="mt-2 mb-5 flex items-center justify-between">
                    <p>
                      <span className="text-3xl font-bold text-teal-500">
                        R$ {product.valorProduto}
                      </span>
                      <span className="text-sm text-slate-900 line-through ml-5">
                        R$ {product.valorOff}
                      </span>
                    </p>
                  </div>
                  <a
                    href="#"
                    className={`flex items-center justify-center text-white rounded-md px-5 py-2.5 text-center text-sm font-medium hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 ${
                      cartProductId === product.id
                        ? 'bg-green-300'
                        : isError
                        ? 'bg-red-300'
                        : 'bg-blue-700'
                    }`}
                    onClick={() => handleAddToCart(product.id)} // Chame a função handleAddToCart com o ID do produto como parâmetro
                  >
                    {cartProductId === product.id ? (
                      <>
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
                        Produto adicionado ao carrinho
                      </>
                    ) : isError ? (
                      <>
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
                            d="M10 14H6a2 2 0 01-2-2v-4a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2h-4l-2 4h-4v0zm6-4h-2"
                          />
                        </svg>
                        Não foi possível adicionar ao carrinho
                      </>
                    ) : (
                      <>
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
                        Adicionar ao carrinho
                      </>
                    )}
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div>Nenhum produto encontrado.</div>
          )}
        </Slider>
      </div>
    </div>
  );
};

export default Product;
