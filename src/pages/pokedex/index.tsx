import React, { useEffect, useState } from "react";
import api from "../../services/api";
import Card from "../../components/Card";
import { CardList, PokedexContainer } from "./index.styles";
import ButtonToTop from "../../components/ButtonToTop";
import Pagination from "../../components/Pagination";
import { Pokemon, PokemonType } from "../../components/Card.styles";

type Request = {
    id: number,
    types: PokemonType
}



const index = () => {
    const [pokemons, setPokemons] = useState(Object);
    const [limit,] = useState(20);
    const [offset, setOffset] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        async function getAllPokemons() {
            const response = await api.get(`/pokemon?offset=${offset}&limit=${limit}`);
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
            setPokemons(payLoadPokemons);
            setTotal(response.data.count);
        }
        getAllPokemons();
    }, [offset]);



    async function getMoreInfo(url: string): Promise<Request> {
        const response = await api.get(url);
        const { id, types } = response.data;

        return {
            id, types
        };
    }


    console.log(pokemons);
    return (
        <PokedexContainer>
            <ButtonToTop />
            <CardList>
                {pokemons.length > 0 &&
                    pokemons.map((pokemon: typeof pokemons) => (
                        <li key={pokemon.id}><Card key={pokemon.id.toString()} pokemon={pokemon} /></li>
                    ))}
            </CardList>
            <Pagination
                limit={limit}
                total={total}
                offset={offset}
                setOffset={setOffset}
            />
        </PokedexContainer>
    );
};

export default index;