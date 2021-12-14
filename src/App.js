import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './styles.css';
import apiCep from './services/apiCep';

function App() {

  const[input, setInput] = useState('');
  const[cep, setCep] = useState({});

  async function handleSearch(){
    if(input === ''){
      alert("Por favor, digite um CEP")
      return;
    }

    try{
      const response = await apiCep.get(`${input}/json`);
      setCep(response.data)
      setInput("")
    }catch{
      alert("Ops! Houve um erro ao buscar")
      setInput("")
    }
  }
  return(
    <div className="container">
      <h1 className="title">Localiza CEP</h1>

      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite um CEP"
          value={input}
          onChange={(ev) => setInput(ev.target.value)}
        />
        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#FFF" />
        </button>
      </div>

      {Object.keys(cep).length > 0 && (
        <main className="main">
          <h2>CEP: {cep.cep} </h2>

          <span>Logradouro: {cep.logradouro} </span>
          <span>Complemento: {cep.complemento} </span>
          <span>Bairro: {cep.bairro} </span>
          <span>Cidade: {cep.localidade} - {cep.uf} </span>  
        </main>
      )}
    </div>
  );
}

export default App;
