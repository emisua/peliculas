import responseMovies from '../mock/movies.json'

export function useMovies() {
	const movies = responseMovies?.Search
	const mappedMovies = movies.map((movie) => {
		return {
			id: movie.imdbID,
			title: movie.Title,
			poster: movie.Poster,
			year: movie.Year
		}
	})
	return { mappedMovies }
}
