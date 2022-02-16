import Form from 'react-bootstrap/Form';
import './func.css';
import { RequisitaCadastrarFuncionario, RequisitaCadastrarMedico, RequisitaEndereco } from "../../api/api";
import { useState } from 'react';

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
  const [salario, setSalario] = useState(0);
  const [senhaHash, setSenhaHash] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [CRM, setCrm] = useState(0);

  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

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

  const handleSubmit = async () => {
    let response = null;

    if (isChecked) {
      response = await RequisitaCadastrarMedico(nome, email, telefone, cep, logradouro, bairro, cidade, estado, dataContrato, salario, senhaHash, especialidade, CRM);
    } else {
      response = await RequisitaCadastrarFuncionario(nome, email, telefone, cep, logradouro, bairro, cidade, estado, dataContrato, salario, senhaHash);
    }

    if (response.erro) {
      alert(response.erro);
    } else {
      alert(response.mensagem);
    }
  }

  return (
    <div className="container">
      <div className="alert alert-info">
        Cadastro de Funcionário
      </div>

      <Form className="form-/cadastrarFuncionario">
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
              <Form.Control type="number" className="form-control" name="telefone" placeholder="Apenas números" maxLength={20} value={telefone} onChange={e => setTelefone(e.target.value)} required />
            </Form.Group>
          </div>
        </div>
        <Form.Label></Form.Label>
        <div className="row">
          <div className="col-lg-3">
            <Form.Group>
              <Form.Label>CEP (Digite para autocompletar endereço)</Form.Label>
              <Form.Control type="number" placeholder="Apenas números" maxLength={8} value={cep} onChange={e => buscarEndereco(e.target.value)} required />
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
        <div className="row">
          <div className="col-lg-4">
            <Form.Group>
              <Form.Label>Data de Início do Contrato de Trabalho</Form.Label>
              <input type="date" className="form-control" name="dataContrato" placeholder="dia/mês/ano" value={dataContrato} onChange={e => setDataContrato(e.target.value)} required />
            </Form.Group>
          </div>
          <div className="col-lg-4">
            <Form.Group>
              <Form.Label>Salário (R$)</Form.Label>
              <Form.Control type="number" className="form-control" name="salario" placeholder="Ex: 2200.00" maxLength={8} value={salario} onChange={e => setSalario(e.target.value)} required />
            </Form.Group>
          </div>
          <div className="col-lg-4">
            <Form.Group>
              <Form.Label>Senha</Form.Label>
              <Form.Control type="text" className="form-control" name="senhaHash" placeholder="Até 30 caracteres" maxLength={30} value={senhaHash} onChange={e => setSenhaHash(e.target.value)} required />
            </Form.Group>
          </div>
        </div>
        <Form.Label></Form.Label>
        <div className="row">
          <div className="col-lg-12">
            <Form.Group className="alert alert-warning" >
              <div className="topping">
                <input type="checkbox" id="topping" name="topping" value="CadastroFuncMedico" checked={isChecked} onChange={handleOnChange} />
                &nbsp;Funcionário médico
              </div>
            </Form.Group>
          </div>
        </div>
        <Form.Label></Form.Label>
        {isChecked && <div className="row">
          <div className="col-lg-8">
            <Form.Group className="alert alert-warning" >
              <Form.Label>Especialidade</Form.Label>
              <Form.Control type="text" className="form-control" name="especialidade" placeholder="Ex.: Pediatria" maxLength={20} value={especialidade} onChange={e => setEspecialidade(e.target.value)} required />
            </Form.Group>
          </div>
          <div className="col-lg-4">
            <Form.Group className="alert alert-warning" >
              <Form.Label>CRM</Form.Label>
              <Form.Control type="number" className="form-control" name="CRM" placeholder="000000" maxLength={6} value={CRM} onChange={e => setCrm(e.target.value)} required />
            </Form.Group>
          </div>
        </div>
        }
      </Form>
      <div className="form-group col-md-12 text-center">
        <button id="CadastraFuncionario" name="Cadastrar" className="btn btn-primary" onClick={handleSubmit}>Cadastrar</button>
      </div>
    </div>
  );
}