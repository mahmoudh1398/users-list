import { Input } from "antd";
import "assets/styles/components/Search.css";
import { Dispatch, SetStateAction } from "react";

interface SearchProps {
  setSearchTerm: Dispatch<SetStateAction<string>>;
}

const Search: React.FC<SearchProps> = ({ setSearchTerm }) => (
  <Input
    className="search"
    placeholder="Search any fields of the columns"
    onChange={(e) => setSearchTerm(e.target.value)}
  />
);

export default Search;
