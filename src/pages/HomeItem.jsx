import React from 'react'
import { Box } from '@mui/material'
import Grid from '@mui/system/Unstable_Grid';
import Button from '@mui/material/Button';
function HomeItem( {name, description, link, date}) {
  return (
        <Grid item xs={10} sm={10} md={8} lg={7} xl={1.6} margin={1}>
            <Box className='projectBoxes'>
                <p className='boxDate'> {date} </p> 
                <h1 className='boxHeader'> {name}</h1>
                <p className='boxParagraph'> {description} </p>
                <Button variant='outlined' href={link} target='_blank'>Demo</Button>
            </Box>
        </Grid> 

  )
}

export default HomeItem