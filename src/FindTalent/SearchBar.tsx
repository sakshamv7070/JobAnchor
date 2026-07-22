

import { Divider, RangeSlider } from "@mantine/core";
import { useState } from "react";
import MultiInput from "../FindJobs/MultiInput";
import { searchFields } from "../Data/TalentData";
import { IconUserCircle } from "@tabler/icons-react";
import { Input } from "@mantine/core";

const SearchBar = () => {
  const [value, setValue] = useState<[number, number]>([1, 100]);

  return (
    <div className="flex px-5 py-8 items-center 1text-mine-shaft-400 flex">
        <div className="flex items-center w-1/5">
            <div className="text-bright-sun-400 bg-mine-shaft-900 rounded-full p-1 mr-2"><IconUserCircle size={20}/></div>
            <Input className="[&_input]:!placeholder-mine-shaft-300"
  variant="unstyled"
  placeholder="Talent Name"
  classNames={{
    input:
      "bg-mine-shaft-900 rounded-full px-3 py-1 w-[200px] text-mine-shaft-400 focus:outline-none",
  }}
/>
        </div>
      {searchFields.map((item, index) => (
        <div className="flex items-center w-1/5" key={index}>
          <MultiInput {...item} />
          <Divider mr="xs" size="sm" orientation="vertical" />
        </div>
      ))}

      <div className="w-1/5">
        <div className="flex justify-between mb-2">
          <div>Salary</div>
          <div>
            &#8377; {value[0]} - &#8377; {value[1]} LPA
          </div>
        </div>

        <RangeSlider
          value={value}
          onChange={setValue}
          color="brightSun.4"
          size="xs"
          min={1}
          max={100}
          label={(val) => `${val} LPA`}
          classNames={{
            label: "translate-y-10",
          }}
        />
      </div>
    </div>
  );
};

export default SearchBar;