//use server
import { List, Typography } from 'antd';

const Summary = ({data}) => {
  return ( 
    <>
      <List
        size="small"
        dataSource={data}
        renderItem={(item) => <List.Item className='text-start' style={{paddingLeft:'0px'}}><Typography.Text>&#x2022; </Typography.Text> {item}</List.Item>
      }/>
    </>
  )
}
export default Summary

