import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Home from "../components/Home";
import SignUp from "../components/Signup";
import CreateItinerary from "../pages/CreateItinerary";

export default function NavRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/signup" element={<SignUp/>}></Route>
            <Route path="/create-itinerary" element={<CreateItinerary/>}></Route>
        </Routes>
    )
}