import React from 'react'
import "../styles/Blog.css"
import Grid from '@mui/system/Unstable_Grid';
function Blog() {
  return (
    <div>
      <Grid container justifyContent={"center"} direction={"column"} alignItems="center" paddingLeft={6}> 
        <Grid item lg={6}>
          <h1 className='blogTitle'>
            Blogs
          </h1>
          <h1 className='blogSubtitle'>
            2024
          </h1>
          <hr/>
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"} direction={"row"} alignItems="center" paddingLeft={6}>
        <Grid item lg={6}>
          <h1 className='blogSubtitle'>
            Coming Soon
          </h1>
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"} direction={"row"} alignItems="center" paddingLeft={6}>
        <Grid item lg={6}>
          <h1 className='blogSubtitle'>
            Notes
          </h1>
          <hr/>
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"} direction={"row"} alignItems="center" paddingLeft={6}>
        <Grid item lg={6}>
          <p className='blogParagraph'> Introduction to Python <a className='meme'> 2024 </a></p> 
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"} direction={"row"} alignItems="center" paddingLeft={6}>
        <Grid item lg={6}>
          <p className='blogParagraph'> Introduction to Computer Science </p> 
        </Grid>
      </Grid>

    </div>
  )
}

export default Blog