import express from "express";

const app = express();

app.get("/", function(req, res) {
  res.send("Hello World");
});

app.listen(8080); 

console.log('App started. Date: ' + new Date().toString());

export default app;
