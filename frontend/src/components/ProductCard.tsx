import React, { useState } from 'react';
import type { Product } from '../definitions/product';
import ColorPicker from './ColorPicker';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState<'yellow' | 'white' | 'rose'>('yellow');

  const renderStars = (rating: number) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (i - rating === 0.5) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-500" />);
      }
    }

    return stars;
  };

  return (
    <div className="w-[250px] sm:w-[220px] max-w-ful rounded-xl p-4 text-left">
      <img
        src={product.images[selectedColor]}
        alt={product.name}
        className="w-full h-auto rounded-lg object-cover"
      />

      <div className="mt-3 flex flex-col items-start">
        <h3 className="text-sm productName text-black">{product.name}</h3>
        <p className="productPrice text-gray-600 mb-2">${product.price} USD</p>

        <ColorPicker selectedColor={selectedColor} onChange={setSelectedColor} />

    
        <div className="flex items-center justify-start text-[13px] space-x-1 mt-0">
          <div className="flex space-x-[2px]">{renderStars(product.roundedPopularity)}</div>
          <span className="text-black productStar">{product.popularityOutOfFive}/5</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
