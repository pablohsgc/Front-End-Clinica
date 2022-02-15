import Form from 'react-bootstrap/Form';
import { RequisitaEnderecos } from "../../api/api";
import { useState } from 'react';

export function NovoEndereco() {

  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  const handleSubmit = async () => {
    let response = await RequisitaEnderecos(cep, logradouro, bairro, cidade, estado);
    if (response.erro) {
      alert(response.erro);
    } else {
      alert(response.mensagem);
    }
  }
  return (
    <div className="container">
      <div className="alert alert-info">
        Adicionar endereço
      </div>
      <p>
        Os endereços adicionados aqui, serão armazenados em nossa base de endereços e usados para melhor atendê-los.
      </p>

      <Form className="form-endereco" action="/" method="post" >
        <Form.Label></Form.Label>
        <div className="row">
          <div className="col-lg-3">
            <Form.Group>
              <Form.Label>CEP</Form.Label>
              <Form.Control type="number" placeholder="Apenas números" maxLength={8} value={cep} onChange={e => setCep(e.target.value)} required />
            </Form.Group>
          </div>
          <div className="col-lg-6">
            <Form.Group>
              <Form.Label>Cidade</Form.Label>
              <Form.Control type="cidade" placeholder="" maxLength={50} value={cidade} onChange={e => setCidade(e.target.value)} required />
            </Form.Group>
          </div>
          <div className="col-lg-3">
            <Form.Group>
              <Form.Label>Estado</Form.Label>
              <Form.Control type="estado" placeholder="Ex.: Minas Gerais" maxLength={50} value={estado} onChange={e => setEstado(e.target.value)} required />
            </Form.Group>
          </div>
          </div>
          <Form.Label></Form.Label>
          <div className="row">
          <div className="col-lg-6">
            <Form.Group>
              <Form.Label>Logradouro</Form.Label>
              <Form.Control type="logradouro" placeholder="" maxLength={50} value={logradouro} onChange={e => setLogradouro(e.target.value)} required />
            </Form.Group>
          </div>
          <div className="col-lg-6">
            <Form.Group>
              <Form.Label>Bairro</Form.Label>
              <Form.Control type="bairro" placeholder="" maxLength={50} value={bairro} onChange={e => setBairro(e.target.value)} required />
            </Form.Group>
          </div>
        </div>
        <Form.Label></Form.Label>
      </Form>
      <div className="form-group col-md-12 text-center">
        <button id="CadastraEndereco" name="cadastrar" className="btn btn-primary" onClick={handleSubmit}>Cadastrar</button>
      </div>
    </div>
  );
}