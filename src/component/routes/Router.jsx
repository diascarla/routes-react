import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Contato from "../pages/Contato"
import Empresa from "../pages/Empresa"

function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/contato" element={<Contato />} />
                    <Route exact path="/empresa" element={<Empresa />} />
                    <Route path="*" element={<h1>Not Found</h1>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes  