import axios from 'axios'
import { useState } from 'react'
import './style.css'

const Card = () => {
  const [cep, setCep] = useState("")
  const [dados, setDados] = useState({
    logradouro: "",
    bairro: "",
    regiao: "",
    estado: ""
  })

  const buscarCEP = (event) => {
    event.preventDefault() // Previne o recarregamento da página
    
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => {
        // A ViaCEP retorna { "erro": true } se o CEP não existir
        if (res.data.erro) {
          setDados({
            logradouro: "CEP não encontrado",
            bairro: "CEP não encontrado",
            regiao: "CEP não encontrado",
            estado: "CEP não encontrado"
          })
        } else {
          setDados({
            logradouro: res.data.logradouro,
            bairro: res.data.bairro,
            regiao: `${res.data.localidade} - ${res.data.uf}`,
            estado: res.data.uf
          })
        }
      })
      .catch((err) => {
        setDados({
          logradouro: "Erro na busca",
          bairro: "Erro na busca",
          regiao: "Erro na busca",
          estado: "Erro na busca"
        })
      })
  }

  return (
    <div className="consultacep-container">
      <h1>🔍 Consulta de CEP</h1>
      <form onSubmit={buscarCEP}>
        <input 
          type="text" 
          id="input_cep" 
          placeholder="Digite o CEP (ex: 01001000)" 
          maxLength="9" 
          required 
          value={cep} 
          onChange={(e) => setCep(e.target.value)} 
        />
        <button type="submit" id="btn-cep">Buscar</button>
      </form>
      <div className="resultado" id="resultado">
        <p><strong>Logradouro:</strong> <span>{dados.logradouro}</span></p>
        <p><strong>Bairro:</strong> <span>{dados.bairro}</span></p>
        <p><strong>Região:</strong> <span>{dados.regiao}</span></p>
        <p><strong>Estado:</strong> <span>{dados.estado}</span></p>
      </div>
    </div>
  )
}

export default Card