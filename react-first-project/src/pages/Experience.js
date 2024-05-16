import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/Experience.css'
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import EngineeringIcon from '@mui/icons-material/Engineering';

function Experience() {
  return (
    <div>
      <VerticalTimeline lineColor='white'> 
        <VerticalTimelineElement className='vertical-timeline-element--education dateColor' date='2019 - 2023' iconStyle={{background: "#0096FF", color: "#FFFFFF"}} icon= {<SchoolIcon/>} contentStyle={{ background: '#333230'}} contentArrowStyle={{ borderRight: '7px solid  gray' }}>
          <h3 className='vertical-timeline-element-title'>
            Loyola Catholic Secondary School
          </h3>
          <p>
          Ontario Secondary School Diploma (OSSD)
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education dateColor' date='2021 - 2022' iconStyle={{background: "#FFAC1C", color: "#FFFFFF"}} icon= {<WorkIcon/>} contentStyle={{ background: '#333230'}} contentArrowStyle={{ borderRight: '7px solid  gray' }}>
          <h3 className='vertical-timeline-element-title'>
            Artesian - Basil Box
          </h3>
          <p>
          Worked in a Thai and Vietnamese-styled restaurant as an all-around cook, dish-washer and cashier
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education dateColor' date='2022' iconStyle={{background: "#EE4B2B", color: "#FFFFFF"}} icon= {<EngineeringIcon/>} contentStyle={{ background: '#333230'}} contentArrowStyle={{ borderRight: '7px solid  gray' }}>
          <h3 className='vertical-timeline-element-title'>
            Head Project Manager/Software Engineer - GameMaking Team
          </h3>
          <p>
            Lead a team of 3 in an annual game dev contest hosted by Sheridan College and DPCDSB. This project ultimately lead us to win the "Best Themed Game" award
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education dateColor' date='2022 - 2023' iconStyle={{background: "#EE4B2B", color: "#FFFFFF"}} icon= {<EngineeringIcon/>} contentStyle={{ background: '#333230'}} contentArrowStyle={{ borderRight: '7px solid  gray' }}>
          <h3 className='vertical-timeline-element-title'>
            Lead Software Engineer - Robotics Team
          </h3>
          <p>
            Helped developed remote controlled robots that played floor hockey using Arduino and Vex Robotics
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education dateColor' date='2023 - Present' iconStyle={{background: '#0096FF', color: 'white'}} icon= {<SchoolIcon/>} contentStyle={{ background: '#333230'}} contentArrowStyle={{ borderRight: '7px solid  gray' }}>
          <h3 className='vertical-timeline-element-title'>
            University of Toronto
          </h3>
          <p>
          Bachelor of Applied Science - BASc, Computer Science
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience