import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface BeforeAfterModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    id: number;
    title: string;
    beforeImage: string;
    afterImage: string;
    description: string;
  };
}

const BeforeAfterModal: React.FC<BeforeAfterModalProps> = ({ isOpen, onClose, project }) => {
  const [showAfter, setShowAfter] = useState(true);
  const [sliderPosition, setSliderPosition] = useState(50);

  // Handle slider movement
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  // Handle mouse movement for interactive slider
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.buttons !== 1) return; // Only track when mouse button is pressed
    
    const container = e.currentTarget.getBoundingClientRect();
    const position = ((e.clientX - container.left) / container.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  // Handle touch movement for mobile devices
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    const container = e.currentTarget.getBoundingClientRect();
    const position = ((touch.clientX - container.left) / container.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-2xl font-bold">{project.title}</h2>
              <button 
                onClick={onClose}
                className="p-1 rounded-full hover:bg-gray-200 transition-colors"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              {/* Before/After Toggle Buttons */}
              <div className="flex justify-center mb-4 space-x-4">
                <button
                  className={`px-4 py-2 rounded-md transition-colors ${
                    !showAfter ? 'bg-primary text-white' : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                  onClick={() => setShowAfter(false)}
                >
                  Before
                </button>
                <button
                  className={`px-4 py-2 rounded-md transition-colors ${
                    showAfter ? 'bg-primary text-white' : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                  onClick={() => setShowAfter(true)}
                >
                  After
                </button>
              </div>

              {/* Simple Toggle View */}
              <div className={showAfter ? 'hidden' : 'block mb-6'}>
                <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src={project.beforeImage} 
                    alt={`${project.title} - Before`} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-black bg-opacity-75 text-white px-3 py-1 rounded-md">
                    Before
                  </div>
                </div>
              </div>

              <div className={!showAfter ? 'hidden' : 'block mb-6'}>
                <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src={project.afterImage} 
                    alt={`${project.title} - After`} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-black bg-opacity-75 text-white px-3 py-1 rounded-md">
                    After
                  </div>
                </div>
              </div>

              {/* Interactive Slider View */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Interactive Comparison</h3>
                <div 
                  className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden cursor-ew-resize"
                  onMouseMove={handleMouseMove}
                  onTouchMove={handleTouchMove}
                >
                  {/* After Image (Full) */}
                  <img 
                    src={project.afterImage} 
                    alt={`${project.title} - After`} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  
                  {/* Before Image (Clipped) */}
                  <div 
                    className="absolute inset-0 overflow-hidden" 
                    style={{ width: `${sliderPosition}%` }}
                  >
                    <img 
                      src={project.beforeImage} 
                      alt={`${project.title} - Before`} 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Slider Line */}
                  <div 
                    className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                      <div className="flex items-center justify-center">
                        <div className="w-1 h-4 bg-gray-400"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Labels */}
                  <div className="absolute bottom-4 left-4 bg-black bg-opacity-75 text-white px-3 py-1 rounded-md">
                    Before
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black bg-opacity-75 text-white px-3 py-1 rounded-md">
                    After
                  </div>
                </div>
                
                {/* Slider Control */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={handleSliderChange}
                  className="w-full mt-4"
                />
              </div>

              {/* Project Description */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Project Details</h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BeforeAfterModal; 