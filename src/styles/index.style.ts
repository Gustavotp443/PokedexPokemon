import styled from "styled-components";
import { Container } from "./global";

export const HomeContainer = styled(Container)`
    width:100%;
    margin-top: 60px;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    a{
    text-decoration: none;
    }

    >svg{
        font-size: 30em;
        margin-top: -50px;
        @media screen and (max-width:300px){
    transform: scale(85%);
}
    }

@media screen and (max-width:430px){
    transform: scale(70%);
}
`;

export const Welcome = styled.div`
    display:flex;
    align-items: center;
    text-align: center;
    gap: 20px;
    margin-top: -60px;
    svg{
        font-size: 3em;
    }
    h2{
        font-size: 2em;
    }
 
`;

export const GifContainer = styled.div`
    width:100%;
    height:0;
    text-align: center;
 


    img{
        position: relative;
        margin-top: 40px;
        width: 300px;
        
        
    }
`;

export const Pokedex = styled.div`
    display: flex;
    justify-content: center;
    margin: 40px;
    padding: 20px 0;
    
`;

