//Create an express.Router.
const express = require ('express');
const router = express.Router ();
//Import the controller functions from ../controllers/movieController.js.
const { serchMovies, getMovieDetails } = require ('../controllers/movieControllers');
//Define two routes and associate them with the controller functions:
//GET /search: This will handle movie searches.
//GET /movies/:id: This will fetch details for a specific movie.
//runs search movies and 2 run getMovieDetails
