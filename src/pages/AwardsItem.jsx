import React from 'react'
import { Box } from '@mui/material';
import Grid from '@mui/system/Unstable_Grid';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function AwardsItem({image, name}) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
    <Popup contentStyle={{width: "inherit"}} trigger={<Box className={name} />} modal nested>
    { close => ( <div>
                      <div>
                        <img className='popupImage' src={image} justifyContent='center'></img>
                      </div>
                      <div>
                          <button onClick=
                              {() => close()}>
                                  Close
                          </button>
                      </div>
                  </div>)}
    </Popup>
  </Grid>
  )
}

export default AwardsItem