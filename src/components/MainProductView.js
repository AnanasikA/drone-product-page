import React from 'react';
import ProductImage from './ProductImage';
import ProductDetails from './ProductDetails';


function MainProductView() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden max-w-5xl">
        <ProductImage />
        <ProductDetails />   
      </div>

    </div>
  );
}

export default MainProductView;

