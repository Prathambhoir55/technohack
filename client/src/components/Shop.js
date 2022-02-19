import {React, useState, useEffect} from 'react'
import SideBar from './SideBar'
import Alan from './Alan'
import axios from 'axios'
import {
  Card,
  CardActionArea,
  Typography,
  CardContent,
  Grid,
  CardActions,
  Button,
  Paper
} from '@mui/material'



export const Shop = ({ products }) => {
   

  return (
    <>
      <Alan style={{ position: 'fixed' }} />
      <SideBar />
      <Card
        className="glass-alt"
        sx={{ maxWidth: '70%', marginLeft: '300px', marginTop: '50px' }}
      >
        <CardActionArea>
          {/* <CardMedia
          component="img"
          height="140"
          image={require('../images/d1.jpeg')}
          alt="green iguana"
        /> */}
          <img
            src={require('../images/wheelchair.jpg')}
            style={{
              width: '300px',
              height: '200px',
              float: 'left',
              marginTop: '1rem',
              marginLeft: '1rem',
            }}
          />
          <CardContent style={{ marginTop: '1rem', paddingLeft: '50px' }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              align="left"
              style={{ marginLeft: '280px' }}
            >
              Wheelchair
            </Typography>
            <Typography variant="body2" color="text.secondary" align="left">
              <Typography
                variant="h6"
                color="text.secondary"
                align="left"
                style={{ marginLeft: '280px' }}
              >
                Description: Manual Regular wheelchair
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                align="left"
                style={{ marginLeft: '280px' }}
              >
                Price: 5000
              </Typography>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Grid
            justify="space-around" // Add it here :)
            container
            spacing={20}
          />
        </CardActions>
      </Card>

      <Card
        className="glass-alt"
        sx={{ maxWidth: '70%', marginLeft: '300px', marginTop: '50px' }}
      >
        <CardActionArea>
          {/* <CardMedia
          component="img"
          height="140"
          image={require('../images/d1.jpeg')}
          alt="green iguana"
        /> */}
          <img
            src={require('../images/prosthetic.jpg')}
            style={{
              width: '300px',
              height: '200px',
              float: 'left',
              marginTop: '1rem',
              marginLeft: '1rem',
            }}
          />
          <CardContent style={{ marginTop: '1rem', paddingLeft: '50px' }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              align="left"
              style={{ marginLeft: '280px' }}
            >
              Prosthetic leg
            </Typography>
            <Typography variant="body2" color="text.secondary" align="left">
              <Typography
                variant="h6"
                color="text.secondary"
                align="left"
                style={{ marginLeft: '280px' }}
              >
                Description: High quality prosthetic leg. Used once.
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                align="left"
                style={{ marginLeft: '280px' }}
              >
                Price: 25000
              </Typography>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Grid
            justify="space-around" // Add it here :)
            container
            spacing={20}
          />
        </CardActions>
      </Card>
    </>
  )
}

export default Shop

