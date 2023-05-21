export interface PokemonType {
    name: string,
    url: string
}

export interface PokemonTypesResponse {
    count: number,
    results: PokemonType[]
}

export interface PokemonsByType {
    pokemon: {
        pokemon: {
            name: string,
            url: string
        }
    }[]
}