import React from 'react';

function ProductDetails() {
  return (
    <div className="w-1/2 p-8">
      <h2 className="text-3xl font-semibold text-gray-800 mb-2">AeroPro Drone</h2>
      <p className="text-gray-500 mb-4">Profesjonalny dron do zdjęć i filmów z powietrza.</p>

      <div className="flex items-center mb-6">
        <span className="text-2xl font-bold text-green-500 mr-2">$799</span>
        <span className="text-gray-400 line-through">$999</span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg">
          <img src="icons/camera.png" alt="Kamera" className="w-8 h-8"/>
          <div>
            <p className="font-semibold text-gray-800">Kamera 4K</p>
            <p className="text-gray-500 text-sm">Ultra HD, 3-osiowa stabilizacja</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg">
          <img src="icons/battery.png" alt="Czas lotu" className="w-8 h-8"/>
          <div>
            <p className="font-semibold text-gray-800">Czas lotu</p>
            <p className="text-gray-500 text-sm">Do 30 minut</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg">
          <img src="icons/range.png" alt="Zasięg" className="w-8 h-8"/>
          <div>
            <p className="font-semibold text-gray-800">Zasięg</p>
            <p className="text-gray-500 text-sm">Do 5 km</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg">
          <img src="icons/speed.png" alt="Prędkość" className="w-8 h-8"/>
          <div>
            <p className="font-semibold text-gray-800">Prędkość</p>
            <p className="text-gray-500 text-sm">Maks. 50 km/h</p>
          </div>
        </div>
      </div>

      <label htmlFor="color" className="block text-gray-600 mb-2">Kolor</label>
      <select id="color" className="mb-6 p-2 border border-gray-300 rounded w-full">
        <option>Czarny</option>
        <option>Srebrny</option>
      </select>

      <div className="flex items-center mb-6">
        <label htmlFor="quantity" className="mr-4 text-gray-600">Ilość</label>
        <input
          type="number"
          id="quantity"
          defaultValue="1"
          className="border border-gray-300 rounded p-2 w-16"
        />
      </div>

      <button className="bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-green-600 transition duration-300 w-full">
        Dodaj do koszyka
      </button>
    </div>
  );
}

export default ProductDetails;


