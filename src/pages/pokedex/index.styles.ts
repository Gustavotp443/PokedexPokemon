import styled from "styled-components";
export const PokedexContainer = styled.ul`
    max-width: 1280px;
    margin: 0 auto;
`;
export const CardList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;

    >li{
        width: 33%;
        margin-bottom: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        &:hover{
            transform: rotate(2deg) scale(105%);
        }

        @media screen and (max-width: 1009px){
            width: 50%;
        }
        @media screen and (max-width: 680px){
            width: 100%;
            
        }
    }
`;