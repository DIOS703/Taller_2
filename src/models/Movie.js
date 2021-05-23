export default class Movie {
    constructor(movie = {}) {
    this.id = movie.id || 0;
    this.original_language = movie.original_language || 0;
    this.original_title = movie.original_title || 0;
    this.adult = movie.adult || 0;
    this.backdrop_path = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` || 0;
    this.poster_path = `https://image.tmdb.org/t/p/w500/${movie.poster_path}` || 0;
    this.genres = movie.genres || 0;
    this.genero1 = this.genres[0].name;
    this.overview = movie.overview || 0;
    this.popularity = movie.popularity || 0;
    this.release_date = movie.release_date || 0;
    this.title = movie.title || 0;
    this.video = movie.video || 0;
    this.vote_average = movie.vote_average || 0;
    this.vote_count = movie.vote_count || 0;
    }
    }