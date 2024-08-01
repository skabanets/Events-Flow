import { useState } from 'react';

import type { ISortOption } from '../../types';

interface ISortField {
  handleChangeSort: (value: string) => void;
  sortData: string;
  options: ISortOption[];
}

export const SortField = ({ handleChangeSort, sortData, options }: ISortField) => {
  const [selectedOption, setSelectedOption] = useState<string>(sortData);

  const handleChangeOption = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const { value } = e.target;
    setSelectedOption(value);
    handleChangeSort(value);
  };

  return (
    <div className="w-[200px] mt-5">
      <label className="label">
        Sort by:
        <select
          className="select select-bordered w-full max-w-xs input-field"
          value={selectedOption}
          onChange={handleChangeOption}
        >
          {options.map(option => (
            <option key={option.id} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};
