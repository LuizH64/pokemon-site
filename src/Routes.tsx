import { Route, Routes } from "react-router-dom";

// Pages
import { NotFoundPage } from "./pages/NotFound.tsx";
import { LandingPagePage } from "./pages/LandingPage.tsx";
import { LegendariesPage } from "./pages/Legendaries.tsx";
import { PokedexPage } from "./pages/Pokedex.tsx";


const MainRoutes = () => (
    <Routes>
        <Route path="/" element={<LandingPagePage />} />
        <Route path="/pokedex" element={<PokedexPage />} />
        <Route path="/legendaries" element={<LegendariesPage />} />
        <Route path="*" element={<NotFoundPage />} />
    </Routes>
);

export { MainRoutes }