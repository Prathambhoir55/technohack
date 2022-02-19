import {useState, useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom'
import Particles from './ParticlesContainer'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>

      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  var myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')

    const nav = useNavigate()

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [pass, setPass] = useState()
    const [cont, setCont] = useState()

    const handle = () => {
      localStorage.setItem('Name', name)
      localStorage.setItem('Email', email)
      localStorage.setItem('Password', pass)
      localStorage.setItem('Contact', cont)
    }

    // var raw = JSON.stringify({
    //   name: 'lokita',
    //   email: 'djhnre@gmail.com',
    //   phone_no: 1234567890,
    //   password: '12345678',
    //   confirm_password: '12345678',
    // })

    // var requestOptions = {
    //   method: 'POST',
    //   headers: myHeaders,
    //   body: raw,
    //   redirect: 'follow',
    // }

    // fetch('https://urmidedhia.pythonanywhere.com/register/', requestOptions)
    //   .then((response) => response.text())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.log('error', error))
      const handleSubmit = (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        // eslint-disable-next-line no-console

        var raw = JSON.stringify({
          name: data.get('name'),
          password: data.get('password'),
          email: data.get('email'),
          contact: data.get('phone_no'),
        })

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow',
        }

        fetch('https://urmidedhia.pythonanywhere.com/register/', requestOptions)
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.log('error', error))
      }

  return (
    <>
      <ThemeProvider theme={theme}>
        <main>
          <section class="glass">
            <Container sx={{ bgcolor: 'transparent' }} maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 6,
                  marginBottom: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  bgcolor: 'transparent',
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: '#5293E5' }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign up
                </Typography>
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 3 }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        autoComplete="given-name"
                        name="name"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        autoFocus
                      />
                    </Grid>
                    {/* <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid> */}
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="phone_no"
                        label="Phone Number"
                        name="phone_no"
                        autoComplete="phone_no"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign Up
                  </Button>
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link href="/login" variant="body2">
                        Already have an account? Sign in
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Container>
          </section>
          <div class="circle1"></div>
          <div class="circle2"></div>
        </main>
      </ThemeProvider>
      {/* <div
        style={{
          opacity: '0.2',
          width: '100%',
          height: '100%',
          zIndex: -1

        }}
      > */}
      {/* <Particles sx={{zIndex: -1}} /> */}
      {/* </div> */}
    </>
  )
}
