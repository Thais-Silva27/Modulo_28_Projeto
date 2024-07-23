import { useState } from 'react'
import './App.css'
import Tabela from "./Components/Tabela"
import Formulario from './Components/Formulario'


function App() {
  const [soma, resultado] = "imc";
 

  return (
    <>    
      <h1>Tabela de IMC</h1>
      <p>
      O IMC, ou Índice de Massa Corporal, é um cálculo simples que permite avaliar 
      <br/>
      se a pessoa está dentro do peso que é considerado ideal para a sua altura.
      </p>
      <h4>Digite seus dados nos campos abaixo:</h4>
      <Formulario/>      
      <h4>Agora compare os resultados:</h4>
      <Tabela/>
           
    </>
  )
}

export default App

