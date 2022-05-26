import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../Service/Requisitions";
import AutenticationPages from "../shared/AutenticationPages";

export default function SignUp() {
    const navigate = useNavigate();
    const [newUser, setNewUser] = useState({
        email: "",
        name: "",
        image: "",
        password: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        const promise = register(newUser);
        promise.then(() => {
            alert("Cadastrado com Sucesso");
            navigate("/", {replace: true})
        });
        promise.catch(() => alert("Aconteceu um erro durante o cadastro.\nTente novamente"));
    }

    return(
    <AutenticationPages p="Já tem uma conta? Faça login!" link="/" onSubmit={handleSubmit}>    
            <input 
                type="email" 
                required 
                placeholder="email" 
                value={newUser.email} 
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
            <input 
                type="password" 
                required 
                placeholder="senha" 
                value={newUser.password} 
                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} />
            <input 
                type="text" 
                required 
                placeholder="nome" 
                value={newUser.name} 
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
            <input 
                type="url" 
                required 
                placeholder="foto" 
                pattern="(http)?s?:?(\/\/.*\.(?:png|jpg|jpeg|gif|png|svg))" 
                value={newUser.image} 
                onChange={(e) => setNewUser({ ...newUser, image: e.target.value })} />
            <input type="submit" value="Cadastrar" />
    </AutenticationPages>
    );
}