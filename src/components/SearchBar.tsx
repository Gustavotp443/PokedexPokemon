import React from "react";
import { FcSearch } from "react-icons/fc";
import { SearchContainer, SearchInput } from "./SearchBar.styles";
const SearchBar = () => {
    return (
        <SearchContainer>
            <SearchInput type="text" placeholder='Search for your Pokemon...' />
            <FcSearch />
        </SearchContainer>
    );
};

export default SearchBar;