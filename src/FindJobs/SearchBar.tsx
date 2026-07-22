import MultiInput from "./MultiInput";
import { dropdownData } from "../Data/JobsData";
import {Divider, RangeSlider} from "@mantine/core";
import { useState } from "react";

const SearchBar = () => {
  const [value, setValue] = useState<[number, number]>([1, 100]);
  return <div className="flex px-5 py-8">
    {
      dropdownData.map((item,index) => (
        <> <div className="w-1/5" key={index}>
          <MultiInput {...item} />
        </div>
        <Divider mr="xs" size="sm" orientation="vertical"/>
        </>
      ))
    }
    <div className="w-1/5">
  <div className="flex justify-between mb-2">
    <div>Salary</div>
    <div>
      &#8377; {value[0]} - &#8377; {value[1]}
    </div>
  </div>

  <RangeSlider
  color="brightSun.4"
  size="xs"
  value={value}
  onChange={setValue}
  min={1}
  max={100}
  label={(val) => `${val} LPA`}
  classNames={{
    label: "translate-y-10",
  }}
/>
</div>
</div>
}
export default SearchBar;