const express = require("express"),
  path = require("path");

const app = express();

app.use(express.static("./dist/testAngular"));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/dist/testAngular/index.html"));
});

app.listen(process.env.PORT || 8080, () => {
  console.log("server started");
});
