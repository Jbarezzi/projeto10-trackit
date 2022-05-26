import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResetCSS from "./styles/ResetCSS";
import GlobalStyles from "./styles/GlobalStyles";
import Login from "./Components/LoginAndSignUp/Login";
import SignUp from "./Components/LoginAndSignUp/SignUp";
import Today from "./Components/MainPage/Today";

export default function App() {
    return(
        <BrowserRouter>
            <ResetCSS />
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<SignUp />} />
                {/* <Route path="/habitos" element={} /> */}
                <Route path="/hoje" element={<Today />} />
                {/* <Route path="/historico" element={} /> */}
            </Routes>
        </BrowserRouter>
    );
}