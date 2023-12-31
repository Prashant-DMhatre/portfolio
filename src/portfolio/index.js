import { Card, Row, Space, Col, Divider, Typography } from 'antd';
import Experiance from './experiance';
import Projects from './projects';
import Summary from './summary';
import Skills from './skills';
import Capsules from './Capsules';
import Education from './eduction';
import email from '../images/at-sign.png';
import phone from '../images/phone-call.png';
import mail from '../images/email.png';
import linkdin from '../images/linkedin-logo.png'
import dataVisualization from '../images/line-chart.png'
import backendTechnologies from '../images/nodejs.png'
import versionControl from '../images/git.png'
import codetech from '../images/code-svgrepo-com.svg'
import statemgmt from '../images/monitor-svgrepo-com.svg'
import API from '../images/icons8-rest-api-48.png'

const Portfolio = () => {

  const experianceData = [
    {
      designation: "Senior Frontend Developer",
      company_name: "Mintifi Pvt. Ltd.",
      time_span: " Feb 2021 – Ongoing ",
      address: 'Times Square Building, Marol',
      responsiblity: [
        '2+ years Expertise in modern Frontend framework React.js.',
        'Proficient in TypeScript, HTML, and CSS for creating responsive and user-friendly user interfaces.',
        'Skilled in UI development with Tailwind, Bootstrap, Ant Design.',
        'Experience with version control systems, particularly Git.',
        'Solid understanding API implementation, testing, and documentation using Postman.',
        'Redux & Redux Saga expertise for advanced state management.',
        'Basic understanding of backend technologies including Node.js and MongoDB.'
      ]
    },
    {
      designation: "Implementation Engineer",
      company_name: "P2B Ace Solutions",
      time_span: " Aug 2019 - Jan 2021 ",
      address: ' Thane, India',
      responsiblity: [
        'Collaborated with clients to gather requirements and develop implementation plans for software solutions.',
        'Documented implementation processes and maintained project documentation.',
      ]
    }
  ]

  const projectsData = [
    { 
      name:"Customer360 (Current)",
      technology_used:[ 
        "Working On UI With Next.js, TypeScript, Tailwind, AntD ."
      ]
    },
    { 
      name:"Sale Navigator",
      technology_used:[ 
        "Developed UI for Business and sales Team using typescript, HTML,tailwind, with headlessui Components."
      ]
    },
    { 
      name:"Customer On boarding Journey",
      technology_used:[ 
        "Customer Onboarding Journey Using React, Antd, Bootstrap and Redux Saga To make User Data accessible Over all Components."
      ]
    },
    { 
      name:"Transaction Portal",
      technology_used:[ 
        "UI for Collection and Operations Team using React State Components, HTML, Bootstrap with CoreUI and amCharts5."
      ]
    },
    { 
      name:"Tally Connector Service",
      technology_used:[ 
        "Restructuring of back-end application using Electron.js framework and MongoDB."
      ]
    }
  ]

  const summaryData = [
    "Dedicated Frontend Engineer with a strong foundation in React, Next.js, TypeScript, HTML, CSS.",
    "Proficient in UI/UX design replication and experienced in API integration, state management, and data visualization.",
    "Seeking opportunities to contribute my frontend expertise and expand my skills in Node.js and MongoDB.",
    "Ability to learn new concepts quickly."
  ]

  const strengthData = [
    "Hard-working",
    "Active Listener",
    "Motivator"
  ]

  const skillsData = {
      frontend_technologies:
      { 
        img:codetech,
        tech:["React","Next.js","TypeScript","HTML","CSS","Tailwind CSS","Bootstrap","AntD"]
      },
      state_management:{
        img:statemgmt,
        tech:["Redux","Redux Saga"]
      },
      api_implementation:{
        img:API,
        tech:["RESTful APIs","Postman"]
      },
      data_visualization:{
        img:dataVisualization,
        tech:["AmCharts"]
      },
      version_control:{
        img:versionControl,
        tech:["Git"]
      },
      backend_technologies:{
        img:backendTechnologies,
        tech:["Node.js (Beginner)","MongoDB (Beginner)"]
      }
  }

  const educationData = [
    {
      course:"B.E Computer Engineering",
      college:"Pillai’s HOCL College of Engineering",
      address:"Panvel, India"
    },
    {
      course:"Diploma In Computer Engineering",
      college:"Pillai’s Polytechnic",
      address:"Panvel, India"
    },

  ] 

  return ( 
    <>
      <Card className='m-auto bg-slate-300 w-[60%]'>
        {/* <Space direction="vertical" className='w-[100%]'> */}
          <Card bordered={false} style={{boxShadow:'none'}}>
            <Row>
              <Col className='text-[40px] font-bold'>
                PRASHANT DILIP MHATRE
              </Col>
            </Row>
            <Row className='font-bold text-headingColorSmall'>
              <Col className='text-[20px]'>
                Frontend Developer
              </Col>
              <Col className='text-[20px] vertical-line'>
                Transforming Designs into Interactive Web Apps
              </Col>
            </Row>
            <Row className='text-textColor justify-between w-[80%]' >
              <Col>
                <Typography.Text className='flex items-center'>
                  <img src={email} className='w-[15px] h-[15px] mr-1'/><a className='text-[15px]'href="mailto:prashantmhatre@outlook.in">prashantmhatre@outlook.in</a>
                </Typography.Text>
              </Col>
              <Col>  
                <Typography.Text className='flex items-center'>
                  <img src={phone} className='w-[15px] h-[15px] mr-1'/><a className='text-[15px]' href="tel:+919967341881">+91 9967-341881</a>
                </Typography.Text>
              </Col>
              <Col>  
                <Typography.Text className='flex items-center'>
                  <img src={mail} className='w-[15px] h-[15px] mr-1'/><a target="_blank" href='https://www.google.com/maps/place/Jindal+Avenue/@18.9954507,73.1041296,15z/data=!4m6!3m5!1s0x3be7e91bb7baadc7:0x9f3d1cf0197d4ecb!8m2!3d18.9954507!4d73.1041296!16s%2Fg%2F11rcdc2g9q?entry=ttu' className='text-[15px]'>Jindal Avenue, Navi Mumbai, 410206 India.</a>
                </Typography.Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <Typography.Text className='flex items-center'>
                  <img src={linkdin} className='w-[15px] h-[15px] mr-1'/><a target="_blank" href='https://www.linkedin.com/in/prashantdmhatre' className='text-[15px]'>https://www.linkedin.com/in/prashantdmhatre</a>
                </Typography.Text>
              </Col>
            </Row>
          </Card>
        {/* </Space> */}

        <div className='grid grid-cols-5 gap-10'>
          <div className='col-span-3'>
            <Card bordered={false} style={{boxShadow:'none'}} title={<div className='text-headerColor text-[30px] text-start'>EXPERIENCE</div>}>
              <Experiance data={experianceData}/>
            </Card>
            <Card bordered={false} style={{boxShadow:'none'}} title={<div className='text-headerColor text-[30px] text-start'>PROJECTS</div>}>
              <Projects data={projectsData}/>
            </Card>
          </div>
          <div className='col-span-2 text-left'>
            <Card bordered={false} style={{boxShadow:'none'}} title={<div className='text-headerColor text-[30px] text-start'>SUMMARY</div>}>
              <Summary data={summaryData}/>
            </Card>
            <Card bordered={false} style={{boxShadow:'none', lineHeight:'30px'}} title={<div className='text-headerColor text-[30px] text-start'>STRENGTHS</div>}>
              <Capsules data={strengthData}/>
            </Card>
            <Card bordered={false} style={{boxShadow:'none'}} title={<div className='text-headerColor text-[30px] text-start'>SKILLS</div>}>
              <Skills data={skillsData}/>
            </Card>
            <Card bordered={false} style={{boxShadow:'none'}} title={<div className='text-headerColor text-[30px] text-start'>EDUCATION</div>}>
              <Education data={educationData}/>
            </Card>
          </div> 
        </div>
      </Card>
    </>
  )
}
export default Portfolio