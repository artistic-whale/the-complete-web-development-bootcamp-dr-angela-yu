import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Welcome to the homepage while using Express.js!<h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About us</h1>");
});

app.use((req, res) => {
    res.status(404).send("<h1>Page not found</h1>");
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3001");
});