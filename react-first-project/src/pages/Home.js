import React from 'react'
import '../styles/Home.css'
function Home() {
  return (
    <div className='home'>

      <div className='about'>
        <h2> Hi, I'm Dean Wu </h2>
        <div className='prompt'>
          <p> 
            I'm a computer science student at the University of Toronto who is deeply passionate about gaming, coding, keeping up with the latest technology, basketball, anime and more! Welcome to my digital haven. 
          </p>
        </div>
        <div className='skills'>
          <h1>
            Skills
          </h1>
          <ol classname='list'>
            <li className='item'>
              <h2> Front-End </h2>
              <span>
                ReactJS, HTML, CSS, MaterialUI, Bootstrap,  and NPM
              </span>          
            </li>
            <li className='item'>
              <h2> Languages/Microcontrollers </h2>
              <span>
                Python, Java, JavaScript, Arduino, Raspberry Pi, GameMaker Language (GameMaker Studio 2)
              </span>          
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Home