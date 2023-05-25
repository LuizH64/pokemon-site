// Types
import { FormatPokemonDataTypes } from "../models/Pokedex";
import { Pokemon } from "../models/Pokemon";

const formatPokemonData = ({ specieData, pokemonData }: FormatPokemonDataTypes): Pokemon => {
    const abilities = pokemonData.abilities.map(ability => ability.ability.name);
    const types = pokemonData.types.map(type => type.type.name);

    const findStatValue = (statName: string): number | null => {
        return pokemonData.stats.find(stat => {
            if (stat.stat.name === statName) return stat
        })?.base_stat ?? null;
    }

    const attack = findStatValue("attack");
    const hp = findStatValue("hp");
    const defense = findStatValue("defense");
    const spAttack = findStatValue("special-attack");
    const spDefense = findStatValue("special-defense");
    const experience = pokemonData.base_experience;

    return {
        id: pokemonData.id,
        name: pokemonData.name,
        types,
        abilities,
        image: pokemonData.sprites.other["official-artwork"].front_default,
        generation: specieData.generation.name,
        order: pokemonData.order,
        stats: {
            attack,
            hp,
            defense,
            spAttack,
            spDefense,
            experience
        }
    };
};

export default formatPokemonData;