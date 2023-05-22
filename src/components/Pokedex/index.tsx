// Components
import { BottomSpinner } from "./BottomSpinner";
import { Header } from "./Header";
import { PokemonList } from "./PokemonList";
import { PokemonModal } from "./PokemonModal";

const Pokedex = () => {
    return (
        <main>
            <Header />
            <PokemonModal />
            <PokemonList />
            <BottomSpinner />
        </main>
    );
};

export { Pokedex };