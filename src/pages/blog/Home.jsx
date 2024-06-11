import React from 'react'
import Navbar from '../../globalcomponents/navbar/Navbar'
import Sturcture from '../../globalcomponents/layout/Sturcture'
import Card from '../../globalcomponents/cards/Card'
import Formblog from '../../globalcomponents/form/Formblog'


const Home = () => {
  return (
  <Sturcture>
    <div className='flex flex-wrap justify-center space-x-14 mt-6 mb-6'>
    <Card/>
    <Card/>
    <Card/>
    </div>
    </Sturcture>
    
   
  )
}

export default Home