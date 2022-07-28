import React, { useContext } from 'react'
import { DataContext } from '../context/GlobalContext'

const About = () => {

const state = useContext(DataContext);
  return (


    <div className='main-container'>
        <div className='about'>

          <h2 className='title'>
            about
          </h2>

          {/* about */}
          <div className='info'> 
            <p>
              hello my name is selene. this is my personal portfolio website which has been
              created by me. 

            </p>
          </div>

      </div>
    </div>
  )
}

export default About