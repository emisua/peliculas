const Movie = ({ movie }) => {
	return (
		<>
			<h3>{movie.title}</h3>
			<p>{movie.year}</p>
			<img src={movie.poster} alt={movie.title} />
		</>
	)
}
export default Movie
