import styled from "styled-components";
import { Container } from "./global";

export const Container404 = styled(Container)`
>div{
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2{
        font-size: 2.3em;
    }
    img{
        margin-top: 80px;
        width: 480px;
        height: 320px;
    }
    >a{
        text-decoration: none;     
    }
}
`;

export const Back = styled.div`
    text-align: center;
    font-size: 1.2em;
    color: black;
    padding: 10px;
    height: 50px;
    width: 100px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 100px;
    background-color: #4fc3f7;

    &:hover{
        color: white;
        animation: move 0.5s ease;
        @keyframes move {
            50%{
                transform: translateX(-10%);
            }
            100%{
                transform: translateY(0%);
            }
        }
    }
`;