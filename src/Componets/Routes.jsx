import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/login" element={<Home/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes;