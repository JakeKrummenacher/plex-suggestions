import React, { useState } from "react";
import { Autocomplete, Button, TextField } from "@mui/material";
import axios from "axios";

export default function SuggestionBox() {
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const fetchSuggestions = async (value) => {
    if (value.length > 2) {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${value}&apikey=20c6e7e5`
      );
      return response.data.Search;
    } else {
      return [];
    }
  };

  const onFormSubmit = (event) => {
    event.preventDefault()

    if (selectedMovie) {
        axios.post('http://localhost:5000/api/movies', {
            imdbID: selectedMovie.imdbID,
            title: selectedMovie.Title,
            year: selectedMovie.Year
        }).then (response => {
            //response logic here
        }).catch(error => {
            //error logic here
        })
    }
    console.log(selectedMovie)
  }

  return (
    <form onSubmit={onFormSubmit}>
        <Autocomplete
          value={selectedMovie}
          onChange={(event, newValue) => {
            setSelectedMovie(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
            fetchSuggestions(newInputValue).then((results) => {
              setOptions(results || []);
            });
          }}
          options={options}
          getOptionLabel={(option) => option.Title}
          style={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Movie" variant="outlined" />}
        />
        <Button type="submit" variant="contained">Submit</Button>
    </form>
  );
}
