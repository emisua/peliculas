import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { PeliculasProvider } from './context/PeliculasProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
	<PeliculasProvider>
		<App />
	</PeliculasProvider>
)
