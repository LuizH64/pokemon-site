// Components
import { PokemonList } from "./PokemonList";
import { PokemonCard } from "./PokemonCard";

// Context
import LegendaryGroupProvider from "../../../contexts/LegendaryGroup";

// Styles
import styles from './index.module.css';


export interface LegendaryGroupProviderProps {
    legendaryPokemonsIds: number[]
}

const PokemonGroup = ({ legendaryPokemonsIds }: LegendaryGroupProviderProps) => {
    return (
        <section className={styles.pokemonGroupWrapper}>
            <LegendaryGroupProvider legendaryPokemonsIds={legendaryPokemonsIds}>
                <PokemonCard />
                <PokemonList />
            </LegendaryGroupProvider>
        </section>
    );
};

export { PokemonGroup };