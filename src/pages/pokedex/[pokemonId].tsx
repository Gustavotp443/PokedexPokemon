import React from "react";
import api from "../../services/api";
import { BotWrapper, Attributes, PokemonId, PokemonTypeText, PokemonTypes, PokemonContentType, PokemonContent, PokemonTop, PokemonName, LeftSide, RightSide, PokemonBot, SidesContainer, CircleImage, BaseStatus, BaseStatusText, AttributesValue, AttributesWrapper, ProgressBar, PokemonImage, AbilitiesList, AbilitiesText, AbilitiesWraper, PokemonNameId, ArrowToComeback } from "../../styles/pokedex.id";
import { AiOutlineLeft } from "react-icons/ai";
import Link from "next/link";
import { Abilities, Attribute, Monster, Pokemon, PokemonType } from "../../interfaces/PokemonDefinition";

export const getStaticPaths = async () => {
    const response = await api.get("/pokemon");
    const data = await response.data;
    //params



    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const paths = data.results.map((_: string, index: number) => {
        return {
            params: { pokemonId: (index + 1).toString() }, //necessário que o id esteja como texto
        };
    });

};

export const getStaticProps = async (context: { params: { pokemonId: string; }; }) => {   //context extrai id e carrega dado individual

    const id = context.params.pokemonId;

    const response = await api.get(`/pokemon/${id}`);

    const data = response.data;

    return {
        props: { pokemon: data },
    };

};

const Pokemon = ({ pokemon }: Monster) => {



    return (
        <PokemonContent>
            <Link href="/pokedex">
                <ArrowToComeback type={pokemon.types[0].type.name}>
                    <AiOutlineLeft />
                </ArrowToComeback>
            </Link>
            <PokemonTop type={pokemon.types[0].type.name}>
                <SidesContainer>
                    <LeftSide>
                        <PokemonImage
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                            width="250"
                            height="250"
                            alt={pokemon.name}
                        />
                        <CircleImage
                            src="/images/circle.png"
                            height="200"
                            width="200"
                            alt="pokeball">
                        </CircleImage>
                    </LeftSide>
                    <RightSide>
                        <PokemonNameId>
                            <PokemonId>{`#${pokemon.id}`}</PokemonId>
                            <PokemonName>{`${pokemon.name}`}</PokemonName>
                        </PokemonNameId>
                        <PokemonContentType>
                            {pokemon.types.map((pokemonType: PokemonType) => (
                                <PokemonTypes key={pokemonType.type.name} type={pokemonType.type.name}>
                                    <PokemonTypeText>
                                        {pokemonType.type.name}
                                    </PokemonTypeText>
                                </PokemonTypes>
                            ))}
                        </PokemonContentType>
                    </RightSide>
                </SidesContainer>
            </PokemonTop>
            <PokemonBot>
                <BotWrapper>
                    <BaseStatus>
                        <BaseStatusText type={pokemon.types[0].type.name}>Base Status</BaseStatusText>
                        {
                            pokemon.stats.map((attribute: Attribute) => (
                                <AttributesWrapper key={attribute.stat.name}>
                                    <Attributes>{attribute.stat.name}</Attributes>
                                    <AttributesValue>{attribute.base_stat}</AttributesValue>
                                    <ProgressBar
                                        percent={(attribute.base_stat) / 2}
                                        trailColor="#fff"
                                        // {${({ theme, type }) => css`
                                        // color: ${theme.colors.backgroundCard[type]};
                                        // width: 300px;
                                        // `}}
                                        strokeWidth={2}
                                    />
                                </AttributesWrapper>
                            ))
                        }
                    </BaseStatus>
                    <AbilitiesWraper>
                        <AbilitiesText type={pokemon.types[0].type.name}>Abilities</AbilitiesText>
                        <AbilitiesList>
                            {pokemon.abilities.map((abilitie: Abilities) => (
                                <li key={abilitie.ability.name}>{abilitie.ability.name}</li>
                            ))}
                        </AbilitiesList>
                    </AbilitiesWraper>
                </BotWrapper>
            </PokemonBot>
        </PokemonContent>
    );
};

export default Pokemon;