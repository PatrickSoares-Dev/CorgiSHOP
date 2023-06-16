import React from "react";
import bannerImage from "../../assets/img/Bannerpromotion.png";

const PromotionSection = () => {
  return (
    <div className="container xl:mx-auto 2xl:mx-auto 4xl:mx-auto lg:max-w-screen-2xl">
      <div
        className="bg-cover bg-center h-0 pb-[31.25%] text-white mt-12 rounded-lg mx-6"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "100% auto",
          backgroundPosition: "center",
          cursor: "pointer",
        }}
      ></div>
    </div>
  );
};

export default PromotionSection;
