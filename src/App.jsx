import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";

export default function App() {
    return (
        <>
            <title>Khalifa Alshehhi</title>
            <BrowserRouter>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path="*" element={<Home />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}