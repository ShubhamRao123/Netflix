const API_KEY = "ba3b74415378667b3f0f19ec8f6bb88f"

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    // fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchNetflixOriginals: `discover/movie?api_key=${API_KEY}&with_generes=27`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `discover/movie?api_key=${API_KEY}&with_generes=28`,
    fetchComedyMovies: `discover/movie?api_key=${API_KEY}&with_generes=35`,
    fetchHorrorMovies: `/discover/tv?api_key=${API_KEY}&with_network=213`,
    // fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&with_generes=27`,
    fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&with_generes=10749`,
    fetchDocumentariesMovies: `discover/movie?api_key=${API_KEY}&with_generes=99`,
}

export default requests;