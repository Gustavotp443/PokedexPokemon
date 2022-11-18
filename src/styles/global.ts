import styled, { createGlobalStyle } from "styled-components";




export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing:border-box;
        
    }
    html,body{height:100%; }
    body{
        background-color: #121214;
        font-size: 14px;
        color: #fafafa;
        font-family: 'Roboto', sans-serif;
        overflow-x: hidden;
    }
    section{
        min-height: 80vh;
    }
`;

export const Container = styled.section`
    max-width: 1280px;
    margin: 0 auto;
`;
