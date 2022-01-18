import React,{ createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RequisitaLogin } from "../api/api";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
       const recoveredUser = localStorage.getItem('usuario-tp2');

       if(recoveredUser){
            setUser(JSON.parse(recoveredUser))
       }

       setLoading(false); 
    }, [])

    const login = async (email,senha) => {
        const response = await RequisitaLogin(email,senha);
        
        console.log(response)

        if(response.auth){
            let loggedUser = {
                nomeUsuario:response.nome,
                token:response.token,
                medico:response.medico
            }

            localStorage.setItem('usuario-tp2',JSON.stringify(loggedUser))

            setUser(loggedUser);
            navigate("/");

            return "Usuario: " + response.nome + ", logado com sucesso na aplicação!";
        }

        return response.erro;
    }

    const logout = () => {
        localStorage.removeItem('usuario-tp2');

        setUser(null);

        navigate("/login");
    }
    
    return(
        <AuthContext.Provider value={{authenticated: !!user, user, loading, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}