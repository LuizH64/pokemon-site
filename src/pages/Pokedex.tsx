// Components
import { Navbar } from "../components/Navbar";
import { Pokedex } from "../components/Pokedex";
import { FilterModal } from "../components/Pokedex/FilterModal";

// Contexts
import PokedexProvider from "../contexts/Pokedex";


const PokedexPage = () => {
    return (
        <>
            <Navbar />

            <PokedexProvider>
                <FilterModal />
                <Pokedex />
            </PokedexProvider>
        </>
    );
};

export { PokedexPage };