import { Row, Col  } from 'antd';
import calender from '../images/calendar.png'
import location from '../images/pin.png'

const Education = ({data}) => {
  return ( 
    <>
    {data.map((key, index) =>
      <>
      <Row>
        <Col className='text-[20px] text-subHeadingTextColor'>
          {key.course}
        </Col>
      </Row>
      <Row>
        <Col className='font-bold text-headingColorSmall'>
        {key.college}
        </Col>
      </Row>
      <Row className='text-textColor gap-4'>
        <Col className='flex justify-center items-center'>
          <img src={location} className='w-[15px] h-[15px] mr-1'/><div className='text-[15px]'>{key.address}</div>
        </Col>
      </Row>
      </>
      ) 
    }
    </>
  )
}
export default Education

