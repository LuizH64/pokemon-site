// Components
import { BottomSpinner } from "./BottomSpinner";
import { Header } from "./Header";
import { PokemonList } from "./PokemonList";

const Pokedex = () => {
    return (
        <main>
            <Header />
            <PokemonList />
            <BottomSpinner />
        </main>
    );
};

export { Pokedex };