import styled, { css } from "styled-components";
import Image from "next/image";
import Link from "next/link";

export type PokemonType = {
    type: string

}

export type Pokemon = {
    name: string,
    url: string,
    id: number,
    types: PokemonType[]             //Pois pode ter mais de 1 tipo, array
}


export const PokemonCard = styled(Link) <PokemonType> `
    /* pegando dinamicamente os tipos de bg card*/
    ${({ theme, type }) => css`
        background: ${theme.colors.backgroundCard[type]};
        text-decoration: none;
        display: flex;
        border-radius: 10px;
        margin-top:10px;
        flex-direction: row;
        padding:20px;
        width: 330px;

        @media screen and (max-width:350px){
            transform: scale(80%);
        }
    `}
`;

export const LeftSide = styled.div`
    width: 50%;
    position: relative;
`;

export const PokemonId = styled.p`
${({ theme }) => css`
    font-weight: bold;
    font-size: 1em;
    line-height: 14px;
    color:${theme.colors.light_text};
    `}
`;

export const PokemonName = styled.p`
        font-weight: bold;
        font-size: 2em;
        line-height: 31px;
        margin-top: 5px;
        text-transform: capitalize;
        color:white;
`;

export const PokemonContentType = styled.div`
    display: flex;
    flex-direction: row;
`;

export const PokemonType = styled.div<PokemonType>`
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

export const RightSide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    position: relative;
`;

export const PokemonImage = styled(Image)`
    margin-top: -40px;
    width: 130px;
    height: 130px;
    z-index: 1;
    animation: fadeInImage 1.5s linear;
    @keyframes fadeInImage {
        0%{
            opacity: 0;
            transform: translate(-10%);
        }
        100%{
            opacity: 1;
            transform: translate(0);
        }
    }
`;

export const PokemonDetail = styled(Image)`
    position: absolute;
    right: -20px;
`;