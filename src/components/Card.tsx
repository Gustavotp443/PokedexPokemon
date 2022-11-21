
import React from "react";
import { Monster, PokemonType } from "../interfaces/PokemonDefinition";
import { PokemonDetail, PokemonImage, RightSide, PokemonCard, LeftSide, PokemonId, PokemonName, PokemonContentType, PokemonTypeContainer, PokemonTypeText } from "./Card.styles";



const Card = ({ pokemon }: Monster) => {
    return (
        <PokemonCard href={`/pokedex/${pokemon.id}`} type={pokemon.types[0].type.name}>
            <LeftSide>
                <PokemonId>#{pokemon.id}</PokemonId>
                <PokemonName>{pokemon.name}</PokemonName>
                <PokemonContentType>
                    {pokemon.types.map((pokemonType: PokemonType) => (
                        <PokemonTypeContainer key={pokemonType.type.name} type={pokemonType.type.name}>
                            <PokemonTypeText>
                                {pokemonType.type.name}
                            </PokemonTypeText>
                        </PokemonTypeContainer>
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