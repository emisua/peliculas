import Movie from './Movie'

const ListOfMovies = ({ movies }) => (
	<ul className='movies'>
		{movies?.map((movie) => (
			<li key={movie.id} className='movie'>
				<Movie movie={movie} />
			</li>
		))}
	</ul>
)

const NoResultsMovies = () => <p>No hay películas para esta busqueda</p>

export function Movies({ movies }) {
	const hasMovies = movies?.length > 0
	return hasMovies ? <ListOfMovies movies={movies} /> : <NoResultsMovies />
}
