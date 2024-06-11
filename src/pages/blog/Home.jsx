import React from 'react'
import Navbar from '../../globalcomponents/navbar/Navbar'
import Sturcture from '../../globalcomponents/layout/Sturcture'
import Card from '../../globalcomponents/cards/Card'


const Home = () => {
  return (
  <Sturcture>
    <div className='flex flex-wrap justify-center space-x-14 mt-6 mb-6'>
    <Card/>
    <Card/>
    <Card/>
  
   
    </div>
<h1>This is home page</h1>
    </Sturcture>
    
   
  )
}

export default Home