import { useState, useEffect, useRef } from 'react'

function useSearch() {
	const [search, setSearch] = useState('')
	const [error, setError] = useState('')
	const isFirstInput = useRef(true)

	useEffect(() => {
		if (isFirstInput.current) {
			// Si al entrar a la app, el input es = a '', es la primera vez que entra a la app. Por lo tanto, no valida nada y espera a que se haya escrito al menos una vez en ese input.
			isFirstInput.current = search === ''
			return
		}
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

	return { search, setSearch, error, isFirstInput }
}

export default useSearch
