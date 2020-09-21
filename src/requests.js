

export default {
    fetchTrending:`/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10749`,
    fetchSciFi: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=878`,
    fetchWestern: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=37`,
    fetchAnimation: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=16`,
    fetchTV: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10770`, 
}