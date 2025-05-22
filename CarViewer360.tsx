import  { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, MousePointer, Maximize } from 'lucide-react';

interface CarViewer360Props {
  images: string[];
  altText: string;
}

export default function CarViewer360({ images, altText }: CarViewer360Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - startX;
    if (deltaX > 50) {
      prevImage();
      setStartX(e.clientX);
    } else if (deltaX < -50) {
      nextImage();
      setStartX(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    const deltaX = e.touches[0].clientX - startX;
    if (deltaX > 50) {
      prevImage();
      setStartX(e.touches[0].clientX);
    } else if (deltaX < -50) {
      nextImage();
      setStartX(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (containerRef.current?.requestFullscreen) {
        containerRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`relative ${isFullscreen ? 'bg-black flex items-center justify-center' : ''}`}
    >
      <div 
        className={`relative overflow-hidden ${isFullscreen ? 'h-screen max-h-screen' : 'h-96 md:h-[500px]'} cursor-grab ${isDragging ? 'cursor-grabbing' : ''}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img 
          src={images[currentIndex]} 
          alt={`${altText} - view ${currentIndex + 1}`} 
          className="w-full h-full object-cover object-center"
        />
        
        <div className="absolute inset-0 flex justify-between items-center">
          <button 
            onClick={prevImage}
            className="p-2 bg-black bg-opacity-50 text-white rounded-r-md hover:bg-opacity-70 transition-all"
            aria-label="Previous view"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextImage}
            className="p-2 bg-black bg-opacity-50 text-white rounded-l-md hover:bg-opacity-70 transition-all"
            aria-label="Next view"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-red-600' : 'bg-gray-300'
            }`}
            aria-label={`View ${index + 1}`}
          />
        ))}
      </div>
      
      <div className="absolute top-4 right-4 space-x-2">
        <button
          onClick={toggleFullscreen}
          className="p-2 bg-black bg-opacity-50 text-white rounded-md hover:bg-opacity-70 transition-all"
          aria-label="Toggle fullscreen"
        >
          <Maximize size={20} />
        </button>
      </div>
      
      <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-md flex items-center">
        <MousePointer size={16} className="mr-2" />
        <span className="text-sm">Drag to rotate</span>
      </div>
    </div>
  );
}
  