import styled, { css } from "styled-components";
import { Container } from "../../styles/global";
import Image from "next/image";
import { Line } from "rc-progress";
import { PokemonType } from "../../components/Card.styles";



export const PokemonContent = styled(Container)`


`;
export const ArrowToComeback = styled.div<PokemonType>`
     ${({ theme, type }) => css`
     background: ${theme.colors.boxType[type]};
        width: 30px;
        height: 30px;
        display:flex;
        align-items: center;
        border-radius: 5px;
        justify-content: center;
        position:absolute;
        top: 160px;
        transform: translateX(50%);
        cursor: pointer;
        svg{
            font-size: 1.4em;
            color: #fff;
        }
    `}
`;

export const PokemonTop = styled.div<PokemonType>`
    ${({ theme, type }) => css`
        background: ${theme.colors.backgroundCard[type]};
        display: flex;
        padding: 30px;
        align-items: center;
        border-top-left-radius:23px ;
        border-top-right-radius:23px ;

    `}
`;

export const SidesContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
`;

export const LeftSide = styled.div`
width: 50%;
display: flex;
justify-content: center;
@media screen and (max-width:580px){
    width: 100%;
}
`;

export const RightSide = styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
@media screen and (max-width:580px){
    width: 100%;
    flex-direction: row;
}
`;

export const PokemonImage = styled(Image)`
    z-index: 1;
    animation: fadeIn 1.5s linear;
    @keyframes fadeIn {
        0%{
            opacity: 0;
            transform: translateX(50%);
        }
        100%{
            opacity: 1;
            transform: translateX(0);
        }
    }
`;

export const CircleImage = styled(Image)`
    position: absolute;
    top:170px;
    margin-left: 10px;
`;

export const PokemonId = styled.p`
    color: black;
    font-size: 1.3em;
    display: flex;
}
`;

export const PokemonName = styled.h1`
    font-size: 2.6em;
    text-transform: capitalize;
    font-weight: 700;
}
`;
export const PokemonNameId = styled.div`
    @media screen and (max-width:580px){
    display: flex;
    flex-direction: row;
    gap: 30px;
    align-items: center;
    position: absolute;
    top: 130px;
`;


export const PokemonContentType = styled.div`
    display: flex;
    flex-direction: row;
`;

export const PokemonTypes = styled.div<PokemonType>`
    ${({ theme, type }) => css`
        display: flex;
        padding: 5px;
        width: 65px;
        height: 25px;
        border-radius: 3px;
        margin-left: 5px;
        margin-top: 5px;
        justify-content: center;
        align-items:center ;
        background-color: ${theme.colors.boxType[type]};
   `}
`;


export const PokemonTypeText = styled.p`
        font-weight: 500;
        font-size: 1em;
        line-height: 14px;
        color: white;
        text-transform: capitalize;
`;

export const PokemonBot = styled.div`
    position: relative;
    z-index: 1;
    top: -20px;
    border-radius: 23px;
    background-color: white;
`;

export const BotWrapper = styled.div`
display: flex;
margin: 0 4%;
padding: 30px;
flex-wrap: wrap;

`;
export const BaseStatus = styled.div`
width: 80%;
@media screen and (max-width:780px){
    width: 100%;
}
`;

export const BaseStatusText = styled.h1<PokemonType>`
${({ theme, type }) => css`
color: ${theme.colors.backgroundCard[type]};
`}
`;
export const AttributesWrapper = styled.div`
display: flex;
flex-wrap:wrap;
align-items: center;
gap: 30px;
width: 100%;
@media screen and (max-width:580px){
        margin-top: 15px;
    }
`;
export const Attributes = styled.p`
    color: black;
    line-height: 30px;
    white-space: nowrap;
    width: 100px;
    text-align: justify;
    @media screen and (max-width:580px){
        width: auto;
    }
`;

export const AttributesValue = styled.p`
color: black;
width: 10px;
@media screen and (max-width:580px){
        width: auto;

    }
`;

export const ProgressBar = styled(Line)`
    width: 300px;
    @media screen and (max-width:580px){
        width: 100%;
        margin-top: -25px;
    }
`;
export const AbilitiesWraper = styled.ul`
    width: 20%;

    @media screen and (max-width:580px){
    margin-top: 30px;
    width: 100%;
}
`;


export const AbilitiesList = styled.ul`
    list-style: none;
    color: black;
    line-height: 30px;
`;

export const AbilitiesText = styled.h1<PokemonType>`
    ${({ theme, type }) => css`
    color: ${theme.colors.backgroundCard[type]};
    `}
`;

