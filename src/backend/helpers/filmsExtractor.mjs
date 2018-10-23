import fs from "fs";
import tnp from "torrent-name-parser";
import imdb from "../fetchers/imdb";
import { Film } from "../models/Film";
import omdb from "../fetchers/omdb";

const FILM_DIRECTORY = "/Volumes/Lucas's USB C HD/old hardisk/Film/NEW";
//const FILM_DIRECTORY = "./films";

const getFiles = async () => {
  let films = [];
  fs.readdirSync(FILM_DIRECTORY).map(async file => {
    if (file !== ".DS_Store") {
      const film = new Film(tnp(file));
      if (film.title) {
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
