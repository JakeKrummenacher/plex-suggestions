const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/api/movies', async (req, res) => {
    const { imdbID, title, year } = req.body;
  
    // Check Plex library for the movie.
  
    // Add movie to Radarr if it doesn't exist in Plex.
    
    res.sendStatus(200);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
