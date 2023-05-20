// Components
import { Header } from "../components/Header";
import { Pokedex } from "../components/Pokedex";
import { FilterModal } from "../components/Pokedex/FilterModal";

// Contexts
import PokedexProvider from "../contexts/Pokedex";


const PokedexPage = () => {
    return (
        <PokedexProvider>
            <Header />
            <FilterModal />
            <Pokedex />
        </PokedexProvider>
    );
};

export { PokedexPage };