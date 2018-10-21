import app from "./app";

app.setupApp();
app.listenTo(process.env.PORT || 8080);
console.log("App started. Date: " + new Date().toString());
