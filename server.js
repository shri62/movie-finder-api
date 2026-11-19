require ('dotenv').config();

const express = require ('express');
const movieRoutes = require('./routes/moveRoutes');

const app = express()
const port = 3001;

app.use('/api, movieRoutes');
app.listen (port, () => {
    console.log(`server running on http://loclhost:$(port)`);
});