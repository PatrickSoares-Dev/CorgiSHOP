import React, { useState, useEffect } from 'react';

// import Banner01 from '../../assets/img/Banner01.png';
// import Banner02 from '../../assets/img/Banner02.png';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: Banner01,
    },
    {
      image: Banner01,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 8000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="sliderAx h-full w-screen m-5 overflow-hidden max-w-screen-4xl">
      <div className="flex max-w-screen-6xl">
        <div className="w-8/12 min-w-70 max-w-screen-4xl border-2 mr-8">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`container mx-auto ${currentSlide === index ? '' : 'hidden'}`}
              style={{ width: '100%' }}
            >
              <div className="slide-item h-full w-full">
                <img
                  src={slide.image}
                  alt="Slide"
                  className="object-cover h-96 w-full"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="w-4/12 max-w-screen-1xl mr-12 border-4">
          <div className="bg-gray-200 h-96">
            <img
              src={Banner02}
              alt="Slide estático"
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between w-12 mx-auto pb-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`${
              currentSlide === index ? 'bg-sky-700' : 'bg-sky-500'
            } rounded-full w-4 pb-2 mt-3`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Banner;
