import { Route, Routes } from "react-router-dom";

// Pages
import { NotFoundPage } from "./pages/NotFound.tsx";


const MainRoutes = () => (
    <Routes>
        <Route path="*" element={<NotFoundPage />} />
    </Routes>
);

export { MainRoutes }