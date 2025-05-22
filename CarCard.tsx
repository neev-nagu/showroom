import  { Link } from 'react-router-dom';
import { Car, RotateCcw } from 'lucide-react';
import { Car as CarType } from '../types';

interface CarCardProps {
  car: CarType;
}

export default function CarCard({ car }: CarCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="h-64 relative overflow-hidden group">
        <img 
          src={car.image} 
          alt={car.altText} 
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-0 right-0 bg-red-600 text-white py-1 px-3 rounded-bl-lg">
          {car.brand}
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
          <Link 
            to={`/car/${car.id}`} 
            className="bg-white text-gray-900 px-4 py-2 rounded-md flex items-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            <RotateCcw size={18} className="mr-2" />
            View 360°
          </Link>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{car.brand} {car.model}</h3>
        <p className="text-xl text-red-600 font-semibold mb-4">{car.price}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-sm text-gray-500">Engine</p>
            <p className="font-medium">{car.engineType}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Horsepower</p>
            <p className="font-medium">{car.horsePower} HP</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Top Speed</p>
            <p className="font-medium">{car.topSpeed} mph</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Acceleration</p>
            <p className="font-medium">{car.acceleration}</p>
          </div>
        </div>
        
        <Link to={`/car/${car.id}`} className="block w-full btn btn-secondary text-center">
          View Details
        </Link>
      </div>
    </div>
  );
}
  