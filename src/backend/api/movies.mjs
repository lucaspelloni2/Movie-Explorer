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
    if (!req.query.title) {
      return errorHandler.noQueryParameterProvided();
    }
    const title = req.query.title;
    return await imdb.get(title);
  })
);

export default moviesRouter;
