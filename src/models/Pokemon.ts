export interface PokemonResponse {
    id: number,
    name: string,
    base_experience: number,
    types: {
        type: {
            name: string
        }
    }[],
    stats: {
        base_stat: number,
        stat: {
            name: string
        }
    }[],
    sprites: {
        other: {
            "official-artwork": {
                front_default: string
            }
        }
    },
    abilities: {
        ability: {
            name: string
        }
    }[]
}

export interface PokemonSpecieResponse {
    id: number,
    name: string,
    generation: string,
    varieties: {
        pokemon: {
            url: string
        }
    }[]
}

export interface PokemonsResponse {
    count: number;
    next: null | string,
    previous: null | string,
    results: {
        name: string,
        url: string
    }[]
}

export interface Pokemon {
    id: number,
    name: string,
    types: string[]
    abilities: string[],
    image: string,
    generation: string,
    stats: {
        attack: null | number,
        hp: null | number,
        experience: null | number,
        defense: null | number,
        spAttack: null | number,
        spDefense: null | number
    },
}