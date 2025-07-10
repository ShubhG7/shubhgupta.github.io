import React from 'react';

const HobbiesCarousel = () => {
  return (
    <div className="w-full flex justify-center items-center py-8">
      {/* Placeholder for hobbies carousel */}
      <div className="flex space-x-4">
        <div className="w-40 h-56 bg-gray-200 rounded-lg flex items-center justify-center">Sports</div>
        <div className="w-40 h-56 bg-gray-200 rounded-lg flex items-center justify-center scale-110 shadow-lg">Fitness</div>
        <div className="w-40 h-56 bg-gray-200 rounded-lg flex items-center justify-center">Gaming</div>
      </div>
    </div>
  );
};

export default HobbiesCarousel;
