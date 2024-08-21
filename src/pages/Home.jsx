import React, { useEffect } from 'react'
import '../styles/Home.css'
import Grid from '@mui/system/Unstable_Grid';
import { HomeList } from '../helpers/HomeList';
import HomeItem from './HomeItem';
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
        {HomeList.map((home) => {
          return <HomeItem name = {home.name} description={home.description} link={home.link} date={home.date}/>
        })}
      </Grid>
    </div>
  )
}

export default Home