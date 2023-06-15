import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

import productsJson from "../../../produtos.json";

const ViewProducts = () => {
  const location = useLocation();
  const productId = new URLSearchParams(location.search).get("id");
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const productJSON = productsJson.produtos.find(
    (item) => item.ID === productId
  );
  const [email, setEmail] = useState("");
  console.log(productJSON);

  useEffect(() => {
    const emailFromLocalStorage = localStorage.getItem("email");
    setEmail(emailFromLocalStorage);
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/product?id=${productId}`
        );
        const data = response.data;

        if (data.products) {
          setProduct(data.products);
          setMainImage(data.products.imagem1); // Define a imagem inicial
        } else {
          console.error("Produto não encontrado");
        }
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleAddToCart = async () => {
    try {
      const response = await axios.post("http://localhost:8080/cart/add-cart", {
        email,
        productId,
      });
      console.log(response.data);
      // Faça o que for necessário após o envio dos dados para a API
    } catch (error) {
      console.error(error);
      // Lide com erros de forma apropriada
    }
  };

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  if (!product) {
    return null; // ou mostrar um indicador de carregamento
  }
  return (
    <section class="py-4 sm:py-2 bg-gray-50">
      <div class="container mx-auto px-8 py-8">
        <nav class="flex">
          <ol role="list" class="flex items-center">
            <li class="text-left">
              <div class="-m-1">
                <a
                  href="#"
                  class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                >
                  {" "}
                  Página inicial{" "}
                </a>
              </div>
            </li>

            <li class="text-left">
              <div class="flex items-center">
                <span class="mx-2 text-gray-400">/</span>
                <div class="-m-1">
                  <a
                    href="#"
                    class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                  >
                    {productJSON.Categoria}
                  </a>
                </div>
              </div>
            </li>
          </ol>
        </nav>

        <div className="lg:col-gap-4 xl:col-gap-4 mt-8 grid grid-cols-1 gap-4 lg:mt-4 lg:grid-cols-2 lg:gap-4">
          <div className="lg:col-span-3 lg:row-end-1 bg-white rounded-lg pb-8 drop-shadow-lg">
            <div className="lg:flex lg:items-start px-2 py-2">
              <div className="lg:order-2 lg:ml-5">
                <div className="max-w-xl overflow-hidden transform transition-transform hover:scale-105 border mr-8 mt-8 border-gray-300 bg-white rounded-lg ">
                  <img
                    className="h-full w-full max-w-full object-cover shadow-md"
                    src={mainImage}
                    alt=""
                  />
                </div>
              </div>

              <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0 bg-white rounded-lg ">
                <div className="flex flex-row items-start lg:flex-col mt-8">
                  <button
                    type="button"
                    className="flex-0 aspect-square mb-3 h-24 overflow-hidden rounded-lg border border-gray-300 text-center"
                    nClick={() => handleImageClick(product.imagem2)}
                  >
                    <img
                      className="h-full w-full max-w-full object-cover shadow-md"
                      src={product.imagem2}
                      alt=""
                    />
                  </button>
                  <button
                    type="button"
                    class="flex-0 aspect-square mb-3 h-24 overflow-hidden rounded-lg border border-gray-300 text-center"
                    nClick={() => handleImageClick(product.imagem3)}
                  >
                    <img
                      class="h-full w-full max-w-full object-cover shadow-md"
                      src={product.imagem3}
                      alt=""
                    />
                  </button>
                  <button
                    type="button"
                    class="flex-0 aspect-square mb-3 h-24 overflow-hidden rounded-lg border border-gray-300 text-center"
                    nClick={() => handleImageClick(product.imagem4)}
                  >
                    <img
                      class="h-full w-full max-w-full object-cover shadow-md"
                      src={product.imagem4}
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>            
          </div>

          <div class="lg:col-span-4 lg:row-span-4 lg:row-end-4">
            <div class="bg-white rounded-lg p-4 drop-shadow-lg">
              <h1 class="sm: text-2xl font-bold text-sky-500 sm:text-3xl">
                {product.nome}
              </h1>

              <div class="mt-5 flex items-center ">
                <div class="flex items-center">
                  <svg
                    class="block h-4 w-4 align-middle text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      class=""
                    ></path>
                  </svg>
                  <svg
                    class="block h-4 w-4 align-middle text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      class=""
                    ></path>
                  </svg>
                  <svg
                    class="block h-4 w-4 align-middle text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      class=""
                    ></path>
                  </svg>
                  <svg
                    class="block h-4 w-4 align-middle text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      class=""
                    ></path>
                  </svg>
                  <svg
                    class="block h-4 w-4 align-middle text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      class=""
                    ></path>
                  </svg>
                </div>

                <p class="ml-2 text-sm font-medium text-gray-500">
                  {productJSON.Avaliacao} Avaliações
                </p>
              </div>

              <h2 class="mt-8 text-base text-gray-900">Tamanho</h2>
              <div class="mt-3 flex select-none flex-wrap items-center gap-1">
                <label class="">
                  <input
                    type="radio"
                    name="type"
                    value="Powder"
                    class="peer sr-only"
                    checked
                  />
                  <p class="peer-checked:bg-blue-500 peer-checked:text-white rounded-lg border border-grey-400 px-6 py-2 font-bold cursor-pointer">
                    Tam. 00
                  </p>
                </label>
                <label class="">
                  <input
                    type="radio"
                    name="type"
                    value="Whole Bean"
                    class="peer sr-only"
                  />
                  <p class="peer-checked:bg-blue-500 peer-checked:text-white rounded-lg border border-grey-400 px-6 py-2 font-bold cursor-pointer">
                    Tam. 01
                  </p>
                </label>
                <label class="">
                  <input
                    type="radio"
                    name="type"
                    value="Groud"
                    class="peer sr-only"
                  />
                  <p class="peer-checked:bg-blue-500 peer-checked:text-white rounded-lg border border-grey-400 px-6 py-2 font-bold cursor-pointer">
                    Tam. 02
                  </p>
                </label>
              </div>

              <h2 class="mt-8 text-base text-gray-900">Escolha a cor: </h2>

              <div class="mt-3 flex select-none flex-wrap items-center gap-1">
                <label class="border border-gray-300 bg-white rounded-lg px-6 py-2 cursor-pointer">
                  <input
                    type="radio"
                    name="subscription"
                    value="4 Months"
                    class="peer sr-only"
                  />
                  <p class="bg-blue-500 peer-checked:text-white rounded-lg border border-gray-500 px-6 py-2 font-bold cursor-pointer"></p>
                </label>
                <label class="border border-gray-300 bg-white rounded-lg px-6 py-2 cursor-pointer">
                  <input
                    type="radio"
                    name="subscription"
                    value="8 Months"
                    class="peer sr-only"
                    checked
                  />
                  <p class="bg-orange-200 peer-checked:text-white rounded-lg border border-gray-500 px-6 py-2 font-bold cursor-pointer"></p>
                </label>
                <label class="border border-gray-300 bg-white rounded-lg px-6 py-2 cursor-pointer">
                  <input
                    type="radio"
                    name="subscription"
                    value="12 Months"
                    class="peer sr-only"
                  />
                  <p class="bg-red-600 peer-checked:text-white rounded-lg border border-gray-500 px-6 py-2 font-bold cursor-pointer"></p>
                </label>

                <label class="border border-gray-300 bg-white rounded-lg px-6 py-2 cursor-pointer">
                  <input
                    type="radio"
                    name="subscription"
                    value="12 Months"
                    class="peer sr-only"
                  />
                  <p class="bg-yellow-600 peer-checked:text-white rounded-lg border border-gray-500 px-6 py-2 font-bold cursor-pointer"></p>
                </label>
              </div>

              <div class="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
                <div class="flex items-end">
                  <h1 className="text-2xl font-bold pr-2">
                    {"R$ " + product.valorProduto}
                  </h1>
                  <span class="text-base">/a vista</span>
                </div>

                <button
                  type="button"
                  onClick={handleAddToCart}
                  class="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-teal-500 bg-none px-4 py-3 text-center text-sm font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-teal-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="shrink-0 mr-3 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  Adicionar ao carrinho
                </button>
              </div>

              <ul class="mt-4 space-y-2">
                <li class="flex items-center text-left text-sm font-medium text-gray-600">
                  <svg
                    class="mr-2 block h-5 w-5 align-middle text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      class=""
                    ></path>
                  </svg>
                  Entregue para todo Brasil
                </li>

                <li class="flex items-center text-left text-sm font-medium text-gray-600">
                  <svg
                    class="mr-2 block h-5 w-5 align-middle text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      class=""
                    ></path>
                  </svg>
                  Cancele a qualquer momento
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="drop-shadow-lg bg-white rounded-lg py-2 px-8 pb-8">
          <div class="border-b border-gray-300 mb-4">
              <nav class="flex gap-4">
                <a
                  href="#"
                  title=""
                  class="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"
                >
                  {" "}
                  Descrição{" "}
                </a>
                <a
                  href="#"
                  title=""
                  class="inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600"
                >
                  Avaliações
                  <span class="ml-2 block rounded-full bg-blue-500 px-2 py-px text-xs font-bold text-gray-100">
                    {productJSON.Avaliacao}
                  </span>
                </a>
              </nav>
          </div>

            <h1 class="text-2xl font-bold">Entregue na sua casa</h1>
            <p class="mt-4">Nós entendemos o quanto seu corgi é especial e queremos garantir que ele receba o melhor cuidado possível. Por isso, estamos felizes em informar que a roupinha selecionada será entregue diretamente na sua casa, com todo o carinho que seu amiguinho merece. </p>
            <h1 class="mt-8 text-2xl font-bold">{productJSON.Titulo}</h1>
            <p class="mt-4">{productJSON.Descricao1}</p>
            <p class="mt-4">{productJSON.Descricao2}</p>
          </div>

      </div>
    </section>
  );
};

export default ViewProducts;
