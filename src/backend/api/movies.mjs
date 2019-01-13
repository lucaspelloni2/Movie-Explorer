import express from "express";
import { asyncHandler } from "../helpers/requestHandler";
import extractor from "../helpers/filmsExtractor";
import errorHandler from "../errorHandler";
import imdb from "../fetchers/imdb";
import apicache from "apicache";
import queryString from "query-string";

const moviesRouter = express.Router();

moviesRouter.get(
  "/",
  apicache.middleware("24 hours"),
  asyncHandler(async (req, res) => {
    return extractor.getFilms();
  })
);

moviesRouter.get(
  "/find",
  asyncHandler(async (req, res) => {
    if (!req.query.title) {
      return errorHandler.noQueryParameterProvided();
    }
    return await Promise.all(
      req.query.title.map(async title => {
        return await extractor.getFilmFromTorrentTitle(title);
      })
    );
  })
);

export default moviesRouter;
