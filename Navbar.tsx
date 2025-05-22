import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Car } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 text-red-600">
            <Car size={28} />
            <span className="font-bold text-xl">Prestige Motors</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-800 hover:text-red-600 transition-colors">Home</Link>
            <a href="#models" className="text-gray-800 hover:text-red-600 transition-colors">Models</a>
            <Link to="/about" className="text-gray-800 hover:text-red-600 transition-colors">About</Link>
            <Link to="/contact" className="text-gray-800 hover:text-red-600 transition-colors">Contact</Link>
          </div>

          <div className="hidden md:block">
            <Link to="/test-drive" className="btn btn-primary">Book Test Drive</Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white pb-4 px-4">
          <div className="flex flex-col space-y-3">
            <Link to="/" className="text-gray-800 hover:text-red-600 py-2" onClick={() => setIsOpen(false)}>Home</Link>
            <a href="#models" className="text-gray-800 hover:text-red-600 py-2" onClick={() => setIsOpen(false)}>Models</a>
            <Link to="/about" className="text-gray-800 hover:text-red-600 py-2" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/contact" className="text-gray-800 hover:text-red-600 py-2" onClick={() => setIsOpen(false)}>Contact</Link>
            <Link to="/test-drive" className="btn btn-primary w-full text-center" onClick={() => setIsOpen(false)}>Book Test Drive</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
  