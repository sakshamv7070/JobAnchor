import { useState } from 'react';
import {  Combobox, useCombobox } from '@mantine/core';
import { IconAdjustments } from '@tabler/icons-react';

const opt = ['Relevance', 'Most Recent', 'Salary (High to Low)', 'Salary (Low to High)'];

const Sort = () => {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>('Relevance');

  const options = opt.map((item) => (
    <Combobox.Option className='text-xl' value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      width={150}
      store={combobox}
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        
        <div onClick={()=>combobox.toggleDropdown()} className="items-center border border-bright-sun-300 flex px-2 py-1 rounded-xl cursor-pointer gap-2 text-sm">
            {value} <IconAdjustments className="h-4 w-4 text-bright-sun-400" />
        </div>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
export default Sort;