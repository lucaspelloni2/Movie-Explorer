import express from "express";
import { asyncHandler } from "../helpers/requestHandler";

const moviesRouter = express.Router();

moviesRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    return {
      movie: {
        title: "culo",
        year: "2018"
      }
    };
  })
);

export default moviesRouter;
