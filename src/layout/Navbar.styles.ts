import styled from "styled-components";

export const Nav = styled.nav`
display: flex;
justify-content: space-between;
padding: 40px 2%;
max-width: 1600px;
margin: 0 auto;

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

export const NavLinks = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
font-size: 1.1em;
font-weight: bold;
    >ul{
        display: flex;
        list-style: none;
        gap: 60px;
    }
`;

