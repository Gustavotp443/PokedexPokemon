import styled from "styled-components";


export const Button = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 1.3em;
border: 1px solid white;
height: 30px;
width: 130px;
border-radius: 6px;
font-weight: bold;
background-color: transparent;
animation: moveButton 3s linear infinite;

@keyframes moveButton {
    0%{
        transform: scale(100%);
        color: white;
    }
    50%{
        transform: scale(110%);
        color: purple;
    }
    100%{
        transform: scale(100%);
        color: white;
    }
}


`;

