import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './styles.css';

function App() {

  const[input, setInput] = useState('');

  function handleSearch(){
    alert("Valor do input "+ input)
  }
  return(
    <div className="container">
      <h1 className="title">Localizador CEP</h1>

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

      <main className="main">
        <h2>CEP: 88150-000</h2>

        <span>Rua: Servidão Teste</span>
        <span>Complemento: Casa 01 </span>
        <span>Bairro: Centro</span>
        <span>Cidade: Águas Mornas</span>
        
      </main>
    </div>
  );
}

export default App;
