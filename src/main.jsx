import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { EzChatHint } from './EzChatHint'
import './ezchat.css'
import './index.css' // <-- ESTA LINHA TEM DE ESTAR AQUI

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <EzChatHint />
  </React.StrictMode>,
)