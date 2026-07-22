import { useEffect, useState } from "react";
import {
  Checkbox,
  Combobox,
  Input,
  InputBase,
  useCombobox,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";


interface MultiInputProps {
  title: string;
  icon: any;
  options: string[];
}


const MultiInput = ({ title, icon: Icon, options }: MultiInputProps) => {
  
  const [data, setData] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [search, setSearch] = useState("");


  // Getting data from already created dataset
  useEffect(() => {
    setData(options);
  }, [options]);


  const combobox = useCombobox({
    onDropdownClose: () => {
      combobox.resetSelectedOption();
      setSearch("");
    },
  });


  const handleValueSelect = (value: string) => {
    setSelected((current) =>
      current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value]
    );
  };


  const filteredJobs = data.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );


  const optionList = filteredJobs.map((item) => (
    <Combobox.Option
      value={item}
      key={item}
      className={`rounded-md ${
        selected.includes(item)
          ? "bg-mine-shaft-400 text-white"
          : "hover:bg-mine-shaft-800"
      }`}
    >
      <Checkbox
        checked={selected.includes(item)}
        readOnly
        label={item}
        color="#525252"
      />
    </Combobox.Option>
  ));


  return (
    <Combobox
      store={combobox}
      onOptionSubmit={handleValueSelect}
      position="bottom"
      middlewares={{ flip: false, shift: false }}
    >

      <Combobox.Target>

        <InputBase
          component="button"
          type="button"
          variant="unstyled"
          pointer
          onClick={() => combobox.toggleDropdown()}
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"

          leftSection={
            <div className="rounded-full text-bright-sun-400 bg-mine-shaft-800 p-1 mr-1">
              <Icon size={18}/>
            </div>
          }

          className="w-full"
        >

          {selected.length > 0 ? (
            <>
              {selected[0]}

              {selected.length > 1 && (
                <span className="ml-1 text-bright-sun-400 font-medium">
                  +{selected.length - 1}
                </span>
              )}

            </>
          ) : (
            <Input.Placeholder>
              {title}
            </Input.Placeholder>
          )}

        </InputBase>

      </Combobox.Target>


      <Combobox.Dropdown className="bg-mine-shaft-900 border border-mine-shaft-700 rounded-lg">

        <Combobox.Search
          value={search}
          onChange={(event) =>
            setSearch(event.currentTarget.value)
          }
          placeholder={`Search ${title}...`}
        />


        <Combobox.Options>

          {optionList.length > 0 ? (
            optionList
          ) : (
            <Combobox.Empty>
              No {title} found
            </Combobox.Empty>
          )}

        </Combobox.Options>

      </Combobox.Dropdown>


    </Combobox>
  );
};


export default MultiInput;