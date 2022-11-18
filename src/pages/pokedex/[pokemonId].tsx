import React from "react";
import Image from "next/image";

export const getStaticPaths = async () => {
    const maxPokemons = 905;
    const api = "https://pokeapi.co/api/v2/pokemon/";

    const res = await fetch(`${api}/?limit=${maxPokemons}`);
    const data = await res.json();

    //params
    const paths = data.results.map((pokemon, index: number) => {
        return {
            params: { pokemonId: (index + 1).toString() }, //necessário que o id esteja como texto
        };
    });

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (context) => {   //context extrai id e carrega dado individual

    const id = context.params.pokemonId;

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

    const data = await res.json();

    return {
        props: { pokemon: data },
    };

};

const Pokemon = ({ pokemon }) => {
    return (
        <div>
            <p>{pokemon.name}</p>
            <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                width="200"
                height="200"
                alt={pokemon.name}
            />
            <div>
                <h3>Número:</h3>
                <p>#{pokemon.id}</p>
            </div>
            <div>
                <h3>Tipo:</h3>
                <div>
                    {pokemon.types.map((item, index) => (
                        <span key={index}>{item.type.name}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Pokemon;