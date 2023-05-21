const POKEMONS_TYPES = [
    "stile",
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
    "eletric"
]

const getColorByType = (type: string) => {
    if (!POKEMONS_TYPES.includes(type)) return `var(--pokemon-normal)`;

    return `var(--pokemon-${type})`
}

export { getColorByType };