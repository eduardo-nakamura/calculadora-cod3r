import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Var.css'
import './index.css'
import Calculator from './main/Calculator.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <h1>Calculator</h1>
    <Calculator />
    </>
  </StrictMode>,
)
