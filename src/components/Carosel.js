// components/HorizontalCarousel.js

import Image from 'next/image';
import React, { useState } from 'react';

const Carosel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);



  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="s h-1/4 min-w-[50%] carousel rounded-box relative">
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2"
        onClick={prevImage}
      >
            <Image className='text-xl'  src={'/svg/lessthan.svg'} width={120} height={120} alt="food"/> 

      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2"
        onClick={nextImage}
      >

<Image className='text-xl'  src={'/svg/greater.svg'} width={120} height={120} alt="food"/> 

      </button>
      <div className="carousel-item h-full w-full">
        <img src={images[currentIndex]} className='w-full object-cover' alt={`Image ${currentIndex}`} />
      </div>
    </div>
  );
};

export default Carosel;
