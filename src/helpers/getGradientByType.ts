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

const getGradientByType = (type: string) => {
    if (!POKEMONS_TYPES.includes(type)) return `var(--pokemon-gadient-normal)`;

    return `var(--pokemon-gradient-${type})`
}

export { getGradientByType };