import React from 'react';
import MernIcon from './Svgs/MernIcon';
import video1 from "./logo.mp4"
const About = () => {
  return (
    <div className='bg-gray-300 h-full '>
      <div className="x lg:flex  ">
        <div className="content1 text-5xl  w-[100vw] lg:w-[50vw]  flex justify-center   text-center h-[100vh] p-8 ">
          <div className="n">
            <div className="cooo bg-red-500 p-4 ml-2 w-[95vw] lg:w-[45vw] rounded-e-3xl ">
              <div className="y">I am a web developer  skilled in <p className='mt- text-purple-800'>MERN Stack.</p></div>
              <div className="symbol lg:ml-[10vw] mr-5 mt-[5vh]"><MernIcon /></div>
            </div>

            <div className="arrow justify-center mt-36 lg:mt-8   flex">
              <video src={video1} className='  w-32 h-32  border-[2px] border-blue-800' autoPlay muted loop />
              <div className="rectangle text-3xl w-80 h-32 border-[2px] border-blue-800 bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 flex items-center justify-center rounded-e-2xl hover:border-4 hover:text-red-600 hover:text-4xl transition-colors duration-300 ease-in">
                GET STARTED<svg c
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  class="inline-block w-[1em] h-[1em]"
                >
                  <path d="M12 2l10 10-10 10-1.41-1.41L18.17 12H2v-2h16.17l-7.59-7.59L12 2z" />
                </svg>
              </div>


            </div>
          </div>


        </div>

        <div className="content2 text-5xl  h-[100vh] lg:w-[50vw] flex justify-center   text-center  lg:mt-0   ">
          <div className="nooo border-[1px] w-[95vw] border-blue-300 bg-gradient-to-br from-gray-400 via-gray-300 to-slate-400  h-[70vh]   lg:w-[40vw] lg:h-[80vh] p-4 rounded-3xl shadow-2xl shadow-gray-600 lg:mt-8   ">
            <div className="m flex justify-center ">
              <div className="profilephoto  bg-pink-400 h-52 w-48 rounded-full ">
                s
              </div>

            </div>


            <div className="skills flex justify-center gap-10 w-[50w] mr-28 lg:mr-0  ">


              <div className="html w-20 lg:w-40 ">

                <svg className=' ml-7' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                  <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
                </svg>
                <h1 className=' lg:text-lg text-sm text-center ml-10 lg:ml-0 '>HTML(2022-2024)</h1>

              </div>

              <div className="css w-20 lg:w-40 ">
                <svg className='ml-6' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                  <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
                </svg>
                <h1 className='lg:text-lg text-sm text-center ml-10 lg:ml-0'>CSS(2022-2024)</h1>
              </div>

              <div className="javascript w-20 lg:w-40 ">
                <svg className='ml-12' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                  <path d="M 6.6992188 4 C 5.2066261 4 4 5.2066262 4 6.6992188 L 4 43.300781 C 4 44.40234 4.7546537 45.165751 5.6992188 45.585938 L 5.6992188 46.099609 L 43.300781 46.099609 C 44.793374 46.099609 46 44.892983 46 43.400391 L 46 6.6992188 C 46 5.2066261 44.867057 4 43.400391 4 L 6.6992188 4 z M 6.6992188 6 L 43.400391 6 C 43.533724 6 44 6.3918113 44 6.6992188 L 44 43.400391 C 44 43.707798 43.608189 44.099609 43.300781 44.099609 L 7.6992188 44.099609 L 7.6992188 44 L 6.6992188 44 C 6.3918112 44 6 43.608189 6 43.300781 L 6 6.6992188 C 6 6.3918112 6.3918113 6 6.6992188 6 z M 23 23 L 23 35.599609 C 23 37.499609 22.3 38 21 38 C 19.6 38 18.699609 37.199609 18.099609 36.099609 L 15 38 C 15.9 39.9 18.099219 42 21.199219 42 C 24.699219 42 27 40.199219 27 36.199219 L 27 23 L 23 23 z M 35.400391 23.099609 C 32.000391 23.099609 29.800781 25.199609 29.800781 28.099609 C 29.800781 31.199609 31.600391 32.600781 34.400391 33.800781 C 36.000391 34.400781 38.2 35.099219 38 36.699219 C 38 37.799219 37.199609 38.599609 35.599609 38.599609 C 33.699609 38.599609 32.8 37.3 32 36 L 28.900391 38.099609 C 30.000391 40.299609 32.099609 42.099609 35.599609 42.099609 C 39.199609 42.099609 41.900391 40.200781 41.900391 36.800781 C 42.000391 33.300781 39.100781 31.700391 35.800781 30.400391 C 34.200781 29.700391 33.5 29.199609 33.5 28.099609 C 33.5 27.199609 34.200781 26.5 35.300781 26.5 C 36.400781 26.5 37.100781 26.899609 37.800781 28.099609 L 40.800781 26.199219 C 39.600781 23.899219 37.800391 23.099609 35.400391 23.099609 z"></path>
                </svg>
                <h1 className='lg:text-lg text-sm text-center ml-12 lg:ml-6'>Javascript(2022-2024)</h1>
              </div>

            </div>

            <div className="n mt-10">
              <div className="explain text-[1.2rem] bg-gradient-to-r from-green-500  to-purple-600 bg-clip-text text-transparent  ">
                I excel at designing responsive layouts and integrating HTML, CSS, and JavaScript to create interactive websites. With expertise in React.js, I build dynamic interfaces, manage state with hooks, and develop real-time, feature-rich applications.
              </div>
            </div>










          </div>

        </div>






      </div>

    </div>
  );
}

export default About;
