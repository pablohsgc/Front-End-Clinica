import { BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Navegacao from './components/Navegacao';
import Home from "./pages/Home";
import React, {useContext} from 'react';
import Login from './pages/Login';
import { AuthContext, AuthProvider } from './Contexts/Auth';
import { Agendamento } from './pages/Agendamento';
import { Galeria } from './pages/Galeria';
import { NovoEndereco } from './pages/NovoEndereco';
import { CadastrarFuncionario } from './pages/CadastrarFuncionario';
import { CadastrarPaciente } from './pages/CadastrarPaciente';
import { ListarAgendamentos } from './pages/ListarAgendamentos';
import { ListarConsultas } from './pages/ListarConsultas';
import { ListarEnderecos } from './pages/ListarEnderecos';
import { ListarPacientes } from './pages/ListarPacientes';
import { ListarFuncionarios } from './pages/ListarFuncionarios';
import { Rodape } from "./components/Rodape";

function App() {
  const Private = ({children}) => {
    const { authenticated,loading } = useContext(AuthContext);

    if(loading){
      return  <div className='loading'>Carregando...</div>;
    }

    if(!authenticated){
      return <Navigate to="/login" />
    }

    return children;
  }

  return (
    <>
    <BrowserRouter>
      <AuthProvider>  
        <Navegacao></Navegacao>
        <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path="/agendamento" element={<Agendamento/>}/>
          <Route path="/galeria" element={<Galeria/>}/>
          <Route path="/novoEndereco" element={<NovoEndereco/>}/>
          <Route path="/cadastrarFuncionario" element={<Private><CadastrarFuncionario/></Private>}/>
          <Route path="/cadastrarPaciente" element={<Private><CadastrarPaciente/></Private>}/>
          <Route path="/listarAgendamentos" element={<Private><ListarAgendamentos/></Private>}/>
          <Route path="/listarConsultas" element={<Private><ListarConsultas/></Private>}/>
          <Route path="/listarEnderecos" element={<Private><ListarEnderecos/></Private>}/>
          <Route path="/listarFuncionarios" element={<Private><ListarFuncionarios/></Private>}/>
          <Route path="/listarPacientes" element={<Private><ListarPacientes/></Private>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
        <Rodape/>
      </AuthProvider>
    </BrowserRouter>
    </>
  );
}

export default App;