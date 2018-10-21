import express from "express";
import router from "./routes";

let app;
let server;
export default {
  setupApp: async () => {
    app = express();
    // app.use(cors({credentials: true, origin: ['http://localhost:3000']}));
    app.use("/api", router);
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
