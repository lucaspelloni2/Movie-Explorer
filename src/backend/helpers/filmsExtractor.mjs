import fs from "fs";
import tnp from "torrent-name-parser";
import imdb from "../fetchers/imdb";
import { Film } from "../models/Film";

// const FILM_DIRECTORY = "/Volumes/Azione/Film/NEW+NEW";
const FILM_DIRECTORY = "./films";

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

  const myFilms = await Promise.all(
    films.map(async film => {
      const myFilm = await imdb.get(film.title);
      film.id = myFilm.id;
      film.movieLink = myFilm.movieLink;
      return film;
    })
  );

  return myFilms;
};

export default {
  getFilms: async () => {
    return getFiles();
  }
};
