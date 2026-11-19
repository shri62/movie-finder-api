// This is where the main logic of your application will live.

// searchMovies function:

// This function will handle the GET /api/search route.
// It should get the search term from a query parameter named title (i.e., req.query.title).
// Validation: If the title query parameter is missing, it should respond with a 400 Bad Request status and a JSON error message like { "error": "Title query parameter is required" }.
// It should make a GET request to the OMDb API using axios. The base URL is http://www.omdbapi.com/. You will need to include two query parameters in your request to OMDb:
// s (for search term)
// apikey (your key from process.env.OMDB_API_KEY)
// If the request is successful, send the list of movies back to the client as JSON.
// Implement try...catch for error handling.
// getMovieDetails function:

// This function will handle the GET /api/movies/:id route.
// It should get the movie’s IMDb ID from the route parameters (req.params.id).
// It should make a GET request to the OMDb API. This time, you will need to include two query parameters:
// i (for IMDb ID)
// apikey
// If the request is successful, send the detailed movie data back to the client as JSON.
// Implement try...catch for error handling.
// Load axios, the tool that sends requests to other servers

const axios = require ('axios');

// The OMDb address, stored once so both functions can share it
const OMDB_URL = 'http://www.omdbapi.com/.'

const serchMovies = async (res,res) => {
    const { 'title' } = req.query;
}

  // If no title was given, stop and send a 400 error

  if (!title) { 
    return res.status(400).json ({ error:'Title query  parameter  is required'});
  }

  try {
    // Ask OMDb for movies matching the title.
    // s = search term, apikey = your key from .env
    const response = await axios.get(OMDB_URL, {
      params: {
        s: title,
        apikey: process.env.OMDB_API_KEY,
      },
    });

    // Send OMDb's data back to the client as JSON
    res.json(response.data);
  } catch (error) {
    // If anything fails (network, OMDb down), log it and send a 500 error
    console.error('Search error:', error.message);
    res.status(500).json({ error: 'Failed to fetch movies from OMDb' });
  }
};

// ---------- getMovieDetails: handles GET /api/movies/:id ----------
const getMovieDetails = async (req, res) => {
  // Read the IMDb ID from the URL, e.g. /api/movies/tt0372784
  const { id } = req.params;

  try {
    // Ask OMDb for one movie.
    // i = IMDb ID, apikey = your key from .env
    const response = await axios.get(OMDB_URL, {
      params: {
        i: id,
        apikey: process.env.OMDB_API_KEY,
      },
    });

    // Send the movie details back as JSON
    res.json(response.data);
  } catch (error) {
    console.error('Details error:', error.message);
    res.status(500).json({ error: 'Failed to fetch movie details from OMDb' });
  }
};

// Export both functions so movieRoutes.js can import them
module.exports = { searchMovies, getMovieDetails };