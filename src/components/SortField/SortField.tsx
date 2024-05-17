interface ISortField {
  handleChangeSort: (value: string) => void;
}

export const SortField = ({ handleChangeSort }: ISortField) => {
  const handleChangeOption = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    handleChangeSort(e.target.value);
  };

  return (
    <div className="w-[200px] mt-5">
      <label className="label">
        Sort by:
        <select className="input-field" onChange={handleChangeOption}>
          <option defaultValue="">Without sorting</option>
          <option value="sortByTitle=true">Title A-Z</option>
          <option value="sortByTitle=false">Title Z-A</option>
          <option value="sortByEventDate=true">Ascending Date</option>
          <option value="sortByEventDate=false">Descending Date </option>
          <option value="sortByOrganaizer=true">Organaizer A-Z</option>
          <option value="sortByOrganaizer=false">Organaizer D-Z</option>
        </select>
      </label>
    </div>
  );
};
