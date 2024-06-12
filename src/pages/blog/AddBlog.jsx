import React from 'react'
import Navbar from '../../globalcomponents/navbar/Navbar'
import Sturcture from '../../globalcomponents/layout/Sturcture'
import Formblog from '../../globalcomponents/form/Formblog'

function AddBlog() {
  return (
    <Sturcture>
       <Formblog type="ADD "/>
    </Sturcture>
  )
}

export default AddBlog