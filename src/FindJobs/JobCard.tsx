import { IconBookmark, IconClockHour3 } from "@tabler/icons-react";
import { Divider, Text } from "@mantine/core";

const JobCard = (props:any) => {
  return (
    <div className="bg-mine-shaft-900 p-5 w-85 flex flex-col gap-7 rounded-xl">
      {/* Header */}
      <div className="flex justify-between">
        <div className="flex gap-3 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-md">
            <img
              className="h-7"
              src={`/Icons/${props.company}.png`}
              alt=""
            />
          </div>

          <div>
            <div className="font-semibold">{props.jobTitle}</div>
            <div className="text-xs text-mine-shaft-300">
              {props.company} &#x2022; {props.applicants}
            </div>
          </div>
        </div>

        <IconBookmark className="text-mine-shaft-300 cursor-pointer" />
      </div>

      {/* Tags */}
      <div className="flex justify-between gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:rounded-lg [&>div]:text-bright-sun-400 text-xs">
        <div>{props.experience}</div>
        <div>{props.jobType}</div>
        <div>{props.location}</div>
      </div>

      {/* Description */}
      <Text
        className="!text-xs text-justify text-mine-shaft-300"
        lineClamp={4}
      >
        {props.description}
      </Text>

      {/* Divider */}
      <Divider className="border-mine-shaft-700 size-xs" />

      {/* Footer */}
      <div className="flex justify-between items-center">
        <div className="font-semibold text-mine-shaft-300">
          &#8377;{props.package} LPA
        </div>

        <div className="flex gap-2 items-center text-xs text-mine-shaft-400">
          <IconClockHour3 className="h-5 w-5" stroke={1.5} />
          <span>{props.postedDaysAgo}</span>
        </div>
      </div>
    </div>
  );
};

export default JobCard;