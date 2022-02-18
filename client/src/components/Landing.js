import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect'


const Landing = () => {
  return (
    <>
    
    <div className="img">
    <img src={require('../trans-landing.png')} className="imeg"/>
      <TypeWriterEffect
           
            // textStyle={{ fontFamily: 'Red Hat Display' }}
            startDelay={50}
            cursorColor="black"
            text="Differently Abled"
            typeSpeed={100}
            // scrollArea={myAppRef}
          />
            <TypeWriterEffect
            // textStyle={{ fontFamily: 'Red Hat Display' }}
            
            cursorColor="black"
            text="we en-able"
            typeSpeed={100}
            startDelay={2800}
            // scrollArea={myAppRef}
          />
          
          </div>
          
    </>
  )
}

export default Landing