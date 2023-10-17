import { Card, Space } from 'antd';
import Capsules from './Capsules';

const Skills = ({data}) => {
  return ( 
    <>
        {Object.keys(data).map((key,index)=>(
          <>
            <div className='flex justify-left items-start pl-0'>
              <img src={data[key].img} className='w-[25px] h-[25px] mr-2'/>
              <div>
                <div className='text-[15px] font-bold capitalize'>{key ? key.replaceAll('_', ' ') : ""}</div>
                <div className='leading-[30px]'>
                  <Capsules data={data[key].tech}/>
                </div>
              </div>
            </div>
          </>        
        ))}
    </>
  )
}
export default Skills

