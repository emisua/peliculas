import Movie from './Movie'

const ListOfMovies = ({ movies }) => (
	<ul>
		{movies?.map((movie) => (
			<li key={movie.id}>
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
