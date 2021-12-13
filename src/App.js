import { FiSearch } from 'react-icons/fi';
function App() {
  return (
    <div className="container">
      <h1 className="title">Localiza CEP</h1>

      <div className="containerInput">
        <input
          type="text"
          placeholder="Bora localizar um CEP..."
        />
        <button className="buttonSearch">Buscar
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
