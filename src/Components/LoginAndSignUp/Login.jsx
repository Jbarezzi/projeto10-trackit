import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../Service/Requisitions";
import { ThreeDots } from "react-loader-spinner";
import AutenticationPages from "../shared/AutenticationPages";

export default function Login() {
    const navigate = useNavigate();
    const [load, setLoad] = useState(false);
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: "",
    });
    function handleLogin(e) {
        e.preventDefault();
        setLoad(true);
        const promise = login(userLogin);
        promise.then((response) => {
            setLoad(false);
            navigate("/hoje", { replace: true });
        });
        promise.catch(() => {
            setLoad(false);
            alert("Usuário ou senha inválidos ou não cadastrados");
        })
    }
    return(
        <AutenticationPages p="Não tem uma conta? Cadastre-se!" link="/cadastro" onSubmit={handleLogin} load={load}>
            <input 
                type="email" 
                required 
                placeholder="email" 
                value={userLogin.email}
                disabled={load} 
                onChange={(e) => setUserLogin({ ...userLogin, email: e.target.value })} />
            <input 
                type="password" 
                required 
                placeholder="senha" 
                value={userLogin.password}
                disabled={load} 
                onChange={(e) => setUserLogin({ ...userLogin, password: e.target.value })} />
            <button type="submit" disabled={load}>
                { load ? <ThreeDots color="#FFFFFF" width="51" height="13" /> : "Entrar"}
            </button>
        </AutenticationPages>
    );
}