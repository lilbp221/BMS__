import React from 'react'
import Navbar from '../navbar/Navbar'

//using props children

const Sturcture = ({children}) => {
  return (
   
   //fragment tag <>  </>
   <div>
    <Navbar/>
    {children}
    </div>
  )
}

export default Sturcture