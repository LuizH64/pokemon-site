export interface PokemonType {
    name: string,
    url: string
}

export interface PokemonTypesResponse {
    count: number,
    results: PokemonType[]
}