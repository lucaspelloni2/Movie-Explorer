import express from "express";
import { asyncHandler } from "../helpers/requestHandler";
import extractor from "../helpers/filmsExtractor";
import errorHandler from "../errorHandler";
import imdb from "../fetchers/imdb";

const moviesRouter = express.Router();

moviesRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    return extractor.getFilms();
  })
);

moviesRouter.get(
  "/find",
  asyncHandler(async (req, res) => {
    if (!req.query.movie) {
      return errorHandler.noQueryParameterProvided();
    }
    const movie = req.query.movie;
    return await imdb.get();
  })
);

export default moviesRouter;
