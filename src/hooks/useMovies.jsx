import { useState, useRef } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies({ search }) {
	const [movies, setMovies] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	// Guardo la busqueda anterior
	const previousSearch = useRef(search)

	const getMovies = async () => {
		// Si la busqueda anterior es igual a la nueva busqueda, no hago la llamada
		if (previousSearch.current === search) return
		try {
			setLoading(true)
			setError(null)
			// Seteo en el ref la nueva busqueda
			previousSearch.current = search
			const newMovies = await searchMovies({ search })
			setMovies(newMovies)
		} catch (err) {
			setError(err.message)
		} finally {
			setLoading(false)
		}
	}
	return { movies, getMovies, error, loading }
}
