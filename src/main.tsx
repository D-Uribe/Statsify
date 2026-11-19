import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Welcome } from './Welcome'
import Callback from './Callback'

const app = document.getElementById('root')

if(!app){
  throw new Error("message")
}

createRoot(app).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/callback" element={<Callback />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)