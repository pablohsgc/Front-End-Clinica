import { useContext } from "react";
import { AuthContext } from "../../Contexts/Auth";
export default function Navegacao(){
  const {authenticated, logout, user} = useContext(AuthContext);  
  
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-navbar bg-dark mb-1 menu-navegacao">
      <a className="navbar-brand" href="/">Clinica</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/agendamento">Agendamento</a>
          </li>

          {
            user &&
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Cadastro
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/cadastrarFuncionario">Cadastrar Funcionario</a>
                <a className="dropdown-item" href="/cadastrarPaciente">Cadastrar Paciente</a>
              </div>
            </li>
          }

          <li className="nav-item">
            <a className="nav-link" href="/galeria">Galeria</a>
          </li>
  
          {
            user &&
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Listagem
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/listarFuncionarios">Listar funcionarios</a>
              <a className="dropdown-item" href="/listarPacientes">Listar pacientes</a>
              <a className="dropdown-item" href="/listarEnderecos">Listar endereços</a>
              <a className="dropdown-item" href="/listarAgendamentos">Listar agendamentos</a>
              {
                user.medico &&
                <a className="dropdown-item" href="/listarConsultas">Consultas médico</a>
              }
            </div>
          </li>
          }

          <li className="nav-item">
            <a className="nav-link" href="/novoEndereco">Novo Endereço</a>
          </li>
        </ul>
        {
          authenticated ? <a href="/login">
          <button className="btn btn-outline-danger my-2 my-sm-0" onClick={logout}>Sair</button>
          </a> : <a href="/login">
          <button className="btn btn-outline-success my-2 my-sm-0">Logar</button>
          </a>
        }  
      </div>
  </nav>
    );
}
