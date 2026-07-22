import Sort from "../FindJobs/Sort";
import TalentCard from "./TalentCard";
import { talents } from "../Data/TalentData";

const Talents = () => {
    return <div className='p-5'>
          <div className="flex justify-between items-center px-5 py-3">
            <div className="text-2xl font-semibold">Talents</div>
            <Sort />
          </div>
          <div className="mt-10 flex flex-wrap justify-between gap-5">
           {
            talents.map((talent,index)=> <TalentCard key={index} {...talent} />)
           }
          </div>
          </div> 
}
export default Talents;