import { Card, Space } from 'antd';
import Capsules from './Capsules';

const Skills = ({data}) => {
  return ( 
    <>
        {Object.keys(data).map((key,index)=>(
          <>
            <div className='flex justify-left items-center pl-0'>
              <img src={data[key].img} className='w-[15px] h-[15px] mr-2'/><span className='text-[15px] font-bold capitalize'>{key ? key.replaceAll('_', ' ') : ""}</span>
            </div>
            <Capsules data={data[key].tech}/>
          </>        
        ))}
    </>
  )
}
export default Skills

