
import React from "react";
import Link from "next/link";
import { PokemonDetail, PokemonImage, RightSide, PokemonCard, LeftSide, PokemonId, PokemonName, PokemonContentType, PokemonType, PokemonTypeText } from "./Card.styles";

export type PokemonType = {
    type: {
        name: string;
    }

}

export type Pokemon = {
    name: string,
    url: string,
    id: number,
    types: PokemonType[]
}
type data = {
    name: string;
    url: string;
    types: PokemonType[];
}


const Card = ({ pokemon }: Props) => {
    return (
        <PokemonCard type={pokemon.types[0].type.name}>
            <LeftSide>
                <PokemonId>#{pokemon.id}</PokemonId>
                <PokemonName>{pokemon.name}</PokemonName>
                <PokemonContentType>
                    {pokemon.types.map(pokemonType => (
                        <PokemonType key={pokemonType.type.name} type={pokemonType.type.name}>
                            <PokemonTypeText>
                                {pokemonType.type.name}
                            </PokemonTypeText>
                        </PokemonType>
                    ))}
                </PokemonContentType>
            </LeftSide>
            <RightSide>
                <PokemonDetail
                    src={"/images/Pokeball.png"}
                    width="130"
                    height="130"
                />
                <PokemonImage src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                    width="130"
                    height="130"
                    alt={pokemon.name}
                />
            </RightSide>
            {/* <Link href={`/pokedex/${pokemon.id}`}>Detalhes</Link> */}
        </PokemonCard>
    );
};

export default Card;