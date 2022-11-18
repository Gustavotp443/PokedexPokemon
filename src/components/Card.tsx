import Image from "next/image";
import React from "react";
import Link from "next/link";

type Pokemon = {
    name: string;
    id: number;
}
const Card = ({ pokemon }: { pokemon: Pokemon }) => {
    return (
        <div>
            <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                width="120"
                height="120"
                alt={pokemon.name}
            />
            <p>#{pokemon.id}</p>
            <h3>{pokemon.name}</h3>
            <Link href={`/pokedex/${pokemon.id}`}>Detalhes</Link>

        </div>
    );
};

export default Card;