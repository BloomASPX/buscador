import React from 'react';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi'
import Card from './components/layout/Card';
import './App.css'
import api from './services/api';

function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({})

  async function handleSearch() {
   // "01001000/json/"
    
    if(input === ''){
      alert("Preencha algum CEP!");
    }
    try{
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput('');
    }catch{
      alert("Ops...Erro ao buscar");
      setInput('');
    }
  }

  return (
    <div className="container">
      <h1 className='title'>Buscador CEP</h1>

      <div className='containerInput'>
        <input
          type="text"
          placeholder="Digite um cep..."
          value={input}
          onChange={(e) => setInput(e.target.value) }
        />
        <button className='buttonSearch' onClick={handleSearch}> 
          < FiSearch size={25} color="#FFF"></FiSearch>
        </button>
      </div>
      {Object.keys(cep).length > 0 && (
          <Card info={cep}></Card>
      )}
      

    </div>
  );
}

export default App;
