import { useState } from "react";
import { login } from "../../Service/Requisitions";
import AutenticationPages from "../shared/AutenticationPages";

export default function Login() {
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: "",
    });
    function handleLogin(e) {
        e.preventDefault();
        const promise = login(userLogin);
        promise.then()
    }
    return(
        <AutenticationPages p="Não tem uma conta? Cadastre-se!" link="/cadastro" onSubmit={handleLogin}>
            <input 
                type="email" 
                required 
                placeholder="email" 
                value={userLogin.email} 
                onChange={(e) => setUserLogin({ ...userLogin, email: e.target.value })} />
            <input 
                type="password" 
                required 
                placeholder="senha" 
                value={userLogin.password} 
                onChange={(e) => setUserLogin({ ...userLogin, password: e.target.value })} />
            <input type="submit" value="Entrar" />
        </AutenticationPages>
    );
}