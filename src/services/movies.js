export const searchMovies = async ({ search }) => {
	if (search === '') return null
	try {
		const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=4acb1a1e&s=${search}`)
		const movies = await response.json()
		console.log(movies)
		return movies?.Search?.map((movie) => {
			return {
				id: movie.imdbID,
				title: movie.Title,
				poster: movie.Poster,
				year: movie.Year
			}
		})
	} catch (error) {
		throw new Error('Error searching movies')
	}
}
