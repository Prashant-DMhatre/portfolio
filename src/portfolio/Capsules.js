import { Tag  } from 'antd';

const Capsules = ({data}) => {
  return ( 
    <>
      {data ? data.map((key,index)=>(
          <Tag className='text-[15px]'>{key}</Tag>
      )):
      <>
        loading....
      </>
    }
    </>
  )
}
export default Capsules

