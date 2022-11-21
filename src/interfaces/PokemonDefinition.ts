export type PokemonType = {
    type: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        name: string | number | any,
    }

}

export type Pokemon = {
    name: string,
    url: string,
    id: number,
    types: PokemonType[],
    abilities: Abilities,
    stats: Attribute,
}

export type Request = {
    id: number,
    types: PokemonType,
}

export type Monster = {
    pokemon: Pokemon;
}

export type Attribute = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    map: any
    stat: {
        name: string,
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    base_stat: Array<string | number> | any

}

export type Abilities = {
    ability: {
        name: string;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    map: any

}