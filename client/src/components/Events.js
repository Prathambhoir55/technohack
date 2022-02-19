import { Box, Card, CardContent, Grid } from '@mui/material';
import { Button, CardActionArea, CardActions } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react'
import Modal from '@mui/material/Modal';
import swal from 'sweetalert';

import SideBar from './SideBar'
import d2 from '../images/d2.jpeg'
import d1 from '../images/d1.jpeg'
import d3 from '../images/d3.jpeg'


const Events = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
      <>
       <SideBar />
    <Card className="glass-alt" sx={{ maxWidth: '70%', marginLeft: '300px', marginTop:'50px' }}>
      <CardActionArea>
        {/* <CardMedia
          component="img"
          height="140"
          image={require('../images/d1.jpeg')}
          alt="green iguana"
        /> */}
        <img src={require('../images/d2.jpeg')} style={{
            width:'300px', float: 'left', marginTop: '1rem', marginLeft: '1rem'
        }}/>
        <CardContent style={{ marginTop: '1rem', paddingLeft: '50px'}}> 
          <Typography gutterBottom variant="h5" component="div" align="left" style={{ marginLeft: '280px' }}>
           Differently Abled Children Awareness Meeting
          </Typography>
          <Typography variant="body2" color="text.secondary" align="left">
            <Typography variant="h6" color="text.secondary" align="left" style={{ marginLeft: '280px' }}>
                Andheri (West) , 400055
            </Typography>
            <Typography variant="h6" color="text.secondary" align="left" style={{ marginLeft: '280px' }}>
                Offline
            </Typography>
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Grid
      justify="space-around" // Add it here :)
      container 
      spacing={20}
    />  <div>
        <Button size="medium" color="primary" variant="contained" style={{marginRight: '1rem', marginBottom: '1rem'}} onClick={handleOpen}>
          Register
        </Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 300,
            height: 400,
            bgcolor: 'white',
            zIndex: '2',
            backdropFilter: 'blur(2rem)',
            border: '1px solid #000',
            borderRadius: '1rem',
            boxShadow: 24,
            p: 4,
          }}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Success , Your registartion is done.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           Please check your email for the google-meet link and the address.
          </Typography>
        </Box>
      </Modal>
      </div>
      </CardActions>
    </Card>

    <Card className="glass-alt" sx={{ maxWidth: '70%', marginLeft: '300px', marginTop:'10px' , marginBottom: '-40px'}}>
      <CardActionArea>
        {/* <CardMedia
          component="img"
          height="140"
          image={require('../images/d1.jpeg')}
          alt="green iguana"
        /> */}
        <img src={require('../images/d1.jpeg')} style={{
            width:'300px',height:'150px', float: 'left', marginTop: '1rem', marginLeft: '1rem'
        }}/>
        <CardContent style={{ marginTop: '1rem', paddingLeft: '50px'}}> 
          <Typography gutterBottom variant="h5" component="div" align="left" style={{ marginLeft: '280px' }}>
          Donation Fare for Physically Challenged
          </Typography>
          <Typography variant="body2" color="text.secondary" align="left">
            <Typography variant="h6" color="text.secondary" align="left" style={{ marginLeft: '280px' }}>
                Vile Parle , 400023
            </Typography>
            <Typography variant="h6" color="text.secondary" align="left" style={{ marginLeft: '280px' }}>
                Offline
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
        <Button size="medium" color="primary" variant="contained" style={{marginRight: '1rem', marginBottom: '1rem'}}>
          Register
        </Button>
      </CardActions>
    </Card>

    <Card className="glass-alt" sx={{ maxWidth: '70%', marginLeft: '300px', marginTop:'50px' }}>
      <CardActionArea>
        {/* <CardMedia
          component="img"
          height="140"
          image={require('../images/d1.jpeg')}
          alt="green iguana"
        /> */}
        <img src={require('../images/d3.jpeg')} style={{
            width:'300px', float: 'left', marginTop: '1rem', marginLeft: '1rem'
        }}/>
        <CardContent style={{ marginTop: '1rem', paddingLeft: '50px'}}> 
          <Typography gutterBottom variant="h5" component="div" align="left" style={{ marginLeft: '280px' }}>
          Foster Care House for Mentally Impaired Orphans
          </Typography>
          <Typography variant="body2" color="text.secondary" align="left">
            <Typography variant="h6" color="text.secondary" align="left" style={{ marginLeft: '280px' }}>
                Dadar East , 400016
            </Typography>
            <Typography variant="h6" color="text.secondary" align="left" style={{ marginLeft: '280px' }}>
                Offline
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
        <Button size="medium" color="primary" variant="contained" style={{marginRight: '1rem', marginBottom: '1rem'}}>
          Register
        </Button>
      </CardActions>
    </Card> 

   
    </>
  );
>>>>>>> 7b2000463d384d58aca34a69ec77009c54614d62
}

export default Events