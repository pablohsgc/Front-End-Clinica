import './style.css';
import {useState,useContext} from 'react';
import { AuthContext } from '../../Contexts/Auth';

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
    <main className='divLogin'>
    <div className='formLogin'>
      <label>
        Usuario 
        <input type="text" name="username" value={email} onChange={e => setEmail(e.target.value)} required />
      </label>
      <label>
        Senha
        <input type="password" className="ipt-password" name="password" value={senha} onChange={e => setSenha(e.target.value)} required />
      </label>
      <button onClick={handleSubmit}>Logar</button>
    </div>
    </main>
  );
}