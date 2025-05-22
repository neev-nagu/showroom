import  { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Car } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 text-white mb-4">
              <Car size={24} />
              <span className="font-bold text-xl">Prestige Motors</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Experience the pinnacle of automotive excellence with our exclusive collection of high-performance supercars.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><a href="#models" className="text-gray-400 hover:text-white transition-colors">Models</a></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Models</h3>
            <ul className="space-y-2">
              <li><Link to="/car/audi-r8" className="text-gray-400 hover:text-white transition-colors">Audi R8</Link></li>
              <li><Link to="/car/audi-r8-gt" className="text-gray-400 hover:text-white transition-colors">Audi R8 GT</Link></li>
              <li><Link to="/car/audi-r8-spyder" className="text-gray-400 hover:text-white transition-colors">Audi R8 Spyder</Link></li>
              <li><Link to="/car/mclaren-p1" className="text-gray-400 hover:text-white transition-colors">McLaren P1</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-red-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400">123 Luxury Lane, Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-red-500 flex-shrink-0" />
                <span className="text-gray-400">+1 (323) 555-7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-red-500 flex-shrink-0" />
                <span className="text-gray-400">info@prestigemotors.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Prestige Motors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
  