import React from "react";
import { Call, Copyright, Email, FooterContainer, FooterContent, RightSide, Social, ToTop, ToTopContent } from "./Footer.styles";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { AiOutlineArrowUp } from "react-icons/ai";

import { useEffect, useState } from "react";

const Footer: React.FC = () => {
    // const [, setToTop] = useState<boolean>(false);

    // const handleClick = () => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: "smooth"
    //     });
    // };


    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         if (window.scrollY > 100) {
    //             setToTop(true);
    //         } else {
    //             setToTop(false);
    //         }
    //     });
    // }, []);

    return (
        <FooterContainer>

            {/* <img src="./images/ico_pikachu.png" width='122px' height='122px' alt='pikachu icon' />
                        </div> */}

        </FooterContainer>
    );
};

export default Footer;