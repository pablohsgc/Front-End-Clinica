import React from 'react';
import Form from 'react-bootstrap/Form';
import {
  RequisitaEspecialidades,
  RequisitaEspecialistas,
  RequisitaHorariosDisponiveis,
  RequisitaAgendamento
} from "../../api/api";
import { useState, useEffect } from 'react';
import './style.css';

export function Agendamento() {

  const [data, setData] = useState("2022-02-02");
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [especialidade, setEspecialidade] = useState(0);
  const [especialidades, setEspecialidades] = useState("");
  const [horarios, setHorarios] = useState([<option key="horario_default" value="0">Preencha as demais opções!</option>]);
  const [horario, setHorario] = useState(0);
  const [medicos, setMedicos] = useState([<option key="medico_default" value="0">Selecione uma especialidade médica!</option>]);
  const [codigoMedico, setcodigoMedico] = useState(0);

  useEffect(() => {
    async function buscarEspecialidades() {
      const response = await RequisitaEspecialidades();
      if (response.erro) {
        alert(response.erro);
      } else {
        const lista = [];

        lista.push(<option key="especialidade_default" value="0">Selecione uma especialidade médica!</option>);

        for (let i = 0; i < response.length; i++)
          lista.push(<option key={"especialidade_" + i} value={response[i].especialidade}>{response[i].especialidade}</option>)

        setEspecialidades(lista);
      }
    }
    buscarEspecialidades();
  }, []);

  const adicionaHorarios = async (codigoMedicoEscolhido, dataEscolhida) => {
    const response = await RequisitaHorariosDisponiveis(codigoMedicoEscolhido, dataEscolhida);
    if (response.erro) {
      alert(response.erro);
    } else {
      const lista = [];

      lista.push(<option key="horario_default" value="0">Selecione um horario!</option>);

      for (let i = 0; i < response.length; i++)
        lista.push(<option key={"horario_" + i} value={response[i].hora}>{response[i].hora}</option>)

      setHorarios(lista);
    }
  };

  const adicionaMedicos = async (especialidade) => {
    const response = await RequisitaEspecialistas(especialidade);
    if (response.erro) {
      alert(response.erro);
    } else {
      const lista = [];

      lista.push(<option key="medico_default" value="0">Selecione um médico!</option>);

      for (let i = 0; i < response.length; i++)
        lista.push(<option key={"medico_" + i} value={response[i].codigo}>{response[i].nome}</option>)

      setMedicos(lista);
    }
  };

  const escolheMedico = async (codigoMedicoEscolhido) => {
    setcodigoMedico(codigoMedicoEscolhido);
    if (data !== "") adicionaHorarios(codigoMedicoEscolhido, data);
  };

  const escolheEspecialidade = async (especialidade) => {
    setEspecialidade(especialidade);
    adicionaMedicos(especialidade);
  };

  const handleSubmit = async () => {
    //let response = await RequisitaAgendamentos(data, nome, cpf, email, telefone, especialidade, codigoMedico, logradouro, numero, complemento, bairro, cidade, estado, cep)
    let response = await RequisitaAgendamento(data, horario, nome, email, telefone, especialidade, codigoMedico);

    if (response.erro) {
      alert(response.erro);
    } else {
      alert(response.mensagem);
    }
  }

  return (
    <div className="container">
      <div className="alert alert-info">
        Agendamento de Consulta
      </div>

      <Form className="form-agendamento">
        <div className="row">
          <div className="col-lg-8">
            <Form.Group>
              <Form.Label>Nome Completo</Form.Label>
              <Form.Control type="nome" placeholder="" maxLength={50} value={nome} onChange={e => setNome(e.target.value)} required />
            </Form.Group>
          </div>
          <div className="col-lg-4">
            <Form.Group>
              <Form.Label>CPF</Form.Label>
              <Form.Control type="number" placeholder="Apenas números" value={cpf} onChange={e => setCpf(e.target.value)} required />
            </Form.Group>
          </div>
        </div>
        <Form.Label></Form.Label>
        <div className="row">
          <div className="col-lg-8">
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="" maxLength={50} value={email} onChange={e => setEmail(e.target.value)} required />
            </Form.Group>
          </div>
          <div className="col-lg-4">
            <Form.Group>
              <Form.Label>Telefone</Form.Label>
              <Form.Control type="number" placeholder="Apenas números" maxLength={20} value={telefone} onChange={e => setTelefone(e.target.value)} required />
            </Form.Group>
          </div>
        </div>
        <Form.Label></Form.Label>
        <div className="row">
          <div className="col-lg-6">
            <Form.Group>
              <Form.Label>Especialidade Médica</Form.Label>
              <select className="form-control" name="especialidade" onChange={(e) => escolheEspecialidade(e.target.value)} required>
                {
                  especialidades
                }
              </select>
            </Form.Group>
          </div>
          <div className="col-lg-6">
            <Form.Group>
              <Form.Label>Nome do Médico</Form.Label>
              <select className="form-control" name="codigoMedico" onChange={(e) => escolheMedico(e.target.value)} required>
                {
                  medicos
                }
              </select>
            </Form.Group>
          </div>
        </div>
        <Form.Label></Form.Label>
        <div className="row">
          <div className="col-lg-4">
            <Form.Group>
              <Form.Label>Data para a Consulta: </Form.Label>
              <Form.Control id="date" name='calendario' type="date" value={data} onChange={e => setData(e.target.value)} required />
            </Form.Group>
          </div>
          <div className="col-lg-4">
            <Form.Group>
              <Form.Label>Horario: </Form.Label>
              <select className="form-control" name="horario" onChange={(e) => setHorario(e.target.value)} required>
                {
                  horarios
                }
              </select>
            </Form.Group>
          </div>
          <div className='row'>
            <div className="col align-self-end botao-agenda">
              <button id="CadastraConsulta" name="Agendar" className="btn btn-primary" onClick={handleSubmit}>Agendar</button>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
}