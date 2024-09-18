import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/system/Unstable_Grid';
import "../styles/Proof.css"
import Link from '@mui/material/Link';

function ProofItem({title, links}) {
  return (
    <Grid item xs={11} sm={8} md={7} lg={4} xl={4}>
        <ul>
        {title.map((title, i) => (
            <li key={i} className='textsize'>
                <Link href={links[i]} color={"#87CEEB"} underline='hover'> {title} </Link>
            </li> ))}
            
        </ul>
    </Grid>
  )
}

export default ProofItem