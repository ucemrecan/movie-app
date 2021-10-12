// omdb api key
const apiKey = "d487de3d";

// constants
const query = document.getElementById("search");
const main = document.getElementById("main");
const searchButton = document.getElementById("searchBtn");

// get movies
async function getMovies() {
    // url
    const url = "https://www.omdbapi.com/?t=" + query.value + "&apikey=" + apiKey;
    // data
    const res = await fetch(url);
    const resData = await res.json();
    // create movie div
    const movieDiv = document.createElement("div");
    main.appendChild(movieDiv);
    movieDiv.classList.add("movieContainer");
    // get poster
    const imgMovie = document.createElement("img");
    const imgSrc = resData.Poster;
    imgMovie.setAttribute("src", imgSrc);
    movieDiv.appendChild(imgMovie);
    // create info div
    const movieTable = document.createElement("div");
    movieDiv.appendChild(movieTable);
    movieDiv.classList.add("movieInfo");
    // title
    const title = document.createElement("h3");
    const titleText = document.createTextNode(resData.Title);
    title.appendChild(titleText);
    movieTable.appendChild(title);
    //get genre
    const genre = document.createElement("p");
    const genreText = document.createTextNode(resData.Genre);
    genre.appendChild(genreText);
    movieTable.appendChild(genre);
    // get imdb rating
    const imdb = document.createElement("p");
    const imdbText = document.createTextNode("Imdb Ratings: " + resData.imdbRating);
    imdb.appendChild(imdbText);
    movieTable.appendChild(imdb);
    // directors
    const director = document.createElement("p");
    const directorText = document.createTextNode("Director: " + resData.Director);
    director.appendChild(directorText);
    movieTable.appendChild(director);
    // writer
    const writer = document.createElement("p");
    const writerText = document.createTextNode("Writer: " + resData.Director);
    writer.appendChild(writerText);
    movieTable.appendChild(writer);
    // actors
    const actors = document.createElement("p");
    const actorsText = document.createTextNode("Actors: " + resData.Actors);
    actors.appendChild(actorsText);
    movieTable.appendChild(actors);
    // get summary
    const plot = document.createElement("p");
    const plotText = document.createTextNode(resData.Plot);
    plot.appendChild(plotText);
    movieTable.appendChild(plot);

    removeSubtitle()

  };

// get weekly recommends
async function getRecommends() {
  const movies = ["mr+robot","inglourious+basterds","joker","bojack+horseman","succession","the+social+dilemma"];

  for (let i = 0; i < 6; i++) {
    // url
    const url1 = "https://www.omdbapi.com/?t=" + movies[i] + "&apikey=d487de3d";
    // data
    const res1 = await fetch(url1);
    const res1Data = await res1.json();
    // create div
    const movie1Div = document.createElement("div");
    main.appendChild(movie1Div);
    movie1Div.classList.add("movieContainer1");
    // get poster
    const imgMovie1 = document.createElement("img");
    const imgSrc1 = res1Data.Poster;
    imgMovie1.setAttribute("src", imgSrc1);
    movie1Div.appendChild(imgMovie1);
    // title
    const title1 = document.createElement("h3");
    const title1Text = document.createTextNode(res1Data.Title);
    title1.appendChild(title1Text);
    movie1Div.appendChild(title1);
    //get genre
    const genre1 = document.createElement("p");
    const genre1Text = document.createTextNode(res1Data.Genre);
    genre1.appendChild(genre1Text);
    movie1Div.appendChild(genre1);
    // get imdb rating
    const imdb1 = document.createElement("p");
    const imdb1Text = document.createTextNode("Imdb Ratings: " + res1Data.imdbRating);
    imdb1.appendChild(imdb1Text);
    movie1Div.appendChild(imdb1);

}

}

getRecommends();

// remove subtitle
function removeSubtitle() {
  const subtitle = document.getElementById("subtitle");
  subtitle.classList.add("delete");
}

// reset page
let started = false;
searchButton.addEventListener("click", () => {
    if (!started) {
      getMovies();
      main.innerHTML = "";
    }
});
