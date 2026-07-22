import {  IconHeart,  IconMapPin } from "@tabler/icons-react";
import { Avatar, Divider, Text, Button } from "@mantine/core";
import { Link } from "react-router-dom";

const TalentCard = (props:any) => {
  return (
    <div className="bg-mine-shaft-900 p-5 w-85 flex flex-col gap-7 rounded-xl transition duration-300 ease-in-out flex-col hover:shadoq-[0_0_5px_1px_yellow] w-96">
      
      <div className="flex justify-between">
        <div className="flex gap-3 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-full ">
            <Avatar
            size-lg
              src={`${props.image}.png`}
              alt=""
            />
          </div>

          <div>
            <div className="font-semibold text-lg">{props.name}</div>
            <div className="text-sm text-mine-shaft-300">
              {props.role} &#x2022; {props.company}
            </div>
          </div>
        </div>

        <IconHeart className="text-mine-shaft-300 cursor-pointer" />
      </div>
      <div className="flex gap-2">
         {
            props.topSkills?.map((skill:any,index:any)=><div key={index} className="p-2 py-1 bg-mine-shaft-800 text-bright-sun-400 rounded-lg text-xs">{skill}</div>)
         }
      </div>

      

      {/* Description */}
      <Text
        className="!text-xs text-justify text-mine-shaft-300"
        lineClamp={4}
      >
      {props.about}
      </Text>

      {/* Divider */}
      <Divider className="border-mine-shaft-700 size-xs" />

     
      <div className="flex justify-between items-center">
        <div className="font-semibold text-mine-shaft-300">
          &#8377;{props.expectedCtc}
        </div>

        <div className="flex gap-2 items-center text-xs text-mine-shaft-400">
          <IconMapPin className="h-5 w-5" stroke={1.5} />
          <span>{props.location}</span>
        </div>
      </div>
      <Divider className="border-mine-shaft-700 size-xs" />
      <div className="flex [&>*]:w-1/2 [&>*]:p-1 ">
        <Link to="/talent-profile">
        <Button color="brightSun.4" variant="outline" fullWidth>Profile</Button>
        </Link>
        <div>
              <Button color="brightSun.4" variant="light" fullWidth>Message</Button>
        </div>
         
       
      </div>
    </div>
  );
};

export default TalentCard;