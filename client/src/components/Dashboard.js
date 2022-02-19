import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import OndemandVideoRoundedIcon from '@mui/icons-material/OndemandVideoRounded';
import PanToolRoundedIcon from '@mui/icons-material/PanToolRounded';
import ASL from '../images/ASL.png' 
import Alan from './Alan'

// const Card = styled(Paper)(({ theme }) => ({
//   // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   // ...theme.typography.body2,
//   padding: theme.spacing(12),
//   textAlign: 'center',
//   // color: theme.palette.text.secondary,

// }));

export default function RowAndColumnSpacing() {
  return (
    <>
    <Alan />
    <div className="bdy" >
    <Box sx={{ height: '200px', }}>     </Box>
    <Box sx={{ width: '75%' ,
     height: '200px', 
    marginTop: '-80px',
     marginLeft: '225px',
      // justifyContent: 'center',
       display: 'flex'
       
}}>
    
      <Grid container spacing={6} rowSpacing={1} columnSpacing={{ xs: 1, sm: 8, md: 12 }}>
        <Grid xs={4}>
          <Card className="tile">
          <HomeRoundedIcon  sx={{ fontSize: 80, display: 'flex', marginLeft:'120px', marginTop:'25px', marginBottom:'5px' }}/>
          Home
          </Card>
          
        </Grid>
        <Grid  xs={4}>
          <Card className="tile">
          <ShoppingBagIcon sx={{fontSize: 70, display: 'flex', marginLeft:'129px', marginTop:'25px', marginBottom:'15px' }}/>
          Shop
          </Card>
        </Grid>
        <Grid  xs={4}>
          <Card className="tile">
          <PeopleAltRoundedIcon sx={{fontSize: 80, display: 'flex', marginLeft:'129px', marginTop:'20px', marginBottom:'10px' }}/>
          Events</Card>
        </Grid>
        <Grid  xs={4}>
          <Card className="tile">
          <SchoolRoundedIcon sx={{fontSize: 80, display: 'flex', marginLeft:'120px', marginTop:'25px', marginBottom:'5px' }}/>
          Learn</Card>
        </Grid>
        <Grid  xs={4}>
          <Card className="tile">
          <OndemandVideoRoundedIcon sx={{fontSize: 80, display: 'flex', marginLeft:'120px', marginTop:'25px', marginBottom:'5px' }}/>
          Tutorials</Card>
        </Grid>
        <Grid  xs={4}>
          <Card className="tile">
          {/* <PanToolRoundedIcon sx={{fontSize: 80, display: 'flex', marginLeft:'120px', marginTop:'25px', marginBottom:'5px' }}/> */}
          <img src={ASL} alt="ASL LOGO" style={{ height: '125px', marginLeft:'100px',marginBottom:'-15px', display: 'flex' }}/>
          Practise</Card>
        </Grid>
      </Grid>
    </Box>
    </div>
    </>
  );
}