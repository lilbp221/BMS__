import React from 'react'
import Navbar from '../navbar/Navbar'

//using props children

const Sturcture = ({children}) => {
  return (
   
   //fragment tag <>  </>
   <>
    <Navbar/>
    {children}
    </>
  )
}

export default Sturcture