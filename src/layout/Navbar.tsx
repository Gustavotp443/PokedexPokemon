import React from "react";
import { MdOutlineCatchingPokemon } from "react-icons/md";
import { IconNav, MobileIcon, MobilePokemonIco, Nav, NavLinks, NavUls, PokedexLink } from "./Navbar.styles";
import Link from "next/link";
import PokedexButton from "../components/PokedexButton";
import { FaTimes, FaBars } from "react-icons/fa";
import { useState } from "react";
import { IconContext } from "react-icons/lib";
import Router from "next/router";

const Navbar: React.FC = () => {
    const [click, setClick] = useState<boolean>(false);
    const handleClick = () => {
        console.log("clicando");
        setClick(!click);
    };    //Setando como o inverso do valor atual

    Router.events.on("routeChangeComplete", () => {
        setClick(false);
    });


    return (
        <IconContext.Provider value={{ color: "white" }}>
            <Nav>
                <IconNav><Link href="/"><MdOutlineCatchingPokemon /></Link></IconNav>
                <MobileIcon onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </MobileIcon>
                <NavLinks onClick={handleClick} click={click}>
                    <NavUls>
                        <MobilePokemonIco
                            src="/images/ico_pikachu.png"
                            height="100"
                            width="100"
                            alt="Ico Pikachu"
                        />
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/regions">Regions</Link></li>
                        <li><Link href="/about">About</Link></li>
                    </NavUls>
                </NavLinks>
                <PokedexLink click={click}>
                    <Link href="/pokedex">
                        <PokedexButton />
                    </Link>
                </PokedexLink>
            </Nav >
        </IconContext.Provider>
    );
};

export default Navbar;