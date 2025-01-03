import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';

const ImageSlider1 = [
  {
    src: '/Projects/PlumbImages1.png',
    alt: '1',
  },
  {
    src: '/Projects/PlumbImages2.png',
    alt: '2',
  },
  {
    src: '/Projects/PlumbImages3.png',
    alt: '3',
  },
];

const ImageSlider2 = [
  {
    src: '/Projects/TodosImage1.png',
    alt: '1',
  },
  {
    src: '/Projects/TodosImage2.png',
    alt: '2',
  },
  {
    src: '/Projects/TodosImage3.png',
    alt: '3',
  },
];

const ImageSlider3 = [
  {
    src: '/Projects/BloggedImages.png',
    alt: '1',
  },
  {
    src: '/Projects/BloggedImages2.png',
    alt: '2',
  },
  {
    src: '/Projects/BloggedImages3.png',
    alt: '3',
  },
];

const Plumb = () => {
  return (
    <div className="slide-container w-[97.8vw] bg-gradient-to-tr from-blue-600 via-purple-400 to-gray-500 p-[10vh]">
      
      <div className="slide1 h-[60vh]">
        <Slide>
          {ImageSlider1.map((image, index) => (
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
          {ImageSlider2.map((image, index) => (
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
          {ImageSlider3.map((image, index) => (
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
