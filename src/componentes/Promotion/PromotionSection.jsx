import React, { useEffect, useState } from "react";
import bannerImage from "../../assets/img/Bannerpromotion.png";

const PromotionSection = () => {
  const [days, setDays] = useState(2);
  const [hours, setHours] = useState(10);
  const [minutes, setMinutes] = useState(34);
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    const countdown = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else {
          return 59;
        }
      });
      setMinutes((prevMinutes) => {
        if (prevMinutes > 0 && seconds === 0) {
          return prevMinutes - 1;
        } else if (prevMinutes === 0 && seconds === 0) {
          return 59;
        } else {
          return prevMinutes;
        }
      });
      setHours((prevHours) => {
        if (prevHours > 0 && minutes === 0 && seconds === 0) {
          return prevHours - 1;
        } else if (prevHours === 0 && minutes === 0 && seconds === 0) {
          return 23;
        } else {
          return prevHours;
        }
      });
      setDays((prevDays) => {
        if (prevDays > 0 && hours === 0 && minutes === 0 && seconds === 0) {
          return prevDays - 1;
        } else {
          return prevDays;
        }
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [seconds, minutes, hours, days]);

  return (
    <div className="w-full max-w-screen-2xl mx-auto">
        <div className="mt-12 w-full max-w-screen-4xl mx-auto">
            <div
                id="hot-deal"
                className="section bg-cover bg-center flex items-center"
                style={{
                backgroundImage: `url(${bannerImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "460px", // Defina a altura mínima desejada aqui
                }}
            >
            <div className="container flex justify-center w-full">
                <div className="w-full">
                    <div className="hot-deal">
                    <ul className="hot-deal-countdown flex justify-center mb-6 ml-16 max-w-screen-4xl mx-auto">
                        <li className="relative inline-block w-24 h-24 bg-red-600 rounded-full mx-2">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="flex flex-col items-center">
                            <h3 className="text-white text-4xl font-bold">
                                {days < 10 ? `0${days}` : days}
                            </h3>
                            <span className="text-white text-xs">Dias</span>
                            </div>
                        </div>
                        </li>
                        <li className="relative inline-block w-24 h-24 bg-red-600 rounded-full mx-2">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="flex flex-col items-center">
                            <h3 className="text-white text-4xl font-bold">
                                {hours < 10 ? `0${hours}` : hours}
                            </h3>
                            <span className="text-white text-xs">Horas</span>
                            </div>
                        </div>
                        </li>
                        <li className="relative inline-block w-24 h-24 bg-red-600 rounded-full mx-2">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="flex flex-col items-center">
                            <h3 className="text-white text-4xl font-bold">
                                {minutes < 10 ? `0${minutes}` : minutes}
                            </h3>
                            <span className="text-white text-xs">Minutos</span>
                            </div>
                        </div>
                        </li>
                        <li className="relative inline-block w-24 h-24 bg-red-600 rounded-full mx-2">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="flex flex-col items-center">
                            <h3 className="text-white text-4xl font-bold">
                                {seconds < 10 ? `0${seconds}` : seconds}
                            </h3>
                            <span className="text-white text-xs">Segundos</span>
                            </div>
                        </div>
                        </li>
                    </ul>
                    <h2 className="text-uppercase text-center text-3xl font-bold mb-4 ml-16">
                        Oferta da semana
                    </h2>
                    <p className="text-center text-xl uppercase ml-16">
                        Nova coleção dos namorados com até 50% de desconto
                    </p>
                    <a
                        className="primary-btn cta-btn block w-48 mx-auto mt-6 px-6 py-3 text-center text-white uppercase bg-red-600 rounded-full hover:bg-red-00"
                        href="#"
                    >
                        Compre agora
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
    </div>
    
    
  );
};

export default PromotionSection;
