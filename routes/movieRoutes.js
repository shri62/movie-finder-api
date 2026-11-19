//Create an express.Router.
const express = require ('express');
const router = express.Router ();
//Import the controller functions from ../controllers/movieController.js.
const { searchMovies, getMovieDetails } = require ('../controllers/movieController');
//Define two routes and associate them with the controller functions:
//GET /search: This will handle movie searches.
//GET /movies/:id: This will fetch details for a specific movie.
//runs search movies and 2 run getMovieDetails
router.get('/search', searchMovies);
router.get ('/movies/:id',searchMovies);
//Export the router.
module.exports = router;