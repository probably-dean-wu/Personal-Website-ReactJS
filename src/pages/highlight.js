import React from 'react'
import Grid from '@mui/system/Unstable_Grid';
function highlight() {
  return (
    <div>
    <Grid container justifyContent={"center"} direction={"column"} alignItems="center" paddingLeft={6}>
    <Grid item xs={10} sm={10} md={6} lg={6} xl={5}>
      <h1 className='introTitle'>
        Highlight
      </h1>
    </Grid>
  </Grid>
    <Grid container justifyContent={"center"} direction={"row"} alignItems="center" paddingLeft={6}>
    <Grid item xs={10} sm={10} md={6.1} lg={3.1} xl={2.5} paddingRight={2}>
      <Box className='hightlightBox'>
        <Grid container justifyContent={"left"}>
          <Grid item>
            <p> <img className='highlightImage' src={Python}/>  </p>
          </Grid>
          <Grid item >
            <p className='homeTime'> June 20, 2024  </p>
            <p className='highlightParagraph'> Introduction to Python </p>
          </Grid>
        </Grid>
      </Box>
    </Grid>

    <Grid item xs={10} sm={10} md={6.1} lg={3.1} xl={2.5}paddingRight={2}>
    <Box className='hightlightBox'>
      <Grid container justifyContent={"left"}>
        <Grid item>
          <p> <img className='highlightImage' src={PC}/>  </p>
        </Grid>
        <Grid item >
          <p className='homeTime'> June 20, 2024  </p>
          <p className='highlightParagraph'> My First PC </p>
        </Grid>
      </Grid>
    </Box>
    </Grid>

  </Grid>
    </div>

  )
}

export default highlight