//use server
import { Row, Col, List } from 'antd';

const Experiance = (data) => {
  return ( 
    <>
    {data.data.map((key, index) =>
      <List
        size="small"
        header={
        <>
          <Row className='text-headingColorSmall font-bold'>
            <Col>
              {key.name}
            </Col>
          </Row>
        </>
        }
        dataSource={key.technology_used}
        renderItem={(item) => <List.Item className='text-start text-textColor'>{item}</List.Item>
      }/>
      ) 
    }
    </>
  )
}
export default Experiance

