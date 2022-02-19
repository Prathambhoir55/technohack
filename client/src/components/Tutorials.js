import React from 'react'
import SideBar from './SideBar'
import Grid from '@mui/material/Grid';
import {Card, CardContent} from '@mui/material';
import Box from '@mui/material/Box';


const Tutorials = () => {
  return (
    <>
        <SideBar />
        <div className="wrap">
            <Grid container>
         <Card style={{ 
            width : '40%',margin: '2rem' }}>
            <CardContent>
            <iframe width="360" height="200" src="https://www.youtube-nocookie.com/embed/4j8nyslXeP0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </CardContent>
            </Card>
            <Card style={{ 
            width : '40%',margin: '2rem' 

        }}>
            <CardContent>
            <iframe width="360" height="200" src="https://www.youtube-nocookie.com/embed/HmVV6YvndoA?start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   
            </CardContent>
        </Card>

        </Grid>
        <Grid container>
         <Card style={{ 
            width : '40%',margin: '2rem' }}>
            <CardContent>
            <iframe width="360" height="200" src="https://www.youtube-nocookie.com/embed/4j8nyslXeP0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </CardContent>
            </Card>
            <Card style={{ 
            width : '40%',margin: '2rem' 

        }}>
            <CardContent>
            <iframe width="360" height="200" src="https://www.youtube-nocookie.com/embed/4j8nyslXeP0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </CardContent>
        </Card>

        </Grid>
       
        </div>
    </>

  )
}

export default Tutorials