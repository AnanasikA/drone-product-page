import React from 'react';

function ProductImage() {
  return (
    <div className="w-1/2 p-8 flex items-center justify-center bg-gray-50">
      <img
        src="icons/dron.avif"  // Podmień na rzeczywisty obraz PlantSense
        alt="PlantSense Device"
        className="w-3/4 h-auto object-contain"
      />
    </div>
  );
}

export default ProductImage;
