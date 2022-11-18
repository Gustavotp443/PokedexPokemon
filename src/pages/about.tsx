import React from "react";
import { AboutContainer, Header, Main } from "../styles/about.styles";
import { GifContainer } from "../styles/about.styles";
const About: React.FC = () => {
    return (
        <AboutContainer>
            <div>
                <Header>
                    <h2> About The Project</h2>
                </Header>
                <Main>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo hic velit illum natus dolor, ad nihil, exercitationem dicta eveniet vero repellat. Eum deleniti odit quasi illum minus, maxime exercitationem incidunt!, Lorem ipsum dolor sit, amet consectetur adipisicing elit. In ipsum repellat qui incidunt impedit beatae sed possimus mollitia temporibus voluptates, repellendus accusamus accusantium aliquam. Fuga illo labore est vel corporis!,lor</p>
                </Main>
                <GifContainer>
                    <img src="/images/mew.gif" alt="Charmander GIF" />
                </GifContainer>
            </div>
        </AboutContainer >
    );
};

export default About;