import { Select } from "antd";
import "assets/styles/components/SearchSelect.css";
import { SearchSelectOptionModel } from "model/etc/search-select-option.model";
import { Dispatch, SetStateAction } from "react";
import { useGetUsers } from "utils/hooks/users";
import { convertToSearchSelectOptions } from "utils/pure-function/convertToSearchSelectOptions";

interface SearchSelectProps {
  setSelectedUser: Dispatch<SetStateAction<string>>;
}

const SearchSelect: React.FC<SearchSelectProps> = ({ setSelectedUser }) => {
  const { data, isSuccess, isLoading, isError } = useGetUsers();

  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  let finalData: SearchSelectOptionModel[] = [];
  if (isSuccess && data) {
    finalData = convertToSearchSelectOptions(data);
  }
  if (isError) {
    finalData = [];
  }

  return (
    <Select
      showSearch
      options={finalData}
      loading={isLoading}
      className="search-select"
      optionFilterProp="children"
      placeholder="Select a user"
      onChange={(value: string) => setSelectedUser(value)}
      filterOption={filterOption}
    />
  );
};

export default SearchSelect;
