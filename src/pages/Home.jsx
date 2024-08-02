import React, { useEffect } from 'react'
import '../styles/Home.css'
import { Box } from '@mui/material'
import Grid from '@mui/system/Unstable_Grid';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
function Home() {

  useEffect(() => {
    document.title = "Home"
  })
  return (
    <div>

      <Grid container justifyContent={"center"} direction={"column"} alignItems="center" marginLeft={1.5} marginRight={1.5}>
        <Grid item xs={11} sm={10} md={8} lg={7} xl={5}>
          <h2 className='introTitle'> Hi, I'm Dean Wu </h2>
          <p className='paragraph' > I'm a computer science student at the University of Toronto who is deeply passionate about gaming, coding, keeping up with the latest technology, basketball, anime and more! Welcome to my digital haven. </p>
          <p className='paragraph'> This website will be updated regularly as it is still an unfinished project. </p>
          <h1 className='introTitle'>
            Projects
          </h1>
        </Grid>
      </Grid>

      <Grid container justifyContent={"center"} direction={"row"} alignItems="center">
        <Grid item xs={10} sm={10} md={8} lg={7} xl={1.6} margin={1}>
          <Box className='projectBoxes' >
            <p className='boxDate'> 2023 </p> 
            <h1 className='boxHeader'> ProjectMura</h1>
            <p className='boxParagraph'> A game that demonstrates farming, fighting and world building.</p>
            <Button variant='outlined' href='https://gx.games/games/g5pin6/projectmura/' target='_blank'>Demo</Button>
          </Box>
        </Grid> 

        <Grid item xs={10} sm={10} md={8} lg={7} xl={1.6} margin={1}>
          <Box className='projectBoxes'>
            <p className='boxDate'> 2022 </p> 
            <h1 className='boxHeader'> <Link color={"#FFFFFF"} underline="hover" href="https://github.com/probably-dean-wu/SpringField-Village" target="_blank">SpringField Village</Link></h1>
            <p className='boxParagraph'> A game about recuing a village that has been torn apart by monsters.</p>
              <Button variant='outlined' href='https://gx.games/games/owhc19/springfield-village/'  target='_blank'>Demo</Button>
          </Box>
        </Grid>

        <Grid item xs={10} sm={10} md={8} lg={7} xl={1.6} margin={1}>
          <Box className='projectBoxes' >
            <p className='boxDate'> 2022 </p> 
            <h1 className='boxHeader'> <Link color={"#FFFFFF"} underline="hover" href="https://github.com/probably-dean-wu/probably-dean-wu.github.io" target="_blank">HTML Website</Link></h1>
            <p className='boxParagraph'> A personal website made in grade 12 for my computer science class</p>
            <Button variant='outlined' href='https://probably-dean-wu.github.io' target='_blank'>Demo</Button>
          </Box>
          </Grid>
      </Grid>


    </div>
  )
}

export default Home