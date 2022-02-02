import Form from 'react-bootstrap/Form';

export function CadastrarPaciente(){
    return (
        <div class="container">
        <div class="alert alert-info">
           Cadastro de Paciente
        </div>

        <Form class="form-cadastroOutro" action="/cadastroOutro" method="POST">
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
        </Form>
        <div class="form-group col-md-12 text-center">
            <button id="Cadastrar" name="Cadastrar" class="btn btn-primary" onClick={handleSubmit}>Cadastrar</button>
        </div>  
    </div>    
    );
}