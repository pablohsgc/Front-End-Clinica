import Form from 'react-bootstrap/Form';
import { RequisitaCadastrarPaciente, RequisitaEndereco } from "../../api/api";
import { useState } from 'react';

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
    if (response.erro) {
      alert(response.erro);
    } else {
      alert(response.mensagem);
    }
  }

  const buscarEndereco = async (cep) => {
    let response = '';
    let tam = cep + "";
    setCep(cep);

    if (tam.length === 8) {
      response = await RequisitaEndereco(cep);
      if (response.erro) {
        alert(response.erro);
      } else {
        setLogradouro(response.logradouro);
        setBairro(response.bairro);
        setCidade(response.cidade);
        setEstado(response.estado);
      }
    }
  }

  return (
    <div className="container">
      <div className="alert alert-info">
        Cadastro de Paciente
      </div>

      <Form className="form-cadastrarPaciente" action="/" method="post">
        <div className="row">
          <div className="col-lg-12">
            <Form.Group>
              <Form.Label>Nome Completo</Form.Label>
              <Form.Control type="text" className="form-control" name="nome" placeholder="" maxLength={50} value={nome} onChange={e => setNome(e.target.value)} required />
            </Form.Group>
          </div>
        </div>
        <Form.Label></Form.Label>
        <div className="row">
          <div className="col-lg-8">
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" className="form-control" name="email" placeholder="" maxLength={50} value={email} onChange={e => setEmail(e.target.value)} required />
            </Form.Group>
          </div>
          <div className="col-lg-4">
            <Form.Group>
              <Form.Label>Telefone</Form.Label>
              <Form.Control type="text" className="form-control" name="telefone" placeholder="Apenas números" maxLength={20} value={telefone} onChange={e => setTelefone(e.target.value)} required />
            </Form.Group>
          </div>
        </div>
        <Form.Label></Form.Label>
        <div className="row">
          <div className="col-lg-6">
            <Form.Group>
              <Form.Label>Peso (Kg)</Form.Label>
              <Form.Control type="peso" placeholder="00.0" maxLength={4} value={peso} onChange={e => setPeso(e.target.value)} required />
            </Form.Group>
          </div>
          <div className="col-lg-3">
            <Form.Group>
              <Form.Label>Altura (metros)</Form.Label>
              <Form.Control type="altura" placeholder="0.00" step='0.01' maxLength={5} value={altura} onChange={e => setAltura(e.target.value)} required />
            </Form.Group>
          </div>
          <div className="col-lg-3">
            <Form.Group>
              <Form.Label>Tipo Sanguíneo</Form.Label>
              <Form.Control type="tipoSanguineo" placeholder="Ex.: A+" maxLength={10} value={tipoSanguineo} onChange={e => setTipoSanguineo(e.target.value)} required />
            </Form.Group>
          </div>
        </div>
        <Form.Label></Form.Label>
        <div className="row">
          <div className="col-lg-3">
            <Form.Group>
              <Form.Label>CEP (Digite para autocompletar endereço)</Form.Label>
              <Form.Control type="cep" placeholder="Apenas números" maxLength={8} value={cep} onChange={e => buscarEndereco(e.target.value)} required />
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
        <button id="CadastraPaciente" name="Cadastrar" className="btn btn-primary" onClick={handleSubmit}>Cadastrar</button>
      </div>
    </div>
  );
}