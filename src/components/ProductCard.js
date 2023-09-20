// components/ProductCard.js

import React from 'react';

const ProductCard = ({ imageUrl, title, description }) => {
  return (
    <div className="card w-auto mx-3 bg-base-100 shadow-xl">
      <figure>
        <img src={imageUrl} alt={title} className='h h-36 w-full object-cover' />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl md:text-2xl 2xl:text-4xl">{title}</h2>
        <p className=' text-lg md:text-xl 2xl:text-2xl'>{description}</p>
        <div className="card-actions justify-end l">
          <button className="btn btn-primary text-lg md:text-xl 2xl:text-2xl">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
