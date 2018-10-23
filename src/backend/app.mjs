import express from "express";
import router from "./routes";
import cors from "cors";
import extractor from "./helpers/filmsExtractor";

let app;
let server;
export default {
  setupApp: async () => {
    app = express();

    app.use(function(req, res, next) {
      // Website you wish to allow to connect
      res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

      // Request methods you wish to allow
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
      );

      // Request headers you wish to allow
      res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
      );

      // Set to true if you need the website to include cookies in the requests sent
      // to the API (e.g. in case you use sessions)
      res.setHeader("Access-Control-Allow-Credentials", true);

      // Pass to next layer of middleware
      next();
    });

    app.use("/api", router);
    // app.use(cors({origin: ["http://localhost:3000"] }));
  },
  listenTo: port => {
    server = app.listen(port || 8080);
  },
  close: async () => {
    return new Promise(resolve => {
      server.close(() => {
        resolve();
      });
    });
  }
};
