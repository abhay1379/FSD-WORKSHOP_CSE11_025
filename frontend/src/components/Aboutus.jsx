import React from 'react'
import mypic from '../assets/mypic.jpg'

const name = () => {
  return (
    <div>
      <h1>This is all about me</h1>
      <img src={mypic} className="base" width="200" height="500" alt="pic" />
      <p>My name is Abhay Kumar</p>
    </div>
  )
}

export default name
