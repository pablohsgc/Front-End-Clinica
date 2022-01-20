import './style.css';
import {useState,useContext} from 'react';
import { AuthContext } from '../../Contexts/Auth';
import Form from 'react-bootstrap/Form';

export function FormLogin(){
  const {login} = useContext(AuthContext);
  
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = async () => {
    let response = await login(email,senha)
    console.log("Response handlesubmit: ",response)
    alert(response)
  }
  return (
    <div class="container">
    <div class="row">
    <div class="col-lg-4"></div>
    </div>
      <Form class="form-login container" method="post" name="form-login">
        <div class="row">
          <div class="col-lg-4"></div>
            <div class="col-lg-4">
              <Form.Group className="mb-3" class="alert alert-info" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="name@example.com" class="input-login" name="username" value={email} onChange={e => setEmail(e.target.value)} required />
              </Form.Group>
    
              <Form.Group className="mb-3" class="alert alert-info" controlId="formBasicSenha">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="" class="input-login" className="ipt-password" name="password" value={senha} onChange={e => setSenha(e.target.value)} required />
              </Form.Group>
            </div>
            <div class="col-lg-4"></div>
        </div>
      </Form>
      <div class="form-group col-md-12 text-center">
        <button class="btn btn-primary" onClick={handleSubmit}>Logar</button>
      </div>  
    </div>    
  );
};
