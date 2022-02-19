import React from 'react'
import TypeWriter from './Typewriter'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

import { useNavigate, Link } from 'react-router-dom'


const Landing = () => {
  const nav = useNavigate()
  return (
    <>
      <div className="img">
        <TypeWriter />
        <img
          src={require('../../trans-landing.png')}
          alt="landing"
          className="imeg"
        />
        {/* </div> */}
        <Stack
          spacing={5}
          direction="row"
          position="fixed"
          width="50%"
          marginTop="400px"
          marginLeft="90px"
        >
          <Button
            variant="outlined"
            style={{
              maxWidth: '150px',
              maxHeight: '50px',
              minWidth: '150px',
              minHeight: '50px',
              fontFamily: "'Lora', serif",
              borderRadius: '10px',
              color: '#000',
              borderColor: '#000',
            }}
          >
            Sign Up
          </Button>
          <Button
            variant="contained"
            style={{
              maxWidth: '150px',
              maxHeight: '50px',
              minWidth: '150px',
              minHeight: '50px',
              fontFamily: "'Lora', serif",
              borderRadius: '10px',
              backgroundColor: '#000',
            }}
          >
            Sign In
          </Button>
        </Stack>
        {/* hi */}
        <div
          style={{
            marginLeft: '90px',
            marginTop: '500px',
            color: '#000 !important',
            position: 'fixed'
          }}
        >
          Are you an NGO looking to partner with us? Sign in                   
          <Link to="/signin" id="ngo" > here.</Link>
        </div>
      </div>
    </>
  )
}

export default Landing