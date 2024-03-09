import express from "express";

const app = express();
const port = 3000;

function logger(req, res, next) {
  console.log("Request Method: ", req.method, "Request URL: ", req.url);
  next();
}

app.use(logger);

// Since we've created a separate function called logger, the line of code below is not needed now for our middleware.
// app.use((req, res, next) => {
//   console.log("Request method: ", req.method, "\n", "Request URL: ", req.url);
// });

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
