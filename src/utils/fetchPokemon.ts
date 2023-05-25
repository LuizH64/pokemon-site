// Dependencies
import axios from "axios";

// Types
import { Pokemon, PokemonResponse, PokemonSpecieResponse } from "../models/Pokemon";

// Helpers
import formatPokemonData from "../helpers/formatPokemonData";

export const fetchPokemonBySpecie = async (url: string): Promise<Pokemon> => {
    const specieData = (await axios.get<PokemonSpecieResponse>(url)).data;
    const pokemonData = (await axios.get<PokemonResponse>(specieData.varieties[0].pokemon.url)).data;

    const pokemon = formatPokemonData({ specieData, pokemonData });
    return pokemon;
}

export const fetchPokemon = async (url: string): Promise<Pokemon> => {
    const pokemonData = (await axios.get<PokemonResponse>(url)).data;
    const specieData = (await axios.get<PokemonSpecieResponse>(pokemonData.species.url)).data;

    const pokemon = formatPokemonData({ specieData, pokemonData });
    return pokemon;
}