const express = require("express");
const app = express();
const PORT = 8080;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With",
    "Content-Type",
    "Accept"
  );
  next();
});
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.html");
})

app.get("/events", (req, res) => {
  const events = require("./public/events/db/events.json");
  console.log("These are events: ", events);
  res.json(events);
});

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
