import React from "react";
import Card from "../../components/Card";
import { useState, useEffect } from "react";

export async function getStaticProps() {
    type PokemonResponse = {
        id: number;
        name: string;
        url: string;
    }
    const maxPokemons = 905;
    const api = "https://pokeapi.co/api/v2/pokemon/";

    const res = await fetch(`${api}/?limit=${maxPokemons}`);
    const data = await res.json();
    data.results.map((item, index) => {
        item.id = index + 1;
    });

    return {
        props: {
            pokemons: data.results,
        }
    };
}



const index = ({ pokemons }) => {






    return (
        <ul>
            {pokemons.map((pokemon) => (
                <Card key={pokemon.id} pokemon={pokemon} types={pokemon.type} />
            ))}
        </ul>
    );
};

export default index;