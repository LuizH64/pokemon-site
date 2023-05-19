import { Route, Routes } from "react-router-dom";

// Pages
import { NotFound } from "./pages/NotFound.tsx";


const MainRoutes = () => (
    <Routes>
        <Route path="*" element={<NotFound />} />
    </Routes>
);

export { MainRoutes }