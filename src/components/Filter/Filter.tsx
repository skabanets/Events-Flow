import { useState } from 'react';
import { FaRectangleXmark } from 'react-icons/fa6';

interface IFilterProps {
  handleChangeFilter: (value: string) => void;
}

export const Filter = ({ handleChangeFilter }: IFilterProps) => {
  const [filterValue, serFilterValue] = useState<string>('');

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChangeFilter(e.target.value);
    serFilterValue(e.target.value);
  };

  const handleClearFilter = () => {
    handleChangeFilter('');
    serFilterValue('');
  };

  return (
    <div className="text-xl w-full md:w-[342px] lg:w-[400px]">
      <label className="label relative">
        <input
          onChange={handleChangeInput}
          value={filterValue}
          type="text"
          className="input-field text-sm "
          placeholder="search participants by full name, email"
        />
        <FaRectangleXmark
          onClick={handleClearFilter}
          className="absolute size-[18px] right-2 top-2 fill-gray-400 hover:fill-red-600 cursor-pointer"
        />
      </label>
    </div>
  );
};
