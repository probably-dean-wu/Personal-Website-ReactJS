import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/Footer.css'
import Link from '@mui/material/Link';
function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'> 
        <Link href="https://www.instagram.com/probably_dean_wu/" target="_blank" >
          <InstagramIcon />
        </Link>
        <Link href="https://www.facebook.com/almighty.dean.wu" target="_blank" >
          <FacebookIcon />
        </Link>
        <Link href="https://www.linkedin.com/in/dean-wu-86ba0b252/" target="_blank" >
        <LinkedInIcon />
        </Link>
        <Link href="https://twitter.com/Dean_Wu1" target="_blank" >
        <XIcon />
        </Link>
        <Link href="https://github.com/probably-dean-wu" target="_blank" >
        <GitHubIcon />
        </Link>
        <Link href="mailto:thisisdeanwu@gmail.com" target="_blank" >
        <EmailIcon />
        </Link>
        </div>
        <p>
            &copy; 2024 deanwu.me
        </p>
        
    </div>
  )
}

export default Footer