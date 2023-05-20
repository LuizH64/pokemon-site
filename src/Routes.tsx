import { Route, Routes } from "react-router-dom";

// Pages
import { NotFoundPage } from "./pages/NotFound.tsx";
import { LandingPagePage } from "./pages/LandingPage.tsx";


const MainRoutes = () => (
    <Routes>
        <Route path="/" element={<LandingPagePage />} />
        <Route path="*" element={<NotFoundPage />} />
    </Routes>
);

export { MainRoutes }