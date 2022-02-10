import Form from 'react-bootstrap/Form';
import { RequisitaCadastrarPaciente } from "../../api/api";
import { useState, useEffect } from 'react';

export function CadastrarPaciente() {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [cep, setCep] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [tipoSanguineo, setTipoSanguineo] = useState("");

  const handleSubmit = async () => {
    let response = await RequisitaCadastrarPaciente(nome, email, telefone, logradouro, bairro, cidade, estado, cep, peso, altura, tipoSanguineo)
    console.log("Response handlesubmit: ",response)
    alert(response)
  }


  return (
    <div class="container">
      <div class="alert alert-info">
        Cadastro de Paciente
      </div>

      <Form class="form-cadastrarPaciente" action="/" method="post">
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
              <Form.Control type="text" class="form-control" name="telefone" placeholder="" value={telefone} onChange={e => setTelefone(e.target.value)} required/>
            </Form.Group>
          </div>
        </div>
        <Form.Label></Form.Label>
          <div class="row">
              <div class="col-lg-6">
                <Form.Group>
                  <Form.Label>Peso</Form.Label>
                  <Form.Control type="peso" placeholder="" value={peso} onChange={e => setPeso(e.target.value)} required/>
                </Form.Group>
              </div>
              <div class="col-lg-3">
                <Form.Group>
                  <Form.Label>Altura</Form.Label>
                  <Form.Control type="altura" placeholder="" value={altura} onChange={e => setAltura(e.target.value)} required/>
                </Form.Group>
              </div>
              <div class="col-lg-3">
                <Form.Group>
                  <Form.Label>Tipo Sanguíneo</Form.Label>
                  <Form.Control type="tipoSanguineo" placeholder="" value={tipoSanguineo} onChange={e => setTipoSanguineo(e.target.value)} required/>
                </Form.Group>
              </div>
          </div>
        <Form.Label></Form.Label>
        <div class="row">
        <div class="col-lg-6">
                <Form.Group>
                  <Form.Label>Logradouro</Form.Label>
                  <Form.Control type="logradouro" placeholder="Rua" value={logradouro} onChange={e => setLogradouro(e.target.value)} required/>
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
                  <Form.Control type="estado" placeholder="" value={estado} onChange={e => setEstado(e.target.value)} required/>
                </Form.Group>
              </div>
              <div class="col-lg-3">
                <Form.Group>
                  <Form.Label>CEP</Form.Label>
                  <Form.Control type="cep" placeholder="" value={cep} onChange={e => setCep(e.target.value)} required/>
                </Form.Group>
              </div>
          </div>
          <Form.Label></Form.Label>
      </Form>
      <div class="form-group col-md-12 text-center">
        <button id="CadastraPaciente" name="Cadastrar" class="btn btn-primary" onClick={handleSubmit}>Cadastrar</button>
      </div>
    </div>
  );
}