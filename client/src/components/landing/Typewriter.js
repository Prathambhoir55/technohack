import TypeWriterEffect from 'react-typewriter-effect'
import React from 'react'

const Typewriter = () => {
  return (
    <div
      style={{
        bgcolor: 'transparent',
        maxWidth: '100%',
        marginTop: '200px',
        paddingLeft: '80px',
      }}
    >
      <TypeWriterEffect
        textStyle={{
          fontFamily: "'Lora', serif",
          fontSize:
            '65px' /* margin-top: 5em; */ /*background-color: transparent;*/,
        }}
        startDelay={50}
        cursorColor="transparent"
        text="Differently Abled?"
        typeSpeed={100}
        // scrollArea={myAppRef}
        hideCursorAfterText={true}
      />
      <TypeWriterEffect
        textStyle={{
          fontFamily: "'Lora', serif",
          fontSize:
            '65px' /* margin-top: 5em; */ /*background-color: transparent;*/,
        }}
        // textStyle={{ fontFamily: 'Red Hat Display' }}

        cursorColor="black"
        text="We En-Able."
        typeSpeed={100}
        startDelay={2800}
        // scrollArea={myAppRef}
      />
    </div>
  )
}

export default Typewriter

  