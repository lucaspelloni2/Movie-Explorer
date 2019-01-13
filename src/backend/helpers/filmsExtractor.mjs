import fs from "fs";
import tnp from "torrent-name-parser";
import getSize from "get-folder-size";
import pretty from "prettysize";
import imdb from "../fetchers/imdb";
import { Film } from "../models/Film";
import omdb from "../fetchers/omdb";
import moviedb from "../fetchers/moviedb";

/*const FILM_DIRECTORY =
  "/Volumes/Lucas's USB C HD/old hardisk/Film/All";*/

const FILM_DIRECTORY =
  "/Users/lucaspelloni/Desktop/GitHub/movie-explorer/films";

const preProcessTitle = title => {
  return title.replace(/[^a-zA-Z ]/g, " ");
};

const getFileSize = async path => {
  const ab = getSize(path, function(err, size) {
    if (err) {
      throw err;
    }
    return getFileSize(pretty(size, { places: 2 }));
  });
};

const getFilmFromTitle = title => {};

const getFiles = async () => {
  let films = [];

  return await Promise.all(
    fs.readdirSync(FILM_DIRECTORY).map(async file => {
      const film = new Film(tnp(file));
      if (film.title) {
        film.path = file;
        film.title = preProcessTitle(film.title);
        films.push(film);
        const myFilm = await imdb.get(film.title);
        if (myFilm) {
          film.id = myFilm.id;
          film.movieLink = myFilm.movieLink;
          if (film.id) {
            const myFilmData = await omdb.getMetaData(film.id);
            // film.trailer = await moviedb.getTrailer(film.id);
            return { ...film, ...myFilmData };
          } else {
            // TODO: handle films without id case (thus not found on the api)
            return film;
          }
        }
        return film;
      } else {
        console.log(" // TODO: handle case with title not well formatted");
        // TODO: handle case with title not well formatted
      }
    })
  );
};

export default {
  getFilms: async () => {
    return getFiles();
  }
};
