import React from "react";
import { FcSearch } from "react-icons/fc";
import { SearchContainer, SearchInput } from "./SearchBar.styles";
const SearchBar = ({ onChange }: any) => {
    return (
        <SearchContainer>
            <SearchInput onChange={e => { onChange(e.target.value); }} type="text" placeholder='Search for your Pokemon...' />
            <FcSearch />
        </SearchContainer>
    );
};

export default SearchBar;