import fs from "fs";
import tnp from "torrent-name-parser";
import getSize from "get-folder-size";
import pretty from "prettysize";
import imdb from "../fetchers/imdb";
import { Film } from "../models/Film";
import omdb from "../fetchers/omdb";

// const FILM_DIRECTORY = "/Volumes/Lucas's USB C HD/old hardisk/AddedOnDataBase/1";
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

const getFiles = async () => {
  let films = [];
  fs.readdirSync(FILM_DIRECTORY).map(async file => {
    if (file !== ".DS_Store") {
      const film = new Film(tnp(file));
      // const path = FILM_DIRECTORY + "/" + file;

      // TODO: fix the size
      /*      getSize(path, function(size) {
        console.log(size); // this is where you get the return value
      });*/

      if (film.title) {
        film.path = file;
        film.title = preProcessTitle(film.title);
        films.push(film);
      }
    }
  });

  return await Promise.all(
    films.map(async film => {
      const myFilm = await imdb.get(film.title);
      if (myFilm) {
        film.id = myFilm.id;
        film.movieLink = myFilm.movieLink;
        if (film.id) {
          const myFilmData = await omdb.getMetaData(film.id);
          return { ...film, ...myFilmData };
        } else {
          // TODO: handle films without id case (thus not found on the api)
        }
      }
    })
  );
};

export default {
  getFilms: async () => {
    return getFiles();
  }
};
