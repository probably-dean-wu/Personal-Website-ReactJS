import React, { useEffect } from 'react'
import Grid from '@mui/system/Unstable_Grid';
import '../styles/Proof.css'
import ProofItem from './ProofItem';
import { ProofList } from '../helpers/ProofList';
function Proof() {
  useEffect(() => {
    document.title = "Intro To Proof"
    })
  return (
    <div>
        <h1>
            Introduction to Proofs
        </h1>
        <Grid container justifyContent={"center"} direction={"column"} alignItems="center" marginLeft={1.5} marginRight={1.5}>
            {ProofList.map((proof) => {
            return <ProofItem title = {proof.title} links = {proof.links}/>
            })}
        </Grid>
    </div>
  )
}

export default Proof