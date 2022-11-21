import React from 'react'
import logo from "../assets/logo.PNG";
import imgbtm from "../assets/bottom.PNG"
import sideimg from "../assets/sideimg.PNG"
import righttop from "../assets/righttop.PNG"

function Page2() {
  return (
  
    <div className="bg-[linear-gradient(#141E30,#243B55)] max-h-full ">
    {/* Upper part */}
      <div className="flex flex-row">
        <div>
          <img className="h-12 ml-8 mt-4" src={logo} alt="" />
        </div>
        <div className="ml-6 mt-6 text-xl text-white">Ramaera Industries</div>
        <div className="absolute top-0 right-2 text-white mt-12 w-32 mr-4">
          <img src={righttop} alt="image" />
        </div>
      </div>

      <div className="flex flex-row">
        <span className="w-full p-0.5 bg-white mb-2 ml-20"></span>
      </div>

      <div className=''>
        <div className='flex flex-row'>
          <div className="w-40 mt-8">
              <ul class="flex flex-col py-4 space-y-1 h-screen relative ">
          <li>
                <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none text-white border-l-4 border-transparent ">
                <span class="inline-flex justify-center items-center ml-4">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </span>
                <span class="ml-2 text-xl tracking-wide truncate">Profile</span>
               </a>
           </li>
          <li>
              <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none text-white border-l-4 border-transparent">
              <span class="inline-flex justify-center items-center ml-4">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
              </span>
               <span class="ml-2 text-xl tracking-wide truncate">Project</span>
               {/* <span class="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full">New</span> */}
              </a>
          </li>
           <li>
              <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none text-white border-l-4 border-transparent">
              <span class="inline-flex justify-center items-center ml-4">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
              </span>
              <span class="ml-2 text-xl tracking-wide truncate">Finance</span>
              </a>
            </li>
      
             <li>
              <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none text-white border-l-4 border-transparent">
              <span class="inline-flex justify-center items-center ml-4">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              </span>
              <span class="ml-2 text-xl tracking-wide truncate">Support</span>
              </a>
              </li>
              </ul>
              </div>

              <div className="flex mt-10">
               <span className="h-48 p-0.5 bg-white mb-2 ml-2"></span>
              </div>   
           
                    <div className='hidden md:block'>
                      <p className='text-white text-2xl font-poppins mt-12 ml-32 md:ml-64'>Garam Masala</p>
                      <p className='text-white ml-8 mt-4'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima maiores autem, quidem in cum<br/> esse ullam aliquid necessitatibus,quibusdam fugiat natus facilis cumque asperiores tempore dist<br/>voluptate unde, deleniti facere officiis. Eum recusandae quod consequuntur, praesentium maior <br/> repellendus accusantium quas esse! Accusantium, quisquam maiores. Beatae praesentium aliqua<br/> dignissimos est? Fuga molestiae cupiditate vel consequuntur culpa atque ratione architecto nem<br/> illo vitae, nam modi nulla doloremque voluptates commodi sapiente sed ullam optio explicabo? <br/> necessitatibus sequi iure quasi earum quibusdam est omnis suscipit, doloribus natus, repellendusr.
                      </p>
                      
                      <div className='ml-28 mt-16'>
                        <img className='bg-[#141E30]' src={imgbtm} alt="" />
                        <button className='text-white bg-[#E65C00] border-2 ring-2 ml-44 mt-8 rounded-md'>Place bid</button>
                      </div>
                     
                      

                    </div>
                 <div className='w-96 mt-8 h-48 ml-8'>
                  <img src={sideimg} alt="" />
                  
                  </div>   
             </div>

            </div>
            
            
            </div> 
           
    
    
    
    
  )
}

export default Page2
