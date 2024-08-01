import React, { useEffect } from 'react'
import Grid from '@mui/system/Unstable_Grid';
import '../styles/Resume.css'
import Link from '@mui/material/Link';
function Resume() {
  useEffect(() => {
    document.title = "Resume"
  })
  return (
    <div>          
      <Grid container justifyContent={"center"} direction={"column"} alignItems="center" paddingLeft={6}>
        <Grid item xs={10} sm={10} md ={10} lg={7} xl={5}>
          <h1 className='resumeTitle'>
            Dean Wu
          </h1>
          <li className='resumeParagraph a'> 
            <b> Email </b> - thisisdeanwu@gmail.com
          </li>
          <li className='resumeParagraph'>
            <b> Github </b> - <Link href='https://github.com/probably-dean-wu' target='_blank'>probably-dean-wu</Link>
          </li>
          <h1 className='resumeSubtitle'>
            Education
          </h1>
          <hr/>
          <li className='resumeParagraph'>
             <strong> Loyola Catholic Secondary School </strong> | September 2019 - June 2023
          </li>
          <li className='resumeParagraph'>
            <strong> University of Toronto </strong> | September 2023 - Present
          </li>
          <h1 className='resumeSubtitle'>
            Experience
          </h1>
          <hr/>
          <p className='resumeJobSubtitle'> 
            <b> Artesian - Basil Box </b> | 2021 - 2022
            <li className='resumeParagraph b'> Maintained and cleaned the kitchen, seating area, and front counters by efficiently washing, rinsing and sanitizing countertops, equiptments and dishes.</li>
            <li className='resumeParagraph b'> Skillfully operated industral level dishwashers ensuring all items were cleaned to high standards and promptly restocked for use</li>
            <li className='resumeParagraph b'> Followed all health and safety regulations set by the FDA, including proper use of chemicals and maintaining cleanliness to prevent contamination.</li>
            <li className='resumeParagraph b'> Worked effectively with kitchen and front staff members to ensure smooth operations at both the front and back end.</li>
          </p>
          <p className='resumeJobSubtitle'>
            <b> Project Manager/Lead Software Engineer - Loyola C.S.S. Game Making Team </b> | 2022
            <li className='resumeParagraph b'> Successfully led a team of three to <b> first place </b> in a competitive game-making contest hosted by Sheridan College and DPCDSB (Dufferin-Peel Catholic District School Board).</li>
            <li className='resumeParagraph b'> Created and executed a comprehensive project plan, ensuring timely delivery of milestones and a high-quality final product.</li>
            <li className='resumeParagraph b'> Designed and implemented the game's architecture, writing clean, efficient code and utilizing GameMaker Studio 2 to the maximum poteintial.</li>
            <li className='resumeParagraph b'> Conducted thorough quality assurance and testing processes, ensuring the game met all thematic and techinical requirements for a polished user experience.</li>
            <li className='resumeParagraph b'> Facilitated clear communication with team members, promoting collaboration through code reviews and map designs.</li>
            <li className='resumeParagraph b'> Stepped up to take additional shifts and responsibilities when a team member fell extremely ill and required surgery, ensuring the project remained on track and met the deadline. </li>
          </p>
          <p className='resumeJobSubtitle'>
            <b> Lead Software Engineer - Loyola C.S.S. Robotics Team </b> | 2022 - 2023
            <li className='resumeParagraph b'> Designed and programmed opening and closing mechanisms for a doorway mechanic.</li>
            <li className='resumeParagraph b'> Aided in building the hardware components of the robot such as making sure the connection between controller and robot was successful.</li>
          </p>
          <h1 className='resumeSubtitle'>
             Volunteer
          </h1>
          <hr />
          <p className='resumeJobSubtitle'>
            <b> Junior Swim Instructor - South Common Community Centre</b> | 2019
            <li className='resumeParagraph b'> Aided lead swim instructors in conducting swimming lessons and water safety instruction. </li>
            <li className='resumeParagraph b'> Supervised and engaged with students to maintain safety and ensuring proper techniques. </li>
            <li className='resumeParagraph b'> Demonstrated swimming skills and techniques to students </li>
            <li className='resumeParagraph b'> Communicated effectively with students and staff members. </li>
          </p>
          <p className='resumeJobSubtitle'>
            <b> Computer Science Skills Demonstrator - Loyola C.S.S </b> | 2023
            <li className='resumeParagraph b'> Showcased SpringField Village and HTML portfolio to parents at Loyola C.S.S.</li>
          </p>
          <h1 className='resumeSubtitle'>
            Awards/Recognitions
          </h1>
          <hr />
          <p className='resumeJobSubtitle'>
            <b> Computer Studies Award </b> | 2022
            <li className='resumeParagraph b'> Honoured for exceptional achievement and excellence in computer studies. </li>
              <li className='resumeParagraph b'> Awarded by Loyola Catholic Secondary School for demonstrating outstanding skills, knowledge, and innovation in the field of computer science and technology. </li>
          </p>
          <p className='resumeJobSubtitle'>
            <b> Best Themed Video Game </b> | 2022
            <li className='resumeParagraph b'> Recognized for creating the most compelling and creatively themed game. </li>
              <li className='resumeParagraph b'> Awarded by Dufferin-Peel Catholic District School Board (DPCDSB) and Sheridan College for excellence in game design, artistic vision, and thematic execution. </li>
          </p>
          <p className='resumeJobSubtitle'>
            <b> Certificate of Academic Excellence - Computer Engineering</b> | 2023
            <li className='resumeParagraph b'> Awarded by Loyola Catholic Secondary School for outstanding academic perforamnce and exceptional achievement in the field of Computer Engineering. </li>
            <li className='resumeParagraph b'> Recognized for maintaining a high level of scholastic excellence and demonstrating a profound understanding of key engineering principles and practices. </li>
          </p>
          <p className='resumeJobSubtitle'>
            <b> Best Technical Video Game </b> | 2023
            <li className='resumeParagraph b'> Recognized for the outstanding advancements in technical aspects of game development including graphics, physics and performance. </li>
            <li className='resumeParagraph b'> Awarded by Loyola Catholic Secondary School for pushing the boundaries of technology to create immersive, seamless, and innovative gameplay experiences.</li>
          </p>
          <h1 className='resumeSubtitle'>
            Skills
          </h1>
          <hr />
          <li className='resumeParagraph b'>
            <strong> Languages </strong> - Java, Python, ReactJS, HTML, CSS, JavaScript, GameMaker Language, Arudino Language, NodeJS, NPM, Raspberry Pi, MUI
          </li>
        </Grid>
      </Grid>
  </div>
  )
}

export default Resume