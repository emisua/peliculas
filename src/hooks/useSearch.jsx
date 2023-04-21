import { useState, useEffect } from 'react'

function useSearch() {
	const [search, setSearch] = useState('')
	const [error, setError] = useState('')

	useEffect(() => {
		if (search === '') {
			setError('Escribe el nombre de la película para buscar')
			return
		}
		if (search.length < 3) {
			setError('La película debe tener más de 2 caracteres')
			return
		}
		setError(null)
	}, [search])

	return { search, setSearch, error }
}

export default useSearch
