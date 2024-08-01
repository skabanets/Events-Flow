import { FC, useState } from 'react';
import { FaRectangleXmark } from 'react-icons/fa6';

interface FilterProps {
  handleChangeFilter: (value: string) => void;
}

export const Filter: FC<FilterProps> = ({ handleChangeFilter }) => {
  const [filterValue, serFilterValue] = useState<string>('');

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    handleChangeFilter(value);
    serFilterValue(value);
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
          className="input-field"
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
