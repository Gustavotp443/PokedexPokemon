
import React from "react";
import { PokemonDetail, PokemonImage, RightSide, PokemonCard, LeftSide, PokemonId, PokemonName, PokemonContentType, PokemonType, PokemonTypeText } from "./Card.styles";



const Card = ({ pokemon }: any) => {
    return (
        <PokemonCard href={`/pokedex/${pokemon.id}`} type={pokemon.types[0].type.name}>
            <LeftSide>
                <PokemonId>#{pokemon.id}</PokemonId>
                <PokemonName>{pokemon.name}</PokemonName>
                <PokemonContentType>
                    {pokemon.types.map((pokemonType: any) => (
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
                    alt="pokeball"
                />
                <PokemonImage src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                    width="130"
                    height="130"
                    alt={pokemon.name}
                />
            </RightSide>
        </PokemonCard>
    );
};

export default Card;