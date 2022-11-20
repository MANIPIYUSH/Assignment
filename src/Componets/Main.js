import React from 'react'
import {Link} from "react-router-dom"

function Main() {
  return (
    <div>
         <div>
         <Link to="Page1" className='text-blue-400 font-bold text-2xl md:text-3xl'>page1</Link>
         <Link to='Page2' className='text-blue-400 font-bold text-2xl md:text-3xl'>page2</Link>
         </div>


    </div>
  )
}

export default Main;