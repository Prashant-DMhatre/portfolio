//use server
import { List } from 'antd';

const Summary = ({data}) => {
  return ( 
    <>
      <List
        size="small"
        dataSource={data}
        renderItem={(item) => <List.Item className='text-start'>{item}</List.Item>
      }/>
    </>
  )
}
export default Summary

