import styled from "styled-components";
import Image from "next/image";

type CLick = {
    click: boolean;
}

export const Nav = styled.nav`
display: flex;
justify-content: space-between;
padding: 40px 2%;
max-width: 1600px;
margin: 0 auto;
z-index: 3;

>ul{
    text-decoration: none;
}
a{
color: white;
text-decoration: none;
}
`;

export const IconNav = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 3em;
cursor: pointer;
padding: 0 2%;
`;

export const NavLinks = styled.div<CLick>`
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
font-size: 1.1em;
font-weight: bold;
z-index: 2;
@media screen and (max-width:768px){
        position: absolute;
        top: ${({ click }) => (click ? "0" : "-200%")};
        width: 100%;
        background-color: black;
        padding: 20px;
        margin: 0 -10px;
        height: 100vh;
        transition: all 1s;
    }
`;
export const NavUls = styled.ul`
     display: flex;
        list-style: none;
        gap: 60px;
    @media screen and (max-width:768px){
        flex-direction: column;
        text-align: center;
        transform: translateY(-100px);
    }
`;

export const MobilePokemonIco = styled(Image)` 
display: none;
@media screen and (max-width:768px){
        display: block;
    }

`;

export const MobileIcon = styled.div`
   
    display: none;
    
    @media screen and (max-width:768px){
    display:block ;
    cursor: pointer;
    position: absolute;
    font-size: 2em;
    z-index: 999;
    top: 0;
    right: 0;
    transform: translate(-100%,120%);
    }
`;

export const PokedexLink = styled.div<CLick>`
    @media screen and (max-width:768px){
        transition: all 1s;
        position: absolute;
        display: flex;
        width: 100%;
        justify-content: center;
        transform: translateY(70vh) translateX(-2%); 
        z-index: 3;
        top: ${({ click }) => (click ? "0" : "-200%")};
    }
`;