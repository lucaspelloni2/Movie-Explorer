import fs from "fs";
import tnp from "torrent-name-parser";
import { Film } from "../models/Film";

const FILM_DIRECTORY = "/Volumes/Azione/Film/NEW+NEW";

const getFiles = () => {
  let films = [];
  fs.readdirSync(FILM_DIRECTORY).forEach(file => {
    const film = new Film(tnp(file));
    films.push(film);
  });
  return films;
};

export default {
  getFilms: async () => {
    return getFiles();
  }
};
