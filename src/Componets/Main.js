import React from 'react'
import {Link} from "react-router-dom"

function Main() {
  return (
    <div>
         <div>
         <Link to="Page1" className='text-blue-400 bg-red-900 font-bold text-xl md:text-xl'>Page1</Link>
         <Link to='Page2' className='text-blue-400 font-bold bg-red-900 text-xl md:text-xl'>-Page2</Link>
         </div>


    </div>
  )
}

export default Main;