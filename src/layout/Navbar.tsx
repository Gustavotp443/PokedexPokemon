import React from "react";
import { MdOutlineCatchingPokemon } from "react-icons/md";
import { IconNav, Nav, NavLinks } from "./Navbar.styles";
import Link from "next/link";
import PokedexButton from "../components/PokedexButton";
const Navbar: React.FC = () => {
    return (
        <Nav>
            <IconNav><MdOutlineCatchingPokemon /></IconNav>
            <NavLinks>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/regions">Regions</Link></li>
                    <li><Link href="/about">About</Link></li>
                </ul>
            </NavLinks>
            <Link href="/pokedex">
                <PokedexButton />
            </Link>
        </Nav>
    );
};

export default Navbar;