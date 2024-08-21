import React, { useEffect } from 'react'
import Grid from '@mui/system/Unstable_Grid';
import "../styles/Awards.css"
import 'reactjs-popup/dist/index.css';
import AwardsItem from './AwardsItem';
import { AwardsList } from '../helpers/AwardsList';
function Awards() {
  useEffect(() => {
    document.title = "Awards"
  })
  return (
    <div>
      <h1>
        Awards
      </h1>
      <Grid container padding={5} direction={'row'} justifyContent="center">
      {AwardsList.map((award) => {
          return <AwardsItem image = {award.image} name = {award.name}/>
        })}

      </Grid>
    </div>
  )
}

export default Awards