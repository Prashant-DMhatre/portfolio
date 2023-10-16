//use server
import { Row, Col, List, Divider, Typography } from 'antd';

const Experiance = ({data}) => {
  return ( 
    <>
    {data.map((key, index) =>
      <>
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
          bordered={false}
          renderItem={(item) => <List.Item className='text-start text-textColor' style={{paddingLeft:'0px'}}><Typography.Text>&#x2022; </Typography.Text>{item}</List.Item>
        }/>
        {data && (data.length) - 1 === index ? "" :  
          <Divider type="horizontal" className='m-0' dashed={true} />
        }
        </>
      )
    }
    </>
  )
}
export default Experiance

