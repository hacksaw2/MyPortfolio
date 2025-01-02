import React from 'react'

const Contacts = () => {
  return (
    <div className='bg-gradient-to-b from-violet-600 via-violet-400 to-violet-700 h-[100vh]  flex justify-center items-center '>
      <div className="x h-[70vh]">
      <div className="contacts bg-blue-300 w-96 h-80 rounded-xl p-4">



        <div className="email flex">
      <svg className='' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <g>
    <rect width="64" height="64" rx="16" fill="#4CAF50"/>
    <path d="M50,16H14c-2.21,0-4,1.79-4,4v24c0,2.21,1.79,4,4,4h36c2.21,0,4-1.79,4-4V20c0-2.21-1.79-4-4-4Z" fill="#fff"/>
    <polygon points="32,36 12,22 52,22" fill="#ff5722"/>
  </g>
</svg>

<p className=' flex ml-2 mt-2'><h2 className='font-bold text-lg mr-2'>Email : </h2>wesaurabhverma@gmail.com</p>
</div>


<div className="contact flex mt-5">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <g>
    
    <circle cx="32" cy="32" r="30" fill="#4CAF50" />
    
    
    <circle cx="32" cy="22" r="10" fill="#FFF" />
    
    
    <path d="M48,50c0,0-8-12-16-12s-16,12-16,12v2h32V50Z" fill="#FFF" />
  </g>
</svg>


<p className=' flex ml-2 mt-2'><h2 className='font-bold text-lg mr-2'>Contact : </h2>+916388023485</p>
</div>


<div className="butt bg-red-600 h-10 w-40 p-2 mt-10 text-white border-white border-2 font-serif">Download Resume</div>


      </div>
      </div>
    </div>
  )
}

export default Contacts
