import {useState } from 'react';
import './login.css'

import { Link } from 'react-router-dom';

import { auth } from '../../firebaseConnection'
import { signInWithEmailAndPassword } from 'firebase/auth';

import { useNavigate } from 'react-router-dom';

export default function Login() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const navigate = useNavigate()

  async function handleLogin(e) {
    e.preventDefault(); // Previne o comportamento padrão de atualizar a página

    if(email !== '' && senha !== '') {
      
      await signInWithEmailAndPassword(auth, email, senha)
      .then(() => {
        // navegar para /home
        navigate('/home', {replace: true})
      })
      .catch(() => {
        console.log("ERRO AO FAZER LOGIN")
      })
    }
  }

  return (
    <div className='home-container'>
      <h1>Lista de tarefas</h1>
      <span>Gerencie sua agenda de forma fácil.</span>

      <form className='form' onSubmit={handleLogin}>
        <input
          type='text'
          placeholder="Digite seu email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type='password'
          placeholder="********"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button type='submit'>Acessar</button>
      </form>

      <Link className='button-link' to={"/register"}>
        Não possui uma conta? Cadastre-se
      </Link>
    </div>
  );
}