import { createContext, useContext, useState, useEffect } from 'react'
import useListaPeliculas from '../services/useListaPeliculas'

const PeliculasContext = createContext()

const usePeliculasContext = () => useContext(PeliculasContext)

const PeliculasProvider = ({ children }) => {
	const { listaPeliculas } = useListaPeliculas()

	const value = {
		listaPeliculas
	}
	return <PeliculasContext.Provider value={value}>{children}</PeliculasContext.Provider>
}

export { PeliculasProvider, usePeliculasContext }

export default PeliculasContext
