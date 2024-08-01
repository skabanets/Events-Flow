import { useState } from 'react';

interface ISortField {
  handleChangeSort: (value: string) => void;
  sortData: string;
}

export const SortField = ({ handleChangeSort, sortData }: ISortField) => {
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
          <option value="">Without sorting</option>
          <option value="sortByTitle=true">Title A-Z</option>
          <option value="sortByTitle=false">Title Z-A</option>
          <option value="sortByEventDate=true">Ascending Date</option>
          <option value="sortByEventDate=false">Descending Date </option>
          <option value="sortByOrganaizer=true">Organaizer A-Z</option>
          <option value="sortByOrganaizer=false">Organaizer Z-A</option>
        </select>
      </label>
    </div>
  );
};
