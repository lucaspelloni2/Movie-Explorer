import express from "express";
import router from "./routes";
import cors from "cors";

let app;
let server;
export default {
  setupApp: async () => {
    app = express();

    app.use("/api", router);
    app.use(cors({ credentials: true, origin: ["http://localhost:3000"] }));
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
