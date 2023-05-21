// Components
import { Header } from "./Header";
import { PokemonList } from "./PokemonList";

const Pokedex = () => {
    return (
        <main>
            <Header />

            <PokemonList />
        </main>
    );
};

export { Pokedex };