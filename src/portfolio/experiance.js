//use server
import { Row, Col, List } from 'antd';
import calender from '../images/calendar.png'
import location from '../images/pin.png'

const Experiance = (data) => {
  return ( 
    <>
    {data.data.map((key, index) =>
      <List
        size="small"
        bordered={false}
        header={
        <>
          <Row>
            <Col className='text-[20px] text-subHeadingTextColor'>
              {key.designation}
            </Col>
          </Row>
          <Row>
            <Col className='font-bold text-headingColorSmall'>
              {key.company_name}
            </Col>
          </Row>
          <Row className='text-textColor gap-4'>
            <Col className='flex justify-center items-center'>
              <img src={calender} className='w-[15px] h-[15px] mr-1'/><div className='text-[15px]'>{key.time_span}</div>
            </Col>
            <Col className='flex justify-center items-center'>
              <img src={location} className='w-[15px] h-[15px] mr-1'/><div className='text-[15px]'>{key.address}</div>
            </Col>
          </Row>
        </>
        }
        dataSource={key.responsiblity}
        renderItem={(item) => <List.Item className='text-start text-textColor'>{item}</List.Item>
      }/>
      ) 
    }
    </>
  )
}
export default Experiance

