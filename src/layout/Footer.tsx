import React from "react";
import { FooterContainer } from "./Footer.styles";


const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <p>All copyrights &copy; 2022 Gustavo Teixeira Pardini</p>
            <p>My profile site,<a href="https://gustavo-pardini-dev.vercel.app/" target="_blank" rel="noreferrer noopener"> click here!</a></p>
        </FooterContainer>
    );
};

export default Footer;