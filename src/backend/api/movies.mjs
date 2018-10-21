import express from "express";
import { asyncHandler } from "../helpers/requestHandler";
import extractor from "../helpers/filmsExtractor";

const moviesRouter = express.Router();

moviesRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    return extractor.getFilms();
  })
);

export default moviesRouter;
