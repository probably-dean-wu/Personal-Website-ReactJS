import React, { useEffect } from 'react'
import { Box } from '@mui/material'
import Grid from '@mui/system/Unstable_Grid';
import "../styles/Awards.css"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import CompAward from "../Images/comp-studies-award.png";
import Outstanding from "../Images/Outstanding-GameMaking.png";
import Engineering from "../Images/Engineering-Excellence.png";
import Theme from "../Images/GameMakerContest.JPG";
import Technical from "../Images/best-tech-game.png";
import Scholar from "../Images/ontario-scholar.png";
import MVP from "../Images/MVP-GameMaking.png"
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
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Popup contentStyle={{width: "inherit"}} trigger={<Box className='boxy a' />} modal nested>
          { close => ( <div>
                            <div>
                              <img className='popupImage' src={CompAward} justifyContent='center'></img>
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
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Popup contentStyle={{width: "inherit"}} trigger={<Box className='boxy b' />} modal nested>
          { close => ( <div>
                            <div>
                              <img className='popupImage' src={Outstanding} justifyContent='center'></img>
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
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Popup contentStyle={{width: "inherit"}} trigger={<Box className='boxy c' />} modal nested>
          { close => ( <div>
                            <div>
                              <img className='popupImage' src={Engineering} justifyContent='center'></img>
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
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Popup contentStyle={{width: "inherit"}} trigger={<Box className='boxy d' />} modal nested>
          { close => ( <div>
                            <div>
                              <img className='popupImage' src={Theme} justifyContent='center'></img>
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
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Popup contentStyle={{width: "inherit"}} trigger={<Box className='boxy e' />} modal nested>
          { close => ( <div>
                            <div>
                              <img className='popupImage' src={Technical} justifyContent='center'></img>
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
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Popup contentStyle={{width: "inherit"}} trigger={<Box className='boxy f' />} modal nested>
          { close => ( <div>
                            <div>
                              <img className='popupImage' src={Scholar} justifyContent='center'></img>
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
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Popup contentStyle={{width: "inherit"}} trigger={<Box className='boxy g' />} modal nested>
          { close => ( <div>
                            <div>
                              <img className='popupImage' src={MVP} justifyContent='center'></img>
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
      </Grid>
    </div>
  )
}

export default Awards