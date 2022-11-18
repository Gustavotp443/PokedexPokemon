import styled from "styled-components";
import { Container } from "./global";

export const AboutContainer = styled(Container)`
    >div{
        margin: 0 2%;
    }
`;
export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    font-size: 1.8em;
`;

export const Main = styled.div`
    margin-top: 40px;
    font-size: 1.2em;
    text-align: justify;
    text-justify: distribute;
    text-align-last: left;
    text-indent:3em;
    line-height: 30px;
@media screen and (max-width:400px){
    text-indent:0;
    text-align: center;
    text-align-last: center;
}

`;

export const GifContainer = styled.div`
    text-align: center;
    margin-top: 100px;
`;



