import React, { useEffect } from 'react'
import "../styles/About.css"
import Link from '@mui/material/Link';
import Grid from '@mui/system/Unstable_Grid';
function About() {
  useEffect(() => {
    document.title = "Me"
  })
  return (
    <div>
      <Grid container justifyContent={"center"} direction={"column"} alignItems="center" paddingLeft={6}>
        <Grid item xs={10} sm={10} md ={10} lg={7} xl={5}>
          <h1 className='aboutTitle'> About me </h1>
          <p className='text'> 
            Hello, I'm Dean. I've been studying computer science, making games and building websites since 2022. 
          </p> 
          <p className='text'> 
        I created this website so I can express my passion for coding, learn ReactJS and (hopefully) inspire whoever visits. 
        My open-sourced projects are always in <a> <Link  href='/projects' color={"#87CEEB"} underline='hover'> Projects </Link> </a> so feel free to check them out.
          </p>      
          <p className='text'>
        This website contains no ads, no sponsorships, no tracking and analytics, no affilate link, and no paywalls. 
          </p>
          <p className='text'> 
        You're always welcome to email me at <a ><Link href="mailto:thisisdeanwu@gmail.com" target="_blank" color={"#87CEEB"} underline='hover'> thisisdeanwu@gmail.com </Link> </a> and say hello.
          </p>
          <ul className='aboutList'>
            <li> <Link href="https://twitter.com/Dean_Wu1" target="_blank" color={"#87CEEB"} underline='hover'> X(Twitter) </Link> </li>
            <li> <Link href="https://github.com/ReversedPhysic" target="_blank" color={"#87CEEB"} underline='hover'> Github </Link> </li>
            <li> <Link href="https://www.linkedin.com/in/dean-wu-86ba0b252/" target="_blank" color={"#87CEEB"} underline='hover'> Linkedin </Link> </li>
          </ul>
          <h2 className='subTitle'> 
            <b> Tools </b>
          </h2>
          <hr/>
          <h2 className='subTitle'>
            Hardware
          </h2>
      <ul className='aboutList'>

        <li>
          <b> Gaming PC: </b>
          <ul>
            <li>
              <b> CPU: </b> <Link href='https://ark.intel.com/content/www/us/en/ark/products/134599/intel-core-i9-12900k-processor-30m-cache-up-to-5-20-ghz.html' target="_blank" color={"#87CEEB"} underline='hover'> Intel i9-12900K </Link>
            </li>
            <li>
              <b> GPU: </b> <Link href='https://www.nvidia.com/en-us/geforce/graphics-cards/30-series/rtx-3080-3080ti/' target="_blank" color={"#87CEEB"} underline='hover'> Nvidia RTX 3080ti Gigabyte Vision </Link>
            </li>
            <li>
              <b> Motherboard: </b> <Link href='https://rog.asus.com/motherboards/rog-strix/rog-strix-z690-a-gaming-wifi-d4-model/' target="_blank" color={"#87CEEB"} underline='hover'> ASUS ROG Strix Z690-A Gaming WiFi D4 </Link>
            </li>
            <li>
              <b> Memory: </b> <Link href='https://www.gskill.com/product/165/299/1597041149/F4-4000C16D-32GTRSA' target="_blank" color={"#87CEEB"} underline='hover'> G.SKILL Trident Z Royal Series 64GB (4 x 16GB) </Link> 
            </li>
            <li>
              <b> Storage: </b> <Link href='https://semiconductor.samsung.com/consumer-storage/internal-ssd/980pro/' target="_blank" color={"#87CEEB"} underline='hover'> Samsung 980 PRO 2TB </Link> (2x), <Link href='https://www.amazon.com/Seagate-BarraCuda-Internal-Drive-3-5-Inch/dp/B07H2RR55Q?th=1' color={"#87CEEB"} underline='hover'> Seagate BarraCuda 2TB 7200 RPM </Link>, recycled laptop HDD 1TB, recycled laptop SSD 256GB
            </li>
            <li>
              <b> PSU: </b> <Link href='https://www.evga.com/products/product.aspx?pn=220-P3-1200-X1' target="_blank" color={"#87CEEB"} underline='hover'> EVGA SuperNOVA P3, 80 Plus Platinum 1200W </Link>
            </li>
            <li>
              <b> Case: </b> <Link href='https://shop.asus.com/us/90dc0013-b48000-tuf-gaming-gt501-white-edition.html' target="_blank" color={"#87CEEB"} underline='hover'> ASUS TUF Gaming GT501 White Edition </Link>
            </li>
          </ul> 

          <li>               
          <b> Keyboard 1: </b>
            <ul>

              <li>
                <b> PCB: </b> <Link href='https://wooting.io/wooting-60he' target="_blank" color={"#87CEEB"} underline='hover'> Wooting 60HE </Link>
              </li>

              <li>
                <b> Keycaps: </b> <Link href='https://novelkeys.com/products/gmk-cyl-honor-keycaps' target="_blank" color={"#87CEEB"} underline='hover'> GMK Honor (light) </Link>
              </li>

              <li>
                <b> Case: </b> <Link href='https://kbdfans.com/products/tofu60-redux-case' target="_blank" color={"#87CEEB"} underline='hover'> Tofu60 Redux + brass weight </Link>
              </li>

              <li>
                <b> Plate: </b> Aluminum Wooting Plate
              </li>

              <li>
                <b> Mods: </b> Tape Mod, O-ring Mod, Polyfill inside, Spacebar Tape
              </li>

            </ul>
            </li>

          <li>
            <b> Keyboard 2: </b> <Link href='https://www.amazon.com/YUNZII-AL66-Mechanical-Swappable-Pre-lubed/dp/B0CJ97N3J1?th=1' target="_blank" color={"#87CEEB"} underline='hover'> Yunzii AL66 (Blue) </Link>
          </li>

          <li>
            <b> Monitor 1: </b> <Link href='https://www.gigabyte.com/Monitor/M32U' target="_blank" color={"#87CEEB"} underline='hover'> Gigabyte M32U </Link>
          </li>

          <li>
            <b> Monitor 2</b> <Link href='https://www.msi.com/Monitor/G273CQ' target="_blank" color={"#87CEEB"} underline='hover'> MSI G273CQ </Link>
          </li>

          <li>
            <b> Headphone: </b> <Link href='https://www.amazon.com/Razer-BlackShark-Wireless-Gaming-Headset/dp/B09CLW9K1S' target="_blank" color={"#87CEEB"} underline='hover'> Razer BlackShark V2 Pro Wireless</Link>
          </li>
          
          <li>
            <b> Mouse: </b> <Link href='https://www.amazon.com/Razer-Ultimate-Lightweight-Wireless-Charging/dp/B09TG6KG2T' target="_blank" color={"#87CEEB"} underline='hover'> Razer Viper Ultimate (Mercury White) </Link>
          </li>

        </li>
        <li>
          <b> Tablet: </b> iPad Pro 13‑inch (M4) 256GB
        </li>  

        <li>
          <b> Laptop: </b> ROG Zephyrus G15 GA503RM (white), Ryzen 9 6900HS, 3060 Laptop GPU, 40GB RAM (Upgraded)
        </li>
        
      </ul>      
      <h2 className='subTitle'>
        Software
      </h2>
      <ul className='aboutList'>
        <li>
          <b> Coding: </b> <Link href='https://code.visualstudio.com' target='_blank' color={"#87CEEB"} underline='hover'> Visual Studio Code </Link> and <Link href='https://gamemaker.io/en' target='_blank' color={"#87CEEB"} underline='hover'> GameMaker Studio 2 </Link>
        </li>
        <li>
          <b> Notes: </b> <Link href='https://www.goodnotes.com' target="_blank" color={"#87CEEB"} underline='hover'> Goodnotes </Link> and <Link href='https://www.onenote.com/download' target="_blank" color={"#87CEEB"} underline='hover'> OneNote </Link>
        </li>
      </ul>
      <h2 className='subTitle'>
        Miscellaneous 
      </h2>
      <hr></hr>
      <li className='aboutList'> <Link href='/resume' color={"#87CEEB"} underline='hover'> Resume </Link> </li>
        </Grid>
      </Grid>
    </div>

  )
}

export default About