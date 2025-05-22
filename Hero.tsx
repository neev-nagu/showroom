import  { Link } from 'react-router-dom';
import { ChevronDown, RotateCcw } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1541348263662-e068662d82af?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxhdWRpJTIwcjglMjBzdXBlcmNhcnxlbnwwfHx8fDE3NDc2Njg5OTN8MA&ixlib=rb-4.1.0&fit=fillmax&h=800&w=1200')`,
          backgroundPosition: 'center 25%'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      <div className="container relative h-full flex flex-col justify-center items-start px-4 z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Experience Pure<br />Performance</h1>
        <p className="text-xl text-gray-200 max-w-lg mb-8">
          Discover the extraordinary with our exclusive collection of Audi R8 and McLaren P1 supercars.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/test-drive" className="btn btn-primary">Book Test Drive</Link>
          <Link to="/car/audi-r8" className="btn bg-white text-gray-900 hover:bg-gray-100 flex items-center justify-center">
            <RotateCcw size={20} className="mr-2" />
            View in 360°
          </Link>
        </div>
      </div>

      <a 
        href="#models" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </div>
  );
}
  