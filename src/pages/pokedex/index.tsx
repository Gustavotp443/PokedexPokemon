import React, { useState } from "react";
import api from "../../services/api";
import { Pokemon, PokemonType } from "../../components/Card";
import Card from "../../components/Card";
import { CardList, PokedexContainer } from "./index.styles";
import SearchBar from "../../components/SearchBar";
import ButtonToTop from "../../components/ButtonToTop";
type Request = {
    id: number,
    types: PokemonType
}

export async function getServerSideProps() {
    const offset = 0;
    const limit = 40;
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


const index = ({ pokemons }) => {
    const [searchTerm, setSearchTerm] = useState("");

    console.log(pokemons);
    return (
        <PokedexContainer>
            <ButtonToTop />
            <div>
                <button >Prev</button>
                <button >Next</button>
            </div>
            <SearchBar onChange={setSearchTerm} />
            <CardList>
                {pokemons.length > 0 &&
                    pokemons.filter((val: Pokemon) => {
                        if (searchTerm == "") {
                            return val;
                        } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val;
                        }
                    }).map((pokemon: typeof pokemons) => (
                        <li key={pokemon.id}><Card key={pokemon.id.toString()} pokemon={pokemon} /></li>
                    ))}
            </CardList>
        </PokedexContainer>
    );
};

export default index;



