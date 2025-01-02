// import { fromJSON } from 'postcss'
import React from 'react'
 import 'react-slideshow-image/dist/styles.css'
 import {Fade,Zoom,Slide} from 'react-slideshow-image'
// import photo from './public/Image1.jpg'
import { useEffect,useRef } from 'react'




 const ImageSlider =[
  {
    src: '/Projects/Image1.jpg',
    alt:"1"
  },
  {
    src:'/Projects/Image2.jpg',
    alt:" 2"
  },

  {
    src:'/Projects/Image1.jpg',
    alt:"3"
  }
 ]

const Plumb = () => {



  return (
    <div className='slide-container w-[100vw] bg-gradient-to-tr  from-blue-600 via-purple-400 to-gray-500 p-[20vh]'>
      <div className="slide1 h-[60vh]">
      <Slide>
        {
          ImageSlider.map((image,index)=>(
<div key={index}>
   <div className='flex items-center justify-center'>
<img className='h-[50vh] w-[50vw]  border-4 border-purple-500 shadow-2xl shadow-slate-900' src={image.src} alt={image.alt}/>

   </div>
</div>
          ))
        }
      </Slide>
      </div>

      <div className="slide2 h-[60vh]">
      <Slide>
        {
          ImageSlider.map((image,index)=>(
<div key={index}>
   <div className='flex items-center justify-center'>
<img className='h-[50vh] w-[50vw]  border-4 border-purple-500 shadow-2xl shadow-slate-900' src={image.src} alt={image.alt}/>

   </div>
</div>
          ))
        }
      </Slide>
      </div>

      <div className="slide3 ">
      <Slide>
        {
          ImageSlider.map((image,index)=>(
<div key={index}>
   <div className='flex items-center justify-center'>
<img className='h-[50vh] w-[50vw]  border-4 border-purple-500 shadow-2xl shadow-slate-900' src={image.src} alt={image.alt}/>

   </div>
</div>
          ))
        }
      </Slide>
      </div>
    </div>
  )
}

export default Plumb
