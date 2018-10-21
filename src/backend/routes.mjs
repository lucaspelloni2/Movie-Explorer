import express from "express";
import moviesRouter from "./api/movies";

const router = express.Router();
//Different backend routes goes here
router.use("/movies", moviesRouter);

export default router;
