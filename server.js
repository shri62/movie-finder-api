require ('dotenv').config();

const express = require ('express');
const movieRoutes = require ('./routes/movieRoutes');

const app = express()
const port = 3001;

app.use('/api', movieRoutes);
app.listen (port, () => {
    console.log(`server running on http://localhost:${port}`);
});