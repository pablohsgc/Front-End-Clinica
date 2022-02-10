import Form from 'react-bootstrap/Form';
import './func.css';
import { RequisitaCadastrarFuncionario } from "../../api/api";
import { useState, useEffect } from 'react';

export function CadastrarFuncionario() {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [dataContrato, setDataContrato] = useState("");
  const [salario, setSalario] = useState("");
  const [senhaHash, setSenhaHash] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [CRM, setCrm] = useState("");
  

  const handleSubmit = async () => {
    let response = await RequisitaCadastrarFuncionario(nome,email,telefone,cep,logradouro,bairro,cidade,estado,dataContrato,salario,senhaHash, especialidade, CRM)
    console.log("Response handlesubmit: ",response)
    alert(response)
  }

  return (
    <div class="container">
      <div class="alert alert-info">
        Cadastro de Funcionário
      </div>

      <Form class="form-/cadastrarFuncionario" action="/" method="post">
        <div class="row">
          <div class="col-lg-12">
            <Form.Group>
              <Form.Label>Nome Completo</Form.Label>
              <Form.Control type="text" class="form-control" name="nome" placeholder="" value={nome} onChange={e => setNome(e.target.value)} required/>
            </Form.Group>
          </div>
        </div>
        <Form.Label></Form.Label>
        <div class="row">
          <div class="col-lg-8">
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" class="form-control" name="email" placeholder="" value={email} onChange={e => setEmail(e.target.value)} required/>
            </Form.Group>
          </div>
          <div class="col-lg-4">
            <Form.Group>
              <Form.Label>Telefone</Form.Label>
              <Form.Control type="text" class="form-control" name="telefone" placeholder="Apenas números" value={telefone} onChange={e => setTelefone(e.target.value)} required/>
            </Form.Group>
          </div>
        </div>
        <Form.Label></Form.Label>
        <div class="row">
        <div class="col-lg-6">
                <Form.Group>
                  <Form.Label>Logradouro</Form.Label>
                  <Form.Control type="logradouro" placeholder="" value={logradouro} onChange={e => setLogradouro(e.target.value)} required/>
                </Form.Group>
              </div>
              <div class="col-lg-6">
                <Form.Group>
                  <Form.Label>Bairro</Form.Label>
                  <Form.Control type="bairro" placeholder="" value={bairro} onChange={e => setBairro(e.target.value)} required/>
                </Form.Group>
              </div>
          </div>
          <Form.Label></Form.Label>
          <div class="row">
              <div class="col-lg-6">
                <Form.Group>
                  <Form.Label>Cidade</Form.Label>
                  <Form.Control type="cidade" placeholder="" value={cidade} onChange={e => setCidade(e.target.value)} required/>
                </Form.Group>
              </div>
              <div class="col-lg-3">
                <Form.Group>
                  <Form.Label>Estado</Form.Label>
                  <Form.Control type="estado" placeholder="Ex.: Minas Gerais" value={estado} onChange={e => setEstado(e.target.value)} required/>
                </Form.Group>
              </div>
              <div class="col-lg-3">
                <Form.Group>
                  <Form.Label>CEP</Form.Label>
                  <Form.Control type="cep" placeholder="Apenas números" value={cep} onChange={e => setCep(e.target.value)} required/>
                </Form.Group>
              </div>
          </div>
        <Form.Label></Form.Label>
        <div class="row">
          <div class="col-lg-4">
            <Form.Group>
              <Form.Label>Data de Início do Contrato de Trabalho</Form.Label>
                <input type="text" class="form-control" name="dataContrato" placeholder="dia/mês/ano" value={dataContrato} onChange={e => setDataContrato(e.target.value)} required/>
            </Form.Group>
          </div>
          <div class="col-lg-4">
            <Form.Group>
              <Form.Label>Salário (R$)</Form.Label>
              <Form.Control type="text" class="form-control" name="salario" placeholder="Ex: 2200.00" value={salario} onChange={e => setSalario(e.target.value)} required/>
            </Form.Group>
          </div>
          <div class="col-lg-4">
            <Form.Group>
              <Form.Label>Senha</Form.Label>
              <Form.Control type="text" class="form-control" name="senhaHash" placeholder="Até 30 caracteres" value={senhaHash} onChange={e => setSenhaHash(e.target.value)} required/>
            </Form.Group>
          </div>
        </div>
        <Form.Label></Form.Label>
        <div class="row">
          <div class="col-lg-12">
            <Form.Group class="alert alert-warning" >
              <Form.Label>Preencha os campos abaixo somente se for médico</Form.Label>
            </Form.Group>
          </div>
        </div>
        <Form.Label></Form.Label>
        <div class="row">
          <div class="col-lg-8">
            <Form.Group class="alert alert-warning" >
              <Form.Label>Especialidade</Form.Label>
              <Form.Control type="text" class="form-control" name="especialidade" placeholder="Ex.: Pediatria" value={especialidade} onChange={e => setEspecialidade(e.target.value)} required/>
            </Form.Group>
          </div>
          <div class="col-lg-4">
            <Form.Group class="alert alert-warning" >
              <Form.Label>CRM</Form.Label>
              <Form.Control type="text" class="form-control" name="CRM" placeholder="000000" value={CRM} onChange={e => setCrm(e.target.value)} required/>
            </Form.Group>
          </div>
        </div>

      </Form>
      <div class="form-group col-md-12 text-center">
        <button id="CadastraFuncionario" name="Cadastrar" class="btn btn-primary" onClick={handleSubmit}>Cadastrar</button>
      </div>
    </div>
  );
}