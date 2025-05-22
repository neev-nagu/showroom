import  { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { cars } from '../data/cars';
import { ChevronLeft, Image, Package } from 'lucide-react';
import CarViewer360 from '../components/CarViewer360';
import Car3DModel from '../components/Car3DModel';
    

export default function CarDetail() {
  const { id } = useParams<{ id: string }>();
  const car = cars.find(car => car.id === id);
  const [viewMode, setViewMode] = useState<'360' | '3d'>('360');

  if (!car) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-6">Car Not Found</h1>
        <p className="mb-8">Sorry, we couldn't find the vehicle you're looking for.</p>
        <Link to="/" className="btn btn-primary">Return to Homepage</Link>
      </div>
    );
  }

  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-red-600 hover:text-red-700 mb-8">
          <ChevronLeft size={20} />
          <span>Back to Models</span>
        </Link>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="bg-gray-100 p-2 flex justify-center space-x-4">
            <button
              onClick={() => setViewMode('360')}
              className={`flex items-center px-4 py-2 rounded ${
                viewMode === '360' 
                  ? 'bg-red-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <Image size={18} className="mr-2" />
              360° View
            </button>
            <button
              onClick={() => setViewMode('3d')}
              className={`flex items-center px-4 py-2 rounded ${
                viewMode === '3d' 
                  ? 'bg-red-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <Package size={18} className="mr-2" />
              3D Model
            </button>
          </div>
          
          {viewMode === '360' ? (
            <CarViewer360 images={car.rotationImages} altText={car.altText} />
          ) : (
            <Car3DModel image={car.image} />
          )}
          
          <div className="p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">{car.brand} {car.model}</h1>
                <p className="text-xl text-red-600 font-semibold mt-2">{car.price}</p>
              </div>
              <Link to="/test-drive" className="btn btn-primary mt-4 md:mt-0">Book Test Drive</Link>
            </div>
            
            <p className="text-gray-700 mb-8">{car.description}</p>
            
            <h2 className="text-2xl font-bold mb-4">Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-1">Engine</h3>
                <p>{car.engineType}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-1">Horsepower</h3>
                <p>{car.horsePower} HP</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-1">Top Speed</h3>
                <p>{car.topSpeed} mph</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-1">Acceleration</h3>
                <p>{car.acceleration}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
  