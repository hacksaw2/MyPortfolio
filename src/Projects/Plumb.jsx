import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';

const ImageSlider = [
  {
    src: '/Projects/Image1.jpg',
    alt: '1',
  },
  {
    src: '/Projects/Image2.jpg',
    alt: '2',
  },
  {
    src: '/Projects/Image1.jpg',
    alt: '3',
  },
];

const Plumb = () => {
  return (
    <div className="slide-container w-[97.8vw] bg-gradient-to-tr from-blue-600 via-purple-400 to-gray-500 p-[10vh]">
      
      <div className="slide1 h-[60vh]">
        <Slide>
          {ImageSlider.map((image, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                className="h-[50vh] w-[90vw] sm:w-[70vw] md:w-[50vw] lg:w-[40vw] border-4 border-purple-500 shadow-2xl shadow-slate-900 object-cover"
                src={image.src}
                alt={image.alt}
              />
            </div>
          ))}
        </Slide>
      </div>

      
      <div className="slide2 h-[60vh]">
        <Slide>
          {ImageSlider.map((image, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                className="h-[50vh] w-[80vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw] border-4 border-purple-500 shadow-2xl shadow-slate-900 object-cover"
                src={image.src}
                alt={image.alt}
              />
            </div>
          ))}
        </Slide>
      </div>

      
      <div className="slide3 h-[60vh]">
        <Slide>
          {ImageSlider.map((image, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                className="h-[50vh] w-[90vw] sm:w-[70vw] md:w-[50vw] lg:w-[40vw] border-4 border-purple-500 shadow-2xl shadow-slate-900 object-cover"
                src={image.src}
                alt={image.alt}
              />
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default Plumb;
