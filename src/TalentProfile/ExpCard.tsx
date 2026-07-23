
const ExpCard = (props: any) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="bg-mine-shaft-900 p-5 w-85 flex flex-col gap-7 rounded-xl">
        {/* Header */}
        <div className="flex justify-between">
          <div className="flex gap-3 items-center">
            <div className="p-2 bg-mine-shaft-800 rounded-md">
              <img
                className="h-7"
                src={`/Icons/${props.company}.png`}
                alt={props.company}
              />
            </div>

            <div>
              <div className="font-semibold">{props.title}</div>
              <div className="text-sm text-mine-shaft-300">
                {props.company} &#x2022; {props.location}
              </div>
            </div>
          </div>

          <div className="text-sm text-mine-shaft-300">
            {props.startDate} - {props.endDate}
          </div>
        </div>

        <div className="text-sm text-mine-shaft-300 text-justify">
          {props.description}
        </div>
      </div>
    </div>
  );
};

export default ExpCard;