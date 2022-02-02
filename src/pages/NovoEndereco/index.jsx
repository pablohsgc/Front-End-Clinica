import Form from 'react-bootstrap/Form';
import { RequisitaEnderecos } from "../../api/api";
import { useState, useEffect } from 'react';

export function NovoEndereco(){

  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [cep, setCep] = useState("");

  const handleSubmit = async () => {
    let response = await RequisitaEnderecos(logradouro, numero, complemento, bairro, cidade, estado, cep)
    console.log("Response handlesubmit: ",response)
    alert(response)
  }
    return (
        <div class="container">
        <div class="alert alert-info">
          Adicionar endereço
        </div>
        <p>
        Os endereços adicionados aqui, serão armazenados em nossa base de endereços e usados para melhor atendê-los.
        </p>

        <Form class="form-endereco" method="post" >
        <div class="row">
              <div class="col-lg-6">
                <Form.Group>
                  <Form.Label>Logradouro</Form.Label>
                  <Form.Control type="logradouro" placeholder="Rua" value={logradouro} onChange={e => setLogradouro(e.target.value)} required/>
                </Form.Group>
              </div>
              <div class="col-lg-2">
                <Form.Group>
                  <Form.Label>Número</Form.Label>
                  <Form.Control type="numero" placeholder="" value={numero} onChange={e => setNumero(e.target.value)} required/>
                </Form.Group>
              </div>
              <div class="col-lg-4">
                <Form.Group>
                  <Form.Label>Complemento</Form.Label>
                  <Form.Control type="complemento" placeholder="Casa/Apto" value={complemento} onChange={e => setComplemento(e.target.value)} required/>
                </Form.Group>
              </div>
          </div>
          <Form.Label></Form.Label>
          <div class="row">
              <div class="col-lg-4">
                <Form.Group>
                  <Form.Label>Bairro</Form.Label>
                  <Form.Control type="bairro" placeholder="" value={bairro} onChange={e => setBairro(e.target.value)} required/>
                </Form.Group>
              </div>
              <div class="col-lg-4">
                <Form.Group>
                  <Form.Label>Cidade</Form.Label>
                  <Form.Control type="cidade" placeholder="" value={cidade} onChange={e => setCidade(e.target.value)} required/>
                </Form.Group>
              </div>
              <div class="col-lg-2">
                <Form.Group>
                  <Form.Label>Estado</Form.Label>
                  <Form.Control type="estado" placeholder="" value={estado} onChange={e => setEstado(e.target.value)} required/>
                </Form.Group>
              </div>
              <div class="col-lg-2">
                <Form.Group>
                  <Form.Label>CEP</Form.Label>
                  <Form.Control type="cep" placeholder="" value={cep} onChange={e => setCep(e.target.value)} required/>
                </Form.Group>
              </div>
          </div>
          <Form.Label></Form.Label>
        </Form>
        <div class="form-group col-md-12 text-center">
          <button id="CadastraConsulta" name="Agendar" class="btn btn-primary" onClick={handleSubmit}>Cadastrar</button>
        </div>  
    </div>    
    );
}