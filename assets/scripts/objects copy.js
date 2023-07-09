// Goal: Add a movie into the list.
// Get user input of a movie and store it into an object.
// Store the object to an array.
// Change the UI, output all the movies stored in the array.

// Get access to the buttons
const addMovieButton = document.getElementById("add-movie-btn");
const searchButton = document.getElementById("search-btn");

const movies = [];

const renderMovies = (filter = "") => {
  const movieList = document.getElementById("movie-list");
  if (movies.length == 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }

  movieList.innerHTML = "";

  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => {
        return movie.info.title.includes(filter);
      });

  filteredMovies.forEach((movie) => {
    const { info } = movie;
    let { getFormattedTitle } = movie;
    // console.log(otherProps);
    // const { title: movieTitle } = info;
    // const { getFormattedTitle } = movie;
    getFormattedTitle = getFormattedTitle.bind(movie);
    const movieEl = document.createElement("li");
    let text = movie.getFormattedTitle() + " - ";

    for (const key in info) {
      if (key !== "title") {
        text = text + `${key}: ${info[key]}`;
      }
    }
    movieEl.textContent = text;

    movieList.appendChild(movieEl);
  });
};

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
    getFormattedTitle() {
      return this.info.title.toUpperCase();
    },
  };

  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  const inputWord = document.getElementById("filter-title").value;
  renderMovies(inputWord);
};

addMovieButton.addEventListener("click", addMovieHandler);

searchButton.addEventListener("click", searchMovieHandler);
