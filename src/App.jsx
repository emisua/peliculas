import { useRef } from 'react'
import { Movies } from './components/ListOfMovies'
import { useMovies } from './hooks/useMovies'
import './app.css'
import useSearch from './hooks/useSearch'

function App() {
	const { mappedMovies: movies } = useMovies()
	const inputRef = useRef()
	const { search, setSearch, error } = useSearch()

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(search)
	}
	const handleChange = (e) => {
		const value = e.target.value
		if (value.startsWith(' ')) return
		setSearch(value)
	}

	return (
		<div className='page'>
			<header>
				<h1>Buscador de Películas</h1>
				<form onSubmit={handleSubmit}>
					<input
						name='query'
						ref={inputRef}
						type='text'
						placeholder='Harry Potter, Avengers, etc...'
						onChange={handleChange}
						value={search}
					/>
					{error && <p style={{ color: 'red' }}>{error}</p>}
					<button type='submit'>Buscar pelicula</button>
				</form>
			</header>
			<main>
				<Movies movies={movies} />
			</main>
		</div>
	)
}

export default App
