import { Tag  } from 'antd';

const Capsules = ({data}) => {
  return ( 
    <>
      {data ? data.map((key,index)=>(
          <Tag>{key}</Tag>
      )):
      <>
        loading....
      </>
    }
    </>
  )
}
export default Capsules

