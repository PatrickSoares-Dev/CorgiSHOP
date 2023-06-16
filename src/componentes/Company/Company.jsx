import React from "react";
import chalesco from "../../assets/img/Marcas/chalesco.png";
import golden from "../../assets/img/Marcas/golden.png";
import kong from "../../assets/img/Marcas/kong.png";
import gpet from "../../assets/img/Marcas/2gpet.png";
import keldog from "../../assets/img/Marcas/kelson.png";
import pedigree from "../../assets/img/Marcas/pedigre.png";
import whiskas from "../../assets/img/Marcas/whiskas.png";
import spin from "../../assets/img/Marcas/spin.png";
import prmeier from "../../assets/img/Marcas/premier.png";
import purina from "../../assets/img/Marcas/purina.png";
import reserva from "../../assets/img/Marcas/reserva.png";
import natiulus from "../../assets/img/Marcas/natiulus.png";



const CompanySection = () => {
  return (
    <div className="container mb-32 xl:mx-auto 2xl:mx-auto 4xl:mx-auto lg:max-w-screen-2xl pt-12 pb-12">
        <div className="max-w-lg text-center sm:text-left ml-14 border-s-4 border-blue-400">
            <h2 className="ml-4 text-2xl text-black sm:text-2xl md:text-4xl mb-12 font-roboto font-semibold" id='fonte-personalizada'>
            Principais marcas
            </h2>
        </div>
      <div className="mx-8 grid grid-cols-6 gap-5">
        
        <div className="order-1">
            <img
            className="h-auto max-w-full rounded-lg align-center center"
            src={whiskas}
            alt=""
            />
        </div>
        <div className="order-2">
            <img
            className="h-auto max-w-full rounded-lg"
            src={golden}
            alt=""
            />
        </div>
        <div className="order-3">
            <img
            className="h-auto max-w-full rounded-lg"
            src={pedigree}
            alt=""
            />
        </div>
        <div className="order-5">
            <img
            className="h-auto max-w-full rounded-lg"
            src={keldog}
            alt=""
            />
        </div>
        <div className="order-4">
            <img
            className="h-auto max-w-full rounded-lg"
            src={gpet}
            alt=""
            />
        </div>
        <div className="order-6">
            <img
            className="h-auto max-w-full rounded-lg"
            src={kong}
            alt=""
            />
        </div>
        <div className="order-7">
            <img
            className="h-auto max-w-full rounded-lg"
            src={spin}
            alt=""
            />
        </div>
        <div className="order-8">
            <img
            className="h-auto max-w-full rounded-lg"
            src={prmeier}
            alt=""
            />
        </div>
        <div className="order-9">
            <img
            className="h-auto max-w-full rounded-lg"
            src={purina}
            alt=""
            />
        </div>
        <div className="order-11">
            <img
            className="h-auto max-w-full rounded-lg"
            src={reserva}
            alt=""
            />
        </div>
        <div className="order-10">
            <img
            className="h-auto max-w-full rounded-lg"
            src={chalesco}
            alt=""
            />
        </div>
        <div className="order-12">
            <img
            className="h-auto max-w-full rounded-lg"
            src={natiulus}
            alt=""
            />
        </div>
      </div>      
    </div>
  );
};

export default CompanySection;
