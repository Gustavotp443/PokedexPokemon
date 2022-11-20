/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import { Container404, Back } from "../styles/404.styles";
import { AiOutlineArrowLeft } from "react-icons/ai";

const NotFound: React.FC = () => {
    return (
        <Container404>
            <div>
                <h2>404 - Page doesn´t exist</h2>
                <img src="/images/gengar_vs_nidorino.gif" alt="Gengar_vs_nidorino.gif" />
                <Link href="/"><Back>Voltar<br /><AiOutlineArrowLeft /></Back></Link>
            </div>
        </Container404>
    );
};

export default NotFound;