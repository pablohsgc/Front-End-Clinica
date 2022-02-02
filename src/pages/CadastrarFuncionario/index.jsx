import Form from 'react-bootstrap/Form';
import './func.css';

export function CadastrarFuncionario(){
    return (
        <div class="container">
        <div class="alert alert-info">
           Cadastro de Funcionário
        </div>

        <Form class="form-cadastroMedico" action="/cadastroMedico" method="POST"> 
          <div class="row">
              <div class="col-lg-8">
                <Form.Group>
                  <Form.Label>Nome Completo</Form.Label>
                  <Form.Control type="text" class="form-control" name="nome" placeholder="" required/>
                </Form.Group>
              </div>
              <div class="col-lg-4">
                <Form.Group>
                  <Form.Label>CPF</Form.Label>
                  <Form.Control type="text" class="form-control" name="cpf" placeholder="" required/>
                </Form.Group>
              </div>
          </div>
          <Form.Label></Form.Label>
          <div class="row">
              <div class="col-lg-8">
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="text" class="form-control" name="email" placeholder="" required/>
                </Form.Group>
              </div>
              <div class="col-lg-4">
                <Form.Group>
                  <Form.Label>Telefone</Form.Label>
                  <Form.Control type="text" class="form-control" name="telefone" placeholder="" required/>
                </Form.Group>
              </div>
          </div>
          <Form.Label></Form.Label>
          <div class="row">
              <div class="col-lg-6">
                <Form.Group>
                  <Form.Label>Logradouro</Form.Label>
                  <Form.Control type="text" class="form-control" name="logradouro" placeholder="Rua" required/>
                </Form.Group>
              </div>
              <div class="col-lg-2">
                <Form.Group>
                  <Form.Label>Número</Form.Label>
                  <Form.Control type="text" class="form-control" name="numero" placeholder="" required/>
                </Form.Group>
              </div>
              <div class="col-lg-4">
                <Form.Group>
                  <Form.Label>Complemento</Form.Label>
                  <Form.Control type="text" class="form-control" name="complemento" placeholder="Casa/Apto" required/>
                </Form.Group>
              </div>
          </div>
          <Form.Label></Form.Label>
          <div class="row">
              <div class="col-lg-4">
                <Form.Group>
                  <Form.Label>Bairro</Form.Label>
                  <Form.Control type="text" class="form-control" name="bairro" placeholder="" required/>
                </Form.Group>
              </div>
              <div class="col-lg-4">
                <Form.Group>
                  <Form.Label>Cidade</Form.Label>
                  <Form.Control type="text" class="form-control" name="cidade" placeholder="" required/>
                </Form.Group>
              </div>
              <div class="col-lg-2">
                <Form.Group>
                  <Form.Label>Estado</Form.Label>
                  <Form.Control type="text" class="form-control" name="estado" placeholder="" required/>
                </Form.Group>
              </div>
              <div class="col-lg-2">
                <Form.Group>
                  <Form.Label>CEP</Form.Label>
                  <Form.Control type="text" class="form-control" name="cep" placeholder="" required/>
                </Form.Group>
              </div>
          </div>
          <Form.Label></Form.Label>
          <div class="row">
              <div class="col-lg-4">
                <Form.Group>
                  <Form.Label>Data de Início do Contrato de Trabalho</Form.Label>
                  <Form.Control type="text" class="form-control" name="dataContrato" placeholder="" required/>
                </Form.Group>
              </div>
              <div class="col-lg-4">
                <Form.Group>
                  <Form.Label>Salário</Form.Label>
                  <Form.Control type="text" class="form-control" name="salario" placeholder="R$" required/>
                </Form.Group>
              </div>
              <div class="col-lg-4">
                <Form.Group>
                  <Form.Label>Senha</Form.Label>
                  <Form.Control type="text" class="form-control" name="senhaHash" placeholder="" required/>
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
                  <Form.Control type="text" class="form-control" name="especialidade" placeholder="" required />
                </Form.Group>
              </div>
              <div class="col-lg-4">
                <Form.Group class="alert alert-warning" >
                  <Form.Label>CRM</Form.Label>
                  <Form.Control type="text" class="form-control" name="CRM" placeholder="" required/>
                </Form.Group>
              </div>
          </div>

        </Form>
        <div class="form-group col-md-12 text-center">
            <button id="Cadastrar" name="Cadastrar" class="btn btn-primary" onClick={handleSubmit}>Cadastrar</button>
        </div>  
    </div>    
    );
}