// Goal: Add a movie into the list.
// Get user input of a movie and store it into an object.
// Store the object to an array.
// Change the UI, output all the movies stored in the array.

// Get access to the buttons
const addMovieButton = document.getElementById("add-movie-btn");
const serchButton = document.getElementById("search-btn");

const movies = [];

const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }

  const newMovie = {
    info: {
      title,
      [extraName]: extraValue,
    },
    id: Math.random(),
  };

  movies.push(newMovie);
  console.log(movies);
};

addMovieButton.addEventListener("click", addMovieHandler);
