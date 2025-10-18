// IMPORTS
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Importación de Bootstrap para el sistema de grid y utilidades responsivas
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Importación de estilos personalizados
import "./index.css"  // Estilos base y variables de color
import "./App.css"    // Estilos globales con variables CSS y componentes personalizados

// CONFIGURACIÓN DE REACT
// Crear el root de React 18 para renderizar la aplicación
const root = createRoot(document.getElementById('root'));

// Renderizar la aplicación con React.StrictMode para detectar problemas potenciales
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
