const POKEMONS_TYPES = [
    "steel",
    "dark",
    "rock",
    "grass",
    "bug",
    "water",
    "ice",
    "fire",
    "fighting",
    "dragon",
    "normal",
    "gosth",
    "poison",
    "psychic",
    "fairy",
    "ghost",
    "ground",
    "electric"
]

const getColorByType = (type: string) => {
    if (!POKEMONS_TYPES.includes(type)) return `var(--pokemon-normal)`;

    return `var(--pokemon-${type})`
}

export { getColorByType };