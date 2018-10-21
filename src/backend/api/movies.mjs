import express from "express";
import { asyncHandler } from "../helpers/requestHandler";
import extractor from "../helpers/filmsExtractor";
import errorHandler from "../errorHandler";

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
  })
);

export default moviesRouter;
