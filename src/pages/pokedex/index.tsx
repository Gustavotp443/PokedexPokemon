import React from "react";
import api from "../../services/api";
import { Pokemon, PokemonType } from "../../components/Card";
import Card from "../../components/Card";
import { CardList, PokedexContainer } from "./index.styles";
import SearchBar from "../../components/SearchBar";
type Request = {
    id: number,
    types: PokemonType
}

export async function getStaticProps() {

    const response = await api.get("/pokemon?limit=905");
    const { results } = response.data;              //Estou destruturando o result da response.data.results

    const payLoadPokemons = await Promise.all(      //Promise.all espera toda listagem ser completa
        results.map(async (pokemon: Pokemon) => {
            const { id, types } = await getMoreInfo(pokemon.url);

            return {
                name: pokemon.name,
                id,
                types
            };
        })

    );

    async function getMoreInfo(url: string): Promise<Request> {
        const response = await api.get(url);
        const { id, types } = response.data;

        return {
            id, types
        };
    }

    return {
        props: {
            pokemons: payLoadPokemons,
        }
    };
}



const index = ({ pokemons }: Pokemon) => {

    return (
        <PokedexContainer>
            <SearchBar />
            <CardList>
                {pokemons.map((pokemon: typeof pokemons) => (
                    <li key={pokemon.id}><Card key={pokemon.id.toString()} pokemon={pokemon} /></li>
                ))}
            </CardList>
        </PokedexContainer>
    );
};

export default index;