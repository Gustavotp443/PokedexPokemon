import React from "react";
import { ButtonToTopContainer } from "./ButtonToTop.styles";
import { MdKeyboardArrowUp } from "react-icons/md";


const handleClick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};



const ButtonToTop = () => {
    return (
        <ButtonToTopContainer onClick={handleClick}>
            <MdKeyboardArrowUp />
        </ButtonToTopContainer>
    );
};

export default ButtonToTop;